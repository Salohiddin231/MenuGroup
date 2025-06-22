
export default function DayDish({ foto, name, color, stock, subtitle, price }) {
    return (
        <>
            <li className="daydish_card">
                <img src={foto} alt="" />
                <div className="daydish_bottom">
                    <div className="daydish_name_wrap">
                        <h4 className="daydish_name">{name}</h4>
                        <div className={`daydish_stock daydish_${color}`}>{stock}</div>
                    </div>
                    <p className="daydish_subtitle">{subtitle}</p>
                    <h5 className="daydish_price">Цена: {price}</h5>
                    <button className="daydish_update">редактировать</button>
                </div>
            </li>
        </>
    )
}
