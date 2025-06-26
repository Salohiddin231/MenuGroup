import React from 'react';
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TableRow({ number, cabin, seats, status }) {
    return (
        <tr>
            <td>{number}</td>
            <td>{cabin}</td>
            <td>{seats}</td>
            <td>

            </td>
            <td>
                <div className="icon_table">
                    <button className="tab_iconnnn">
                        <MdEditDocument className="tab_icon" />
                    </button>
                    <button className="tab_iconnn_2">
                        <MdDelete className="tab_icon_2" />
                    </button>
                </div>
            </td>
        </tr>
    );
}
