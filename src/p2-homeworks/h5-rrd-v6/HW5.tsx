import React from 'react'
import Pages from "./Pages";
import Header from "./Header";
import {HashRouter} from "react-router-dom";



function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
            <Header/>
            <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
