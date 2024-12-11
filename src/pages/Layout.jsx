import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function Layout() {

    return (
        <>
            <AppHeader></AppHeader>
            <main className="container min-vh-100">
                <Outlet></Outlet>
            </main>
            <AppFooter />
        </>
    )
}