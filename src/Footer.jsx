import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <p>©{year} Keep Notes</p>
            </footer>
        </>
    );
}

export default Footer