import { useEffect } from "react";
import UserHeader from "../../components/header/UserHeader"
import UserFaculties from "../../components/user/faculties/UserFaculties";

export default function UserFacultiesPage() {
    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
    }, []);

    return (
        <>
            <UserHeader />
            <main className="bg-white">
                <UserFaculties />
            </main>
        </>
    )
}