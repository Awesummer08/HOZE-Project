import React from 'react';
import style from './mainArticle.module.css';

function MainArticle() {
    return (
        <div>
            <div className={style.wrap}>
                <div className={style.first__article}>
                    <div className={style.article__left}>
                        <div className={style.img__box}>
                            <img className={style.background__img} src="./imgs/main/articlebackground.jpg" alt="" />
                        </div>
                        <div className={style.img__name}>
                            <h3>CELEB'S PICK</h3>
                        </div>
                    </div>
                    <div className={style.article__right}>
                        <div className={style.article__details}>
                            <h3 className={style.review}>REVIEW</h3>
                            <span className={style.best__item}>HOZE BEST ITEM</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainArticle;