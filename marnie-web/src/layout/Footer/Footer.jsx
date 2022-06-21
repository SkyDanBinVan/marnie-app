import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <div className="footer_footer">
                <p className="text">
                <a href="https://www.facebook.com/Overdrive-Number-Plates-101512529215072">
                        <AiFillFacebook />
                    </a>
                    <a href="https://www.instagram.com/overdriveregistrations/">
                        <AiFillInstagram />
                    </a>
                    Thanks for watching :)
                </p>
            </div>
            <hr />
            <p>
                By{" "}
                <a href="https://www.instagram.com/devrossides/">Binman</a>
            </p>
        </footer>
    );
}
