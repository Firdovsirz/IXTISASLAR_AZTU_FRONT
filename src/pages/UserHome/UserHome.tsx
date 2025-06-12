import UserHeader from "../../components/header/UserHeader"
import { useEffect } from "react";
import UserImageSection from "../../components/user/UserImageSection";

export default function UserHome() {
    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
    }, []);

    return (
        <>
            <UserHeader />
            <main className="bg-white">
                <UserImageSection />
            </main>
        </>
    )
}
