import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: 300
        };
        return (
            <div>
            <Slider {...settings}>
                <div style = {{ width:'500px', height:'300px'}}>
                    <img style = {{width:'70%', display:'block', margin:'auto', overflowX:'hidden', overflowY:'auto'}} src="./imgs/main/slide1.png" alt="" />
                </div>
                <div>
                    <img style = {{width:'70%', display:'block', margin:'auto', overflowX:'hidden', overflowY:'auto'}} src="./imgs/main/slide2.png" alt=""/>
                </div>
                <div>
                    <img style = {{width:'70%', display:'block', margin:'auto', overflowX:'hidden', overflowY:'auto'}}src="./imgs/main/slide3.png" alt="" />
                </div>
            </Slider>
            </div>

        );
        }
    }