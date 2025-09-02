import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import wishlistReducer from "../../store/wishlistSlice";
import WishlistPage from "../Wishlist";

function renderWithStore(preloadedState = { wishlist: { items: [] } }) {
    const store = configureStore({
        reducer: { wishlist: wishlistReducer },
        preloadedState,
    });

    return render(
        <Provider store={store}>
            <MemoryRouter>
                <WishlistPage />
            </MemoryRouter>
        </Provider>
    );
}

describe("WishlistPage", () => {
    test("renders empty message", () => {
        renderWithStore();

        expect(screen.getByText(/Wishlist is empty/i)).toBeInTheDocument();
    });

    test("renders wishlist movies", () => {
        renderWithStore({
            wishlist: {
                items: [
                    { id: 1, title: "Inception", poster_path: "/inception.jpg" },
                    { id: 2, title: "Interstellar", poster_path: "/interstellar.jpg" },
                ],
            },
        });

        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByText("Interstellar")).toBeInTheDocument();
    });

    test("renders posters", () => {
        renderWithStore({
            wishlist: {
                items: [{ id: 1, title: "Tenet", poster_path: "/tenet.jpg" }],
            },
        });

        const img = screen.getByRole("img", { name: "Tenet" });
        expect(img).toHaveAttribute("src", expect.stringContaining("/tenet.jpg"));
    });

    test("remove movie in remove button", async () => {
        const user = userEvent.setup();

        renderWithStore({
            wishlist: {
                items: [{ id: 1, title: "Inception", poster_path: "/inception.jpg" }],
            },
        });

        expect(screen.getByText("Inception")).toBeInTheDocument();

        const removeButton = screen.getByRole("button", { name: /remove from wishlist/i });
        await user.click(removeButton);

        expect(await screen.findByText(/Wishlist is empty/i)).toBeInTheDocument();
    });
});