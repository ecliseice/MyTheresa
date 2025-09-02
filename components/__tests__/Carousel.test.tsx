import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../../store/wishlistSlice";
import Carousel from "../Carousel";


function renderWithStore(items: any[] = [], preloadedState = { wishlist: { items: [] } }) {
    const store = configureStore({
        reducer: { wishlist: wishlistReducer },
        preloadedState,
    });

    return render(
        <Provider store={ store }>
            <MemoryRouter>
                <Carousel title="Popular Movies" items={ items }/>
            </MemoryRouter>
        </Provider>
    );
}

describe("Carousel component", () => {
    const sampleMovies = [
        { id: 1, title: "Inception", poster_path: "/inception.jpg" },
        { id: 2, title: "Interstellar", poster_path: "/interstellar.jpg" },
    ];

    test("renders title", () => {
        renderWithStore(sampleMovies);

        expect(screen.getByText(/Popular Movies/i)).toBeInTheDocument();
    });

    test("renders movie list", () => {
        renderWithStore(sampleMovies);

        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByText("Interstellar")).toBeInTheDocument();
    });

    test("renders posters", () => {
        renderWithStore(sampleMovies);

        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(2);
        expect(images[0]).toHaveAttribute("src", expect.stringContaining("/inception.jpg"));
    });
});