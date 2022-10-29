import React, { Component } from 'react';

import loingpng from './login.png';
import './Login.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import Navbar from '../Nav/Navbar';
import Button from './Button';
import InputLogin from './InputLogin';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            isputValue: { idValue: '', pwdValue: '' },
            isButtonOn: false,
        };
    }
    


    handleAbleButton = () => {
    const { isputValue } = this.state;
    this.setState({
      isButtonOn:
        this.state.isputValue.idValue.includes('@') &&
        this.state.isputValue.pwdValue.length >= 8, //위조건을 만족시 true리턴
    });
  };
 handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      isputValue: { ...this.state.isputValue, [name]: value },
    });
  };
      componentDidUpdate(prevProps, prevState) {
    if (this.state.isputValue !== prevState.isputValue) {
      this.handleAbleButton();
          }
          
  }
    
    componentDidMount() {
   //animation code
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    
    
    
    $('input[type="radio"]').on('change',function() {
       
        if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
    });
});
  }
 
    render() {
      

     const onlyNum = (data) => {
        return data.replace(/[^0-9]/g, "");
        };

    const delSpace = (data) => {
        return data.replace(/\s/g, "");
        };

        const setId = (e) => {
            console.log(e.target.value);
        return isputValue.idValue === e.target.value;
        };

   const setPwd = (e) => {
            console.log(e.target.value);
        return isputValue.pwdValue === e.target.value;
        };

      const { isputValue, isButtonOn } = this.state;
        console.log(this.state);

    return (
     
        <div className="backgroundima">
            
            <Navbar></Navbar>
            <div className="login-reg-panel">
                
            <div className="login-info-box">
                <h2>아이디가 있습니까?</h2>
                <p>로그인 하러 가기</p>
                <label id="label-register" htmlFor="log-reg-show">로그인</label>
                    <img src={loingpng}  className="login-imgs" alt='로그인 이미지'></img>
                    <input type="radio"  name="active-log-panel" id="log-reg-show" value="log-reg-show" />
                    
            </div>
                        
            <div className="register-info-box">
                <h2>아이디가 없습니까?</h2>
                <p>회원가입 하러 가기</p>
                    <label id="label-login" htmlFor="log-login-show">회원가입</label>
                      <img src={loingpng} className="sign-imgs" alt='로그인 이미지'></img>
                <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
            </div>
                        
            <div className="white-panel">
                <div className="login-show">
    
                        <InputLogin getInput={this.handleInput} ></InputLogin>
                        <Button
                            idValue={isputValue.idValue}
                            pwdValue={isputValue.pwdValue}
                            changeColor={isButtonOn}>
                            </Button>
                        <p>로그인 API 사용구역</p> 
                </div>
                <div className="register-show">
                <h2>REGISTER</h2>
                        <div className='show-id'> 
                            <div className='id-show'>
                            <input type="text" placeholder="ID" />
                            </div>
                            <div className='button-show'>
                            <input type="button" value="아이디 인증" />
                            </div>
                                    
                        </div>
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <input type="text" placeholder="성명" />
                        <div className='show-cellphone'>
                            <div className='cellphone-show'>
                                <input type="text" className="phone" placeholder="****" value="010"/>
                                <p>-</p>
                            <input type="text" className="phone1" pattern='' placeholder="****" />
                            <p>-</p>
                            <input type="text" className="phone2" placeholder="****" />
                            </div>
                            <div className='cellphone-button'>
                                <input type='button' className="phoneSell" value='인증번호 전송'></input>
                            </div>
                            <input type="text" className="phone" placeholder="인증 번호" />
                            <input type='button' className="phoneSellres" value='인증번호 확인'></input>
                        </div>
                            <input type="Email" placeholder="Email" />
                        
                        <input type="text" placeholder="우편 번호" />
                         <input type='button' className="addresscheck" value='우편번호 확인'></input>
                        <input type="text" placeholder="주소" />
                        <div className='submits'>
                              <input type="button" value="회원가입" />          
                        </div>

              
                </div>
            </div>
            </div>
            </div>
         
       
     
      
)
};
    }
    
export default Login;