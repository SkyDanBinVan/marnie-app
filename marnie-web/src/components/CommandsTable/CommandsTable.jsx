import React, { useEffect, useState} from "react";
import "./CommandsTable.css";

export default function CommandsTable() {
    const [commands, setCommands] = useState([])
    useEffect(() => {
        fetch("http://0.0.0.0:8000")
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw res
        })
        .then(res => {
          setCommands(res)
        })
        .catch(console.error)
    }, []);
    let headers = [{ heading: "Commands" }, { heading: "Description" }];
    let subHeaders = [
        { subHeader: "General" },
        { subHeader: "Splatoon 2" },
        { subHeader: "Pokemon TCGO" },
    ];
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {headers.map((item, index) => <TableHeadItem item={item} key={index}/>)}
                    </tr>
                </thead>
                <tbody>
                    {setOrder(subHeaders, commands).map((item, index) => (
                        <TableDataItem item={item} key={index}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}
const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const setOrder = (subHeaders, commands) => {
    let tableList = [];
    subHeaders.forEach((element) => {
        tableList.push(element);
        commands.forEach((subElement) => {
            if (subElement.header === element.subHeader) {
                tableList.push(subElement);
            }
        });
    });
    return tableList;
};
const TableDataItem = ({ item }) => {
    if (item.subHeader) {
        return (
            <tr>
                <th colSpan="2">{item.subHeader}</th>
            </tr>
        );
    } else {
        return (
            <>
                <tr>
                    <td rowSpan="2">
                        <b>{item.name}</b>
                    </td>
                    <td>
                        <p>{item.description}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="notes">{item.notes}{item.notes && item.cooldown && <br/>}{item.cooldown ? <b>This command has a cooldown of {item.cooldown} minutes.</b> : null}</p>
                    </td>
                </tr>
            </>
        );
    }
};
