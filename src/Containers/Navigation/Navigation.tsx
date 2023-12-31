import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudyCom1 from "../../Pages/Study/StudyCom1";
import PizzaTime from "../../Pages/Pizzatime/Pizzatime";
// import Menu from "../Home/Menu";
// import Home from "../../Pages/Pizzatime/Home";
import About from "../../Pages/Pizzatime/About";
import Blog from "../../Pages/Pizzatime/Blog";
import Contact from "../../Pages/Pizzatime/Contact";
import { Home } from "../../Pages/Pizzatime/Home";
import Menu from "../../Pages/Pizzatime/Menu";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='' element={<StudyCom1 />} /> */}
                    <Route path='/' element={<PizzaTime />} >
                        <Route path='menu' element={<Menu />} />
                        <Route path='' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='blog' element={<Blog />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Navigation