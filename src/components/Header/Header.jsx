import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Header({ text }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Менеджер Саша");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };

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
                            <button className="mic_btn">
                                <MdKeyboardVoice />
                            </button>
                        </div>

                        <div className="custom_dropdown">
                            <div className="dropdown_selected" onClick={toggleDropdown}>
                                {selected}
                                <IoIosArrowDown className={`dropdown_icon ${isOpen ? 'open' : ''}`} />
                            </div>

                            {isOpen && (
                                <ul className="dropdown_list">
                                    <li onClick={() => handleSelect("Менеджер Саша")}>
                                        Менеджер Саша
                                    </li>
                                    <li onClick={() => handleSelect("Менеджер Анна")}>
                                        Менеджер Анна
                                    </li>
                                    <li onClick={() => handleSelect("Менеджер Алексей")}>
                                        Менеджер Алексей
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
