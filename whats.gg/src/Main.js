import React from "react";
import './Main.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import logo from '../src/logo192.png';
import { Link, BrowserRouter } from 'react-router-dom'


function Main(){
    return (
        <>
        <div className="wrapper">
          <Header />

          {/* 헤더 밑 CSS */}
          <div className="UnderHeaderCss"></div>

          {/* 메인 이미지 */}
          <div className="mainImage">
            <img src={logo} alt='React' />
          </div>
          
          <div className="main">
            <div className="sform">
              <form>
                <input type="text" placeholder="소환사명, 소환사명, ..." className="summonerName" />
                <button type="submit" className="summonerSearch">.GG</button>
              </form>
            </div>
          </div>

          {/* 커뮤니티 */}
          <section className="community">
            <div>
              <div className="comunityTitle">
                <h4>
                  <a href="duo">WHATS.GG Talk 인기글</a>
                </h4>
              </div>
              <div className="communityList">
                <article>1</article>
                <article>2</article>
                <article>3</article>
                <article>4</article>
                <article>5</article>
                <article>6</article>
                <article>7</article>
                <article>8</article>
                <article>9</article>
                <article>10</article>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </>
    );
}

export default Main