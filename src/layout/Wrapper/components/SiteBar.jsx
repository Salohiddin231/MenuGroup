import { Navigate, NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import { RiHome8Fill } from "react-icons/ri";
import { LuChefHat } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdOutlineTableBar } from "react-icons/md";

export default function Sitebar() {
    return (
        <nav>
            <ul className="sitebar">
                <li className="sitebar_pages1" onClick={Navigate}>
                        <img className="sitebar_logo" src={logo} alt="icon" />
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/">
                        <span className="sitebar_icon_bg">
                            <RiHome8Fill />
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/orders">
                        <span className="sitebar_icon_bg">
                            <LuChefHat />
                        </span>
                    </NavLink>
                </li>
                <li className="sitebar_pages">
                    <NavLink to="/stuff">
                        <span className="sitebar_icon_bg">
                            <FaBoxOpen />
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/waiter">
                        <span className="sitebar_icon_bg">
                            <GrGroup />
                        </span>
                    </NavLink>
                </li>

                <li className="sitebar_pages">
                    <NavLink to="/table">
                        <span className="sitebar_icon_bg">
                            <MdOutlineTableBar />
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}