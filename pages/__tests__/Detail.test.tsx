import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../../store/wishlistSlice";
import DetailPage from "../Detail";
import * as api from "../../api/movies";
import userEvent from "@testing-library/user-event";

// mock API
jest.spyOn(api, "getMovieDetails").mockResolvedValue({
    id:          1,
    title:       "Inception",
    overview:    "Overview",
    poster_path: "/inception.jpg",
});

jest.mock("../../api/movies", () => ({
    getMovieDetails: jest.fn().mockResolvedValue({
        id: 1,
        title: "Inception",
        overview: "Overview",
        poster_path: "/inception.jpg"
    }),
}));

function renderWithStore(initialPath = "/movie/1", preloadedState = { wishlist: { items: [] } }) {
    const store = configureStore({
        reducer: { wishlist: wishlistReducer },
        preloadedState,
    });

    return render(
        <Provider store={ store }>
            <MemoryRouter initialEntries={ [ initialPath ] }>
                <Routes>
                    <Route path="/movie/:id" element={ <DetailPage/> }/>
                </Routes>
            </MemoryRouter>
        </Provider>
    );
}

describe("DetailPage", () => {
    test("renders title and overview", async () => {
        renderWithStore();

        expect(await screen.findByText("Inception")).toBeInTheDocument();
        expect(await screen.findByText("Overview")).toBeInTheDocument();
    });

    test("renders poster", async () => {
        renderWithStore();

        const img = await screen.findByRole("img", { name: "Inception" });
        expect(img).toHaveAttribute("src", expect.stringContaining("/inception.jpg"));
    });

    test("button add movie to wishlist", async () => {
        const user = userEvent.setup();
        renderWithStore();

        const button = await screen.findByRole("button", { name: /Add to Wishlist/i });
        expect(button).toBeInTheDocument();

        await user.click(button);

        expect(await screen.findByRole("button", { name: /In Wishlist/i })).toBeInTheDocument();
    });

    test("if movie in wishlist - button is active", async () => {
        renderWithStore("/movie/1", {
            wishlist: { items: [ { id: 1, title: "Inception", poster_path: "/inception.jpg" } ] },
        });

        const button = await screen.findByRole("button");
        expect(button).toHaveTextContent("In Wishlist");
    });
});