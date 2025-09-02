import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import wishlistReducer from "../../store/wishlistSlice";
import HomePage from "../HomePage";
import * as api from "../../api/movies";

// mock API
jest.mock("../../api/movies", () => ({
    getPopularMovies:  jest.fn(),
    getTopRatedMovies: jest.fn(),
    getUpcomingMovies: jest.fn(),
}));

function renderWithStore() {
    const store = configureStore({
        reducer: { wishlist: wishlistReducer },
    });

    return render(
        <Provider store={ store }>
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        </Provider>
    );
}

describe("HomePage", () => {
    beforeEach(() => {
        (api.getPopularMovies as jest.Mock).mockResolvedValue([
            { id: 1, title: "Inception", poster_path: "/inception.jpg" },
        ]);
        (api.getTopRatedMovies as jest.Mock).mockResolvedValue([
            { id: 2, title: "Interstellar", poster_path: "/interstellar.jpg" },
        ]);
        (api.getUpcomingMovies as jest.Mock).mockResolvedValue([
            { id: 3, title: "Tenet", poster_path: "/tenet.jpg" },
        ]);
    });

    test("renders carousel titles", async () => {
        renderWithStore();

        expect(await screen.findByText(/Popular/i)).toBeInTheDocument();
        expect(await screen.findByText(/Top Rated/i)).toBeInTheDocument();
        expect(await screen.findByText(/Upcoming/i)).toBeInTheDocument();
    });

    test("renders api movies", async () => {
        renderWithStore();

        expect(await screen.findByText("Inception")).toBeInTheDocument();
        expect(await screen.findByText("Interstellar")).toBeInTheDocument();
        expect(await screen.findByText("Tenet")).toBeInTheDocument();
    });

    test("renders posters", async () => {
        renderWithStore();

        const imgs = await screen.findAllByRole("img");
        expect(imgs.length).toBeGreaterThanOrEqual(3);
    });
});