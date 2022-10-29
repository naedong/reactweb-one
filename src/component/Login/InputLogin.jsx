import React, { Component } from "react";
import "./Login.css";


class InputLogin extends Component {
  render() {
     const { getInput } = this.props
      return (
        <>
               <h2>LOGIN</h2>
                        <input type="text" className='Id' onChange={this.props.getInput}  name="idValue" placeholder="I D" />
                        <input type="password" onChange={this.props.getInput} name="pwdValue" placeholder="Password" />
    </>
    );
  }
}
//
export default InputLogin;