import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px=1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                    </span>{" "}
                    oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a
                            href="#about"
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        // following could be done either next line or 2 lines after (There's also a short-circuit expression)
                        // The preceding line of code means that currentCategory.name === category.name will get evaluated,
                        //  and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
                        // <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}>
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;