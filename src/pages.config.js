import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Contact": Contact,
    "Home": Home,
    "Pricing": Pricing,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};