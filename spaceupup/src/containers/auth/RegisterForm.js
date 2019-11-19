import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import {check} from '../../modules/user';
import {withRouter } from 'react-router-dom';


const RegisterForm = ({history}) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {form, auth, authError, user} = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  //인풋 변경 이벤트 핸들러

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => { 
    e.preventDefault();
    const {user_Id, user_password, password_confirm, user_Name, user_Department } = form;
    //하나라도 비어있는 경우
    if ([user_Id, user_password, password_confirm, user_Name, user_Department].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    // 비밀번호가 일치하지 않는 경우
    if (user_password !== password_confirm) {
      console.log("비밀번호 다시쳐");
      setError('비밀번호가 일치하지 않습니다.');
      changeField({form : 'register', key:'user_password', value: ''});
      changeField({form : 'register', key:'password_confirm', value: ''});
      return;
    }
    dispatch(register({user_Id, user_password, user_Name, user_Department}))
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if(authError) {
      //이미 존재하는 id
      if (authError.response.status === 409){
        setError('이미 존재하는 id 입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
    
  }, [auth, authError,dispatch]);

  useEffect(() => {
   if(user) {
     history.push('/');
   }
  }, [history, user]);


  return (
    <AuthForm
      type="register"
      form={form}
      onChange = {onChange}
      onSubmit = {onSubmit}
      error = {error}
    />
  );
};

export default withRouter(RegisterForm);