import { CiSearch } from "react-icons/ci";

export default function Header({ text }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h1 className="header_title">{text}</h1>

                    <div className="header_input">
                        <div className="header_search">
                            <CiSearch className="search_icon" />
                            <input
                                type="text"
                                className="search_input"
                                placeholder="Поиск"
                            />
                            <button className="mic_btn">🎤</button>
                        </div>

                        <select className="header_select">
                            <option value="Менеджер Саша">Менеджер Саша</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}