
export default function Statistics({ color, src, text, num }) {
    return (
        <>
            <li className="statistic_card">
                <div className={`statistic_icon statistic_${color}`}>
                    <img src={src} alt="" />
                </div>
                <div className="statistic_info_wrap">
                    <p className="statistic_text">{text}</p>
                    <h4 className="statistic_num">{num}</h4>
                </div>
            </li>
        </>
    )
}
