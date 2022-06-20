import React from "react";
import {
    TwitchEmbed,
    TwitchChat
} from "react-twitch-embed";

export default function Stream({ chat }) {
    return (
        <>
            <div className="twitchStream">
                <TwitchEmbed
                    channel="binvan"
                    // id="bkeha"
                    theme="dark"
                    muted={false}
                    onVideoPause={() => console.log(":(")}
                    withChat={!chat}
                    width="100%"
                />
            </div>
            <div className="twitchChat">
                {chat ? (
                    <TwitchChat
                        channel="binvan"
                        theme="dark"
                        width="100%"
                        height="100%"
                    />
                ) : null}
            </div>
            {/* <TwitchClip clip="WealthyBumblingKimchiItsBoshyTime" parent={['mycoolsite.com, anotherawesomesite.net']} /> */}
            {/* <TwitchPlayer video="333014765" /> */}
        </>
    );
}
