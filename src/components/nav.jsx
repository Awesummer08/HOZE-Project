import React from 'react';
import style from './nav.module.css';
import { useNavigate } from "react-router-dom";

function Navigation() {
    let navigate = useNavigate();

    return (
        <div className={style.navigation}>
            <nav className={style.container}>
                <div className={style.navbar}>
                    <ul className={style.lists__left}>
                        <li onClick={()=>{ navigate('/onlineshop')}} 
                        className={style.each__left}>온라인스토어</li>
                        <li onClick={() => {navigate('/review')}}
                        className={style.each__left}>리뷰</li>
                        <li onClick={() => {navigate('/location')}} 
                        className={style.each__left}>매장안내</li>
                        <li onClick={() => {navigate('/story')}} 
                        className={style.each__left}>스토리</li>
                    </ul>
                    <h2 onClick={() => { navigate('/mainpage')}} 
                    className={style.title}>HOZE</h2>
                    <ul className={style.lists__right}>
                        <li onClick={() => {navigate('/about')}} 
                        className={style.each__right}>호재에대하여</li>
                        <li onClick={() => {navigate('/mypage')}} 
                        className={style.each__right}>마이페이지</li>
                        <li onClick={() => {navigate('/login')}} 
                        className={style.each__right}>로그인</li>
                        <li onClick={() => {navigate('/cs')}} 
                        className={style.each__right}>고객센터</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;

