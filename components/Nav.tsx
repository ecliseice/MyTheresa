import { Link, NavLink } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";

const Nav = () => {
    const { movies } = useWishlist();

    const wishlistCount = movies.length

    const nav = [
        {
            title: "Home",
            path:  "/"
        },
        {
            title: "Wishlist",
            path:  "/wishlist"
        }
    ];

    return (
        <nav className="nav">
            <div className="nav__inner">
                <Link to="/" className="nav__brand">
                    Film<span>Browser</span>
                </Link>

                <ul className="nav__menu">
                    { nav.map(({ title, path }) => (
                        <li key={ title } className="nav__item">
                            <NavLink
                                to={ path }
                                className={ ({ isActive }) =>
                                    "nav__link" + (isActive ?
                                        " is-active" :
                                        "")
                                }
                            >
                                { title }
                                { title === 'Wishlist' && wishlistCount > 0 && (
                                    <span className="nav__badge">{ wishlistCount }</span>
                                ) }
                            </NavLink>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
