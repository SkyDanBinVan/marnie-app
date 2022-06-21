import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <div className="footer_footer">
                <p className="text">
                    <a href="https://www.instagram.com/drossides/">
                        <AiFillInstagram />
                    </a>
                    Thanks for watching :)
                </p>
            </div>
            <hr />
            <p>
                By{" "}
                <a href="https://www.twitch.tv/danimoussa">danimoussa</a>
            </p>
        </footer>
    );
}
