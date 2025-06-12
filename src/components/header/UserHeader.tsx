import { useEffect } from "react";
import { Link } from "react-router";
import Logo from "../../../public/logo.png";

export default function UserHeader() {
    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
    }, []);
    return (
        <header className="bg-white px-20 h-[80px] w-full flex justify-center items-center shadow-lg backdrop-blur-sm">
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
                        <li className="" style={{ color: "rgb(20, 30, 79)", fontSize: 20 }}>
                            <Link to={"/subjects"}>İxtisaslar</Link>
                        </li>
                        <li style={{ color: "rgb(20, 30, 79)", fontSize: 20 }}>
                            <Link to={"/"}>Giriş balları</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-end items-center" style={{ width: "calc(100% / 3)" }}>
                    Az En
                </div>
            </nav>
        </header>
    )
}
