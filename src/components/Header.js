// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

import React from 'react'
import styled from 'styled-components'
import './Header.css'
import { Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <NavWrapper>
      <Logo>
        <img alt="TEAMING"
          src='/images/Teaming Logo.png'
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      <div className='menu'>
        <Link className="menulist" to={"/ongoingProject"}>진행중 프로젝트</Link>
        <Link className="menulist" to={"/portfolio"}>포트폴리오</Link>
        <Link className="menulist" to={"/news"}>소식</Link>
        <Link className="menulist" to={"/calendar"}>일정 달력</Link>
      </div>

      {/* <ul className='menu'>
        <li class="menulist">진행중 프로젝트
          <a href="javascript:void(0)"></a>
        </li>
        <li class="menulist">포트폴리오
          <a href="javascript:void(0)"></a>
        </li>
        <li class="menulist">소식
          <a href="javascript:void(0)"></a>
        </li>
        <li class="menulist">일정 달력
          <a href="../pages/CalendarPage/"></a>
        </li>
        <li class="menulist logout">로그아웃
          <a href="javascript:void(0)"></a>
        </li>
      </ul> */}

      {/* <nav class="menu">
        <Link to="#">진행중 프로젝트</Link>
        <Link to="#">포트폴리오</Link>
        <Link to="#">소식</Link>
        <Link to="/Calendar">일정달력</Link>
      </nav> */}


    </NavWrapper>
  )
}

export default Header

const NavWrapper = styled.nav`
position:absolute;
top:0;
left: 0
right: 0;
height: 67px;
background-color: #fff;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spaceing: 16px;
z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width: 200px;
margin-top:4px;
max-height: 53px;
font-size: 0;
display: inline-block;

img{
  display: block;
  width: 100%;
}
`