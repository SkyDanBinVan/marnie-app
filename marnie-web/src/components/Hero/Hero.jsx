import React from "react";
import CommandsTable from "../CommandsTable/CommandsTable";
import Stream from "../Stream/Stream";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="heroContainer">
            <CommandsTable />
            <div className="streamDiv">
                <Stream chat={false} />
            </div>
        </div>
    );
}
