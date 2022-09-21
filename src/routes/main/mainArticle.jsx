import React from 'react';
import style from './mainArticle.module.css';
import { useNavigate } from "react-router-dom";

function MainArticle() {
    let navigate = useNavigate();

    return (
        <div>
            <div className={style.wrap}>
                <div className={style.first__article}>
                    <div className={style.article__left}>
                        <div className={style.img__box}>
                            <img className={style.background__img} src="./imgs/main/articlebackground.jpg" alt="" />
                        </div>
                        <div className={style.img__a}>
                            <h3 className={style.img__b}>CELEB'S PICK</h3>
                            <button className={style.button} onClick={() => { navigate('/story')}}>MORE VIEW</button>
                        </div>
                    </div>
                    <div className={style.article__right}>
                        <div className={style.img__a}>
                            <h3 className={style.img__b}>REVIEW</h3>
                            <button className={style.button} onClick={() => { navigate('/cs')}}>MORE VIEW</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainArticle;