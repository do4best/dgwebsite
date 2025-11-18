import React from 'react';
import Header from "./Header.jsx";
import MyHero from "./body/MyHero.jsx";
import MySubHero from "./body/mySubHero.jsx";

function MainDjSite(props) {
    return (
        <>
<Header/>
       <MyHero/>
            <MySubHero/>
        </>
    );
}

export default MainDjSite;