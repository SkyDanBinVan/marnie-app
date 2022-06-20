import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div>
                  <div className="thing">

                    <img
                        src="/Overdrivelogo.png"
                        alt="logo"
                        className="logo_footer"
                    />
                  </div>
                    <p className="text">
                        © 2022 Overdrive UK Ltd.
                        <br />
                        Overdrive ™ 
                    </p>
                </div>
                <address>
                    <p>Contact us.</p>
                    <a href="tel:07967 111110">07967 111110</a>
                    <br />
                    <a href="mailto:bav@overdrivetech.co.uk">
                        bav@overdrivetech.co.uk
                    </a>
                    <br />
                    <a href="https://www.facebook.com/Overdrive-Number-Plates-101512529215072">
                        <AiFillFacebook />
                    </a>
                    <a href="https://www.instagram.com/overdriveregistrations/">
                        <AiFillInstagram />
                    </a>
                </address>
                <div>
                    <img
                        src="/dvla-logo.png"
                        alt="dvla"
                        className="logo_footer"
                    />
                </div>
            </div>
            <hr />
            <div className="footer_footer">
                <p className="text">
                    We are DVLA registered and comply with british standards
                </p>
                <p className="text">BS AU 145e</p>
                <p className="text">
                    Proof of address (driving licence or utility bill etc.) and
                    vehicle entitlement documentation (V5C or V5C/2 etc.)
                    required for all road legal registration plates.
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
