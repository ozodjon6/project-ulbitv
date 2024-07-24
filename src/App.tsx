import React, {Suspense} from 'react';
import Counter from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom"
import "./index.scss"
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>Main page</Link>
            <Link to={"/about"}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;
