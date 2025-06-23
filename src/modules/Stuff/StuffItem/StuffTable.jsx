import React from 'react'

export default function StuffTable({ num, names, price, slock, fotoupdate, classes }) {
    return (
        <tbody>
            <tr className="stuff_table_wrap">
                <td>{num}</td>
                <td>{names}</td>
                <td><span className={classes}>{slock}</span></td>
                <td>{price}</td>
                <td>
                    <div className="stuff_table_btn_wrap">
                        <button className="edit_btn">
                            <img src={fotoupdate} alt="edit" />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>

    )
}