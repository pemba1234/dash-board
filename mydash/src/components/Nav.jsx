import HeroNav from "./HeroNav";
import AppPage from "./AppPage";
import './Nav.css'

export default function Nav(){
    return(
        <>
        <nav className="shadow p-0 bg-white">
        <HeroNav />
        <AppPage />
        </nav>
        </>
    );
}