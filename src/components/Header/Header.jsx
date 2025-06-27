import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RxExit } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";


export default function Header({ text }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Менеджер Саша");
    const [searchValue, setSearchValue] = useState("");
    const [isListening, setIsListening] = useState(false);

    const recognitionRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Ваш браузер не поддерживает голосовой ввод");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "ru-RU";
        recognition.interimResults = false;
        recognition.continuous = false;

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            setSearchValue(result);
            inputRef.current.value = result;
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error("Ошибка распознавания:", event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };
    const startListening = () => {
        if (recognitionRef.current && !isListening) {
            setSearchValue("");
            setIsListening(true);
            recognitionRef.current.start();

            setTimeout(() => {
                if (isListening) {
                    recognitionRef.current.stop();
                }
            }, 4000);
        }
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
                                ref={inputRef}
                                type="text"
                                className="search_input"
                                placeholder="Поиск"
                                defaultValue={searchValue}
                            />
                            <button
                                className="mic_btn"
                                onClick={startListening}
                                disabled={isListening}
                                title={isListening ? "Слушаю..." : "Голосовой поиск"}
                            >
                                <MdKeyboardVoice
                                    color={isListening ? "red" : "#999"}
                                    style={{ cursor: "pointer" }}
                                />
                            </button>
                        </div>

                        <div className="custom_dropdown">
                            <div className="dropdown_selected" onClick={toggleDropdown}>
                                <CgProfile className="dropdown_icon_prof"/>
                                {selected}
                                <IoIosArrowDown className={`dropdown_icon ${isOpen ? "open" : ""}`} />
                            </div>

                            {isOpen && (
                                <ul className="dropdown_list">
                                    <li onClick={() => handleSelect("Профиль")}>
                                        <div className="dropdown_icon_s">
                                            <CgProfile className="dropdown_icons dropdown_icon_s_prof" />
                                            <p className="dropdown_icon_s_prof">Профиль</p>
                                        </div>
                                        <IoIosArrowForward className="dropdown_icons dropdown_icon_s_prof" />
                                    </li>
                                    <li onClick={() => handleSelect("Выйти")}>
                                        <div className="dropdown_icon_s">
                                            <RxExit className="dropdown_icons dropdown_icon_s_exit" />
                                            <p className="dropdown_icon_s_exit">Выйти</p>
                                        </div>
                                        <IoIosArrowForward className="dropdown_icons dropdown_icon_s_exit" />
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