import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import { RiHome8Fill } from "react-icons/ri";
import { LuChefHat } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdOutlineTableBar } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Sitebar({ isOpen, setIsOpen }) {
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <nav>
            <ul className={`sitebar ${isOpen ? 'open' : ''}`}>
                <li className="sitebar_pages1">
                    {isOpen ? <div className='sitebar_logo_wrap'><img className="sitebar_logo" src={logo} alt="icon" /> kawafood</div> : <img className="sitebar_logo" src={logo} alt="icon" />}
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/">
                        <span className="sitebar_icon_bg">
                            {isOpen ? <p className='sitebar_icon_bg'><RiHome8Fill /> Главная</p> : <RiHome8Fill />}
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/orders">
                        <span className="sitebar_icon_bg">
                            {isOpen ? <p className='sitebar_icon_bg'><LuChefHat /> Заказы</p> : <LuChefHat />}
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/stuff">
                        <span className="sitebar_icon_bg">
                            {isOpen ? <p className='sitebar_icon_bg'><FaBoxOpen /> Товары</p> : <FaBoxOpen />}

                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/waiter">
                        <span className="sitebar_icon_bg">
                            {isOpen ? <p className='sitebar_icon_bg'><GrGroup /> Официанты</p> : <GrGroup />}
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/table">
                        <span className="sitebar_icon_bg">
                            {isOpen ? <p className='sitebar_icon_bg'><MdOutlineTableBar /> Официанты</p> : <MdOutlineTableBar />}
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages sitebar_position">
                    <span className="sitebar_icon_bg" onClick={toggleSidebar}>
                        {isOpen ? <p className='sitebar_icon_bg'><IoClose /> закрыть</p> : <IoMenu />}
                    </span>
                </li>
            </ul>
        </nav>
    );
}
