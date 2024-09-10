import HeroNav from "./subcomponents/HeroNav";
import AppPage from "./subcomponents/AppPage";
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