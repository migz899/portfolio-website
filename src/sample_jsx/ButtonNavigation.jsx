import { useState } from "react";

function ButtonNavigation() {

    const redirectWebsite = () => {
        window.location.href = "https://www.google.com";
    }

    return (
        <section style={{ textAlign: "center", padding: "30px" }}>
            <h2>Button Navigations </h2>
            <button onClick={() => redirectWebsite()}>Google.com</button>
        </section>
    );
}

export default ButtonNavigation;