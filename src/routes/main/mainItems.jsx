import React from 'react';
import style from './mainItems.module.css';

function MainItems() {
    return (
        <div>
            <div className={style.wrap}>
                <div className={style.first__article}>
                        <div className={style.article__left}>
                            <div className={style.img__box}>
                                <img className={style.bag__img} src="./imgs/main/daysbag.jpg" alt="" />
                            </div>
                            <div  className={style.bag__description}>
                                <h4 className={style.bag__title}>DAYS</h4>
                                <p className={style.bag__detail}>은은한 광택과 클래식한 디자인이 돋보이는 토트백 '데이즈'</p>
                            </div>
                        </div>
                        <div className={style.article__left}>
                            <div className={style.img__box}>
                                <img className={style.bag__img} src="./imgs/main/punnybag.jpg" alt="" />
                            </div>
                            <div  className={style.bag__description}>
                                <h4 className={style.bag__title}>FUNNY</h4>
                                <p className={style.bag__detail}>빈티지한 무드와 자연스러운 핏이 멋스러운 숄더백 ‘퍼니’</p>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    );
}


export default MainItems;