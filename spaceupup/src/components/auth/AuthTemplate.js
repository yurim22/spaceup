import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
// import {Link} from 'react-router-dom';
import logo from '../../lib/images/mju.jpg';


const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${palette.gray[2]};
  
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const InnerBox = styled.div`
  .logo-area {
    display: block;
    margin : auto;
    padding-bottom : 1.5rem;
    text-align: center;
    width : 200px;
    height : auto;
  }
  box-shadow: 0 0 8px rgba(0,0,0, 0.025);
  padding : 2rem;
  width: 400px;
  background: white;
  border-radius: 2px;
`

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <InnerBox>

        <img className="logo-area" src={logo} alt="mjulogo1" />

        {children}
      </InnerBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
