import React from 'react';
import style from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faJetFighterUp, faBook, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

<FontAwesomeIcon icon={faInstagram} />

function Footer() {
    let navigate = useNavigate();

    return (
        <div className={style.wrap}>
            <div className={style.inner}>
                <div className={style.first__box}>
                    <ul className={style.first__box__list}>
                        <li className={style.first__title}>CUSTOMER CENTER</li>
                        <li className={style.first__number}>02-542-2123</li>
                        <li className={style.first__operationTime}>Open 10:00 ~ 18:00 / Lunch: PM 12:30 - 01:30 / DAY OFF (토/일/공휴일)</li>
                        <li className={style.first__email}>cs@hoze.kr</li>
                    </ul>
                </div>
                <div className={style.second__box}>
                    <ul className={style.second__box__list}>
                        <li className={style.second__list}>HOME</li>
                        <li className={style.second__list}>SHOP GUIDE</li>
                        <li className={style.second__list}>TERMS OF USE</li>
                        <li className={style.second__list}>PRIVACY POLICY</li>
                    </ul>
                </div>
                <div className={style.third__box}>
                    <ul  className={style.third__box__list}>
                        <li className={style.third__list}><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;(주)골드퍼시픽</li>
                        <li className={style.third__list}><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;조정영</li>
                        <li className={style.third__list}><FontAwesomeIcon icon={faJetFighterUp} />&nbsp;&nbsp;220-81-45629</li>
                        <li className={style.third__list}><FontAwesomeIcon icon={faBook} />&nbsp;&nbsp;제 2022-성남중원-0484 호 [사업자정보확인]</li>
                        <li className={style.third__list}><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;13215 경기도 성남시 중원구 둔촌대로 555 (상대원동) 선일테크노피아 907호</li>
                    </ul>
                </div>
                <div className={style.fourth__box}>
                    <ul className={style.fourth__box__list}>
                        <li className={style.fourth__title}>HOZE</li><br/>
                        <li className={style.fourth__address}>A/S 및 반품 : 경기도 성남시 중원구 둔촌대로 555(상대원동) 선일테크노피아 907호 호재</li>
                        <li className={style.fourth__year}>© 2018 hoze</li><br/>
                        <li>
                            <a href="https://www.instagram.com/hoze_official/" className={style.instagram}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;