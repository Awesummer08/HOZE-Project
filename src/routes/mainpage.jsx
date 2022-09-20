import React from 'react';
import SimpleSlider from './main/mainSlide.jsx'
import MainArticle from './main/mainArticle';
import MainItems from './main/mainItems';
import Footer from './../components/footer';

function Mainpage() {
    return (
        <div>
            <SimpleSlider />
            <MainArticle />
            <MainItems />
        </div>
    );
}

export default Mainpage;