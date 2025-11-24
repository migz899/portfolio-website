import { useState } from "react";

function ButtonCounter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        if (count > 0) setCount(count - 1);
    }

    // // Traditional If Statement
    // let textColor;
    // if (count > 10) textColor = "red";
    // else textColor = "white";

    // Conditional Statement
    const textColor = count > 9 ? "red" : "white";

    return (
        <section style={{ textAlign: "center", padding: "30px" }}>
            <h2>Button Counter</h2>
            <p style={{ color: textColor }}>You clicked {count} times</p>
            <button onClick={() => handleIncrease(count)}>➕ Increase</button>
            <button onClick={() => handleDecrease(count)}>➖ Decrease</button>
            <button onClick={() => setCount(0)}>🔁 Reset</button>
        </section>
    );
}

export default ButtonCounter;