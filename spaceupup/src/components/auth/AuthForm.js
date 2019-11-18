import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const AuthFormBlock = styled.div`
  .SSO {
    font-size : 1.2rem;
    font-weight : bold;
    display : inline-block;
    
  }
  .stupro {
    font-size: 0.8rem;
    display : inline-block;
    padding-left : 0.7rem;
    color : #0c8599;
    font-family : 'S-CoreDream-2ExtraLight';
  }
  .inputs{
    display: flex;
    flex-direction : column;
  }
  
`;

const ButtonStyled = styled(Button)`

  margin-top : 2rem;
  text-align: center;
`;

const Footer = styled.div`
  text-align : right;
  margin-top : 2rem;
  font-size : 0.8rem;
  a {
    color: ${palette.gray[6]};
    &:hover { 
      color: ${palette.gray[9]};
      text-decoration : underline;
    }
  }
`;

const textMap = {
  login: "통합로그입(SSO)",
  register: "회원가입",
};
// 통합 로그인(SSO)  |
const AuthForm = ({ type }) => {
  const text = textMap[type];
  const [department, setDept] = React.useState('');

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleChange = event => {
    setDept(event.target.value);
  };

  return (
    <AuthFormBlock>
      <div className="SSO">{text}</div>
      <div className="stupro">학생, 교직원 전용</div>
      <form>
        {type === 'register' && (
          <TextField
            id="user_name"
            className="inputs"
            label="Name"
            margin="normal"
          />
        )}
        <TextField
          id="user_id"
          className="inputs"
          label="ID"
          margin="normal"
        />

        <TextField
          id="password"
          className="inputs"
          label="Password"
          margin="normal"
          type="password"
        />
        {type === 'register' && (
          <TextField
            id="password_confirm"
            className="inputs"
            label="Password Confirm"
            margin="normal"
            type="password"
          />
        )}
        {type === 'register' && (
          <FormControl className ="inputs">
            <InputLabel id="user_department">Department</InputLabel>
            <Select
              labelId="user_department"
              id="user_department"
              value={department}
              onChange={handleChange}
            >
              <MenuItem value={"융합소프트웨어학부"}>융합소프트웨어학부</MenuItem>
              <MenuItem value={"디지털콘텐츠디자인학과"}>디지털콘텐츠디자인학과</MenuItem>
            </Select>
          </FormControl>

        )}

        <ButtonStyled blue fullWidth >
          {text}
        </ButtonStyled>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to='/register'>회원가입</Link>
        ) : (
            <Link to='/login'>로그인</Link>
          )}

      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
