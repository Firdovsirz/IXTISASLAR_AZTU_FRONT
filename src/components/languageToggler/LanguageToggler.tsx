import { useState } from "react";
import AzFlag from "../../../public/flags/az-flag.png";
import EnFlag from "../../../public/flags/en-flag.png";
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Language {
    language: string;
    flag: string
}

export default function LanguageToggler() {
    const [currentLang, setCurrentLang] = useState<Language>({
        language: "Az",
        flag: AzFlag
    });
    const [dropdown, setDropdown] = useState(false);
    // const languages = [
    //     {
    //         language: "Az",
    //     }, {
    //         language: "En",
    //     }
    // ];
    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    }

    const handleCurrentLang = (lang: string, flag: string) => {
        setCurrentLang(
            {
                language: lang,
                flag: flag
            }
        );
    }

    // const handleMouseEnter = () => {
    //     setDropdown(true);
    // };

    // const handleMouseLeave = () => {
    //     setDropdown(false);
    // };

    return (
        <div
            onClick={toggleDropdown}
            style={{
                position: "relative",
                zIndex: 1000
            }}>
            <div className="flex justify-center items-center px-[5px] py-[5px] rounded-[5px] cursor-pointer" style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                width: 100
            }}>
                {/* <img src={currentLang.flag} alt="Flag" className="w-[35px] mr-[5px]" /> */}
                <LanguageIcon style={{color: "rgba(0, 0, 0, 0.5)", marginRight: "5px"}}/>
                <p className="mr-[10px]" style={{ color: "rgb(20, 30, 79)" }}>{currentLang.language}</p>
                <KeyboardArrowDownIcon style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    transform: dropdown ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease"
                }} />
            </div>
            {dropdown ? (
                <div style={{
                    position: "absolute",
                    bottom: -60,
                    left: 0
                }}>
                    {currentLang.language === "Az" ? (
                        <div
                            className="flex justify-start items-center p-[10px] rounded-[5px] cursor-pointer mt-2"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.2)", backgroundColor: "#fff", width: "fit-content" }}
                            onClick={() => handleCurrentLang("En", EnFlag)}
                        >
                            {/* <LanguageIcon /> */}
                            <p className="mr-[10px]" style={{ color: "rgb(20, 30, 79)" }}>En</p>
                        </div>
                    ) : (
                        <div
                            className="flex justify-start items-center p-[10px] rounded-[5px] cursor-pointer mt-2"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.2)", backgroundColor: "#fff", width: "fit-content" }}
                            onClick={() => handleCurrentLang("Az", AzFlag)}
                        >
                            <p className="mr-[10px]" style={{ color: "rgb(20, 30, 79)" }}>Az</p>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}