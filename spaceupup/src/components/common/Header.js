import React from 'react';
import styled from 'styled-components';
// import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`

  background: ${palette.gray[1]};
  display : flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  margin-bottom : 1rem;
  height : 28px;
`;

const UlBlock = styled.div`
.top-head {
  float: right;
  display : block;
  margin : 0 ;
  padding-right : 8rem;
}
.top-head li {
  display : inline-block;
  margin-right : 1rem;
  font-size : 0.8rem;
  color: ${palette.gray[6]};
  font-family: 'BBTreeGB';
}
`
const Header = ({user, onLogout}) => {
  return (
    <HeaderBlock>
      <UlBlock>
        <ul className="top-head">
          {user ? (
            <div className="log">
              <li>{user.user_name}님</li>
              <li><Link to="/" onClick={onLogout}>LOGOUT</Link></li>
            </div>
          ) : (
            <li><Link to="/login">LOGIN</Link></li>
          )}
          <li><Link to="/">HOME</Link></li>
          <li><Link to="http://www.mju.ac.kr/">학교홈페이지</Link></li>
        </ul>
      </UlBlock>

    </HeaderBlock>

  )
}

export default Header;
