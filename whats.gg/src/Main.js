import React, { useState } from "react";
import './Main.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import logo from '../src/logo192.png';
import { Link, BrowserRouter } from 'react-router-dom'


function Main() {
  // const tbNums = ['1','내용1','2','내용2','3','4','5','6','7','8','9','10'];
  const [titles, setTitles] = useState([
    {id: 1, text: "1" },
    {id: 2, text: "내용1" },
    {id: 3, text: "2" },
    {id: 4, text: "내용2" }
  ]);
                
  const tbTitles = titles.map((title) => <td key={title.id}>{title.text}</td>);
  
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
              <table>
                  {tbTitles}
                </table>
                <table>
                  {tbTitles}
                </table>
                <table>
                  {tbTitles}
                </table>
                <table>
                  {tbTitles}
                </table>
                <table>
                  {tbTitles}
                </table>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </>
    );
}

export default Main