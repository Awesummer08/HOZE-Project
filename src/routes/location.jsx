import React from 'react';
import style from './location.module.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Location() {
    return (
        <div>
            <div className={style.wrap}>
                <div className={style.container}>
                    <div className={style.location__details}>
                        <div className={style.store__img}>
                            <div className={style.img__box}>
                                <img className={style.background__img} src="./imgs/location/storeImage.jpg" alt="" />
                            </div>
                        </div>
                        <div className={style.store__description}>
                            <div className={style.article__details}>
                                <span className={style.offline}>OFFLINE&nbsp;<FontAwesomeIcon icon={faChevronRight} /></span>
                                <span className={style.online}>ONLINE&nbsp;<FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;