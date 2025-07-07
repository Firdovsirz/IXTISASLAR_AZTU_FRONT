import { useEffect } from "react";
import { Link } from "react-router";
import Logo from "../../../public/logo.png";
import LanguageToggler from "../languageToggler/LanguageToggler";

export default function UserHeader() {
    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
    }, []);
    return (
    <header className="bg-white px-20 h-[80px] w-full flex justify-center items-center shadow-lg backdrop-blur-sm z-50">
            <nav className="flex justify-between items-center w-[100%]">
                <Link to={"/"} style={{ width: "calc(100% / 3)" }}>
                    <div className="flex items-center cursor-pointer w-[100%]" aria-label="Əsas">
                        <img
                            src={Logo}
                            alt="Azərbaycan Texniki Universiteti ixtisaslar loqo"
                            className="w-[60px] h-[60px] mr-5" />
                        <h2 style={{ color: "rgb(20, 30, 79)", fontWeight: 600, fontSize: 25 }}>
                            AzTU ixtisaslar
                        </h2>
                    </div>
                </Link>
                <div className="flex justify-center items-center" style={{ width: "calc(100% / 3)" }}>
                    <ul className="flex justify-between items-center w-[100%]">
                        <li className="" style={{ color: "rgb(20, 30, 79)", fontSize: 17 }}>
                            <Link to={"/subjects"}>İxtisaslar</Link>
                        </li>
                        <li style={{ color: "rgb(20, 30, 79)", fontSize: 17 }}>
                            <Link to={"/faculties"}>Fakültələr</Link>
                        </li>
                        <li style={{ color: "rgb(20, 30, 79)", fontSize: 17 }}>
                            <Link to={"/"}>Kafedralar</Link>
                        </li>
                        <li className="relative group" style={{ color: "rgb(20, 30, 79)", fontSize: 17 }}>
                            <div className="cursor-pointer">Giriş balları</div>
                            <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 ease-in-out bg-white shadow-md rounded mt-2 z-50">
                                <ul onMouseEnter={(e) => e.currentTarget.parentElement?.classList.add('group-hover')} onMouseLeave={(e) => e.currentTarget.parentElement?.classList.remove('group-hover')}>
                                    <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                                        <Link to="/points/group1">1-ci qrup</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                                        <Link to="/points/group2">2-ci qrup</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-end items-center z-50000" style={{ width: "calc(100% / 3)" }}>
                    <LanguageToggler />
                </div>
            </nav>
        </header>
    )
}
