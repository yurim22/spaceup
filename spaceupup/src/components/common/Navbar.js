import React from 'react';
import mjulogo from '../../lib/images/mjulogo.png';
import styled from 'styled-components';
// import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const NavbarBlock = styled.div`
  display : block;
  margin : 0 auto;
  font-family :  'BBTreeGB';
  padding-left : 2rem;
  .mjulogoimg {
    width : 70px;
    height : auto;
    float : left;
    display : flex;
    flex-direction : row;
  }
`
const TextBlock = styled.div`
  display : inline-block;
  align-item : center;
  font-size : 1.8rem;
  margin-top : 1rem;
`

const UlBlock = styled.div`
.navul {
  float : right;
  display : inlin-block;
  padding-right : 8rem;
  margin : 0 auto;
}
.navul li {
  display : inline-block;
  margin-right : 3rem;
  color: ${palette.gray[6]};
  font-family: 'BBTreeGB';

.nav-link {
  text-decoration: none;
  display: block;
  position: relative;
  color: #868686;
  font-size: 20px;
}

}
`;
const Navbar = () => {
  return (
    <NavbarBlock>
      <div className="container">
        <Link to="/">
          <img src={mjulogo} alt="mjuLogo" className="mjulogoimg" />
        </Link>
        <TextBlock>
          <span>명지대학교 강의실예약 시스템</span>
        </TextBlock>


        <UlBlock>
          <div>
            <ul className="navul">
              <li><Link to="/reservation" className="nav-link">강의실예약</Link></li>
              <li><Link to="/confirm" className="nav-link">예약확인</Link></li>
            </ul>
          </div>
        </UlBlock>
      </div>
    </NavbarBlock>

  )
}

export default Navbar;
