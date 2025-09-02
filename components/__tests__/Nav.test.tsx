import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../Nav";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../../store/wishlistSlice";
import { store } from "../../store";


function renderWithStore(preloadedState = { wishlist: { items: [] } }) {
    const store = configureStore({
        reducer: { wishlist: wishlistReducer },
        preloadedState,
    });

    return render(
        <Provider store={store}>
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        </Provider>
    );
}

describe("Nav component", () => {
    test("renders site name", () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <Nav/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText(/Film/i)).toBeInTheDocument();
        expect(screen.getByText(/Browser/i)).toBeInTheDocument();
    });

    test("renders nav links", () => {
        renderWithStore();

        expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
    });

    test("there is no '0' if wishlist is empty", () => {
        renderWithStore({ wishlist: { items: [] } });

        expect(screen.queryByText("0")).not.toBeInTheDocument();
    });

    test("there is wishlist movie count", () => {
        renderWithStore({
            wishlist: { items: [{ id: 1, title: "Movie 1", poster_path: "/x.png" }] },
        });

        expect(screen.getByText("1")).toBeInTheDocument();
    });
});