import React, { useEffect, useState } from "react";
import "./Leaderboard.css"

const URL = process.env.REACT_APP_DB_URL;
export default function Leaderboard() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`${URL}/api/users`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((res) => {
                setUserData(res);
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {userData.sort((a, b) => (a.points > b.points) ? -1 : 1).map((element, index) => {
                    return (
                        <tr key={index} className={index ? "table-row" : "points-leader"}>
                            <td>{++index}</td>
                            <td>{element.name}</td>
                            <td>{element.points}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
