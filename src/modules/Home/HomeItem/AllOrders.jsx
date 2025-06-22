import React from 'react'

export default function AllOrders({ waiter, color, time, num, date, orders, orders2, orders3, orders4, orders5, orders6 }) {
    return (
        <>
            <li className="allorders_card">
                <div className="allorders_waiter_wrap">
                    <p className="allorders_waiters">Официант {waiter}</p>
                    <div className={`allorders_time allorders_${color}`}>
                        <p className={`allorders_${color}`}>делвется {time} мин</p>
                    </div>
                </div>
                <div className="allorders_table_wrap">
                    <h4 className="allorders_table">Заказ стол  №{num}</h4>
                    <p className="allorders_date">{date}</p>
                </div>
                <div className="allorders_orders_wrap">
                    <p className="allorders_orders">{orders}</p>
                    <p className="allorders_orders">{orders2}</p>
                    <p className="allorders_orders">{orders3}</p>
                    <p className="allorders_orders">{orders4}</p>
                    <p className="allorders_orders">{orders5}</p>
                    <p className="allorders_orders">{orders6}</p>
                </div>
            </li>
        </>
    )
}
