import React ,{ Component} from 'react';
import './Login.css'


class Login extends Component{

    state = {
        emailStyle:{} ,
        passwordStyle:{} ,
        EmailText: "",
        PasswordText:"",
        emailError: "",
        passwordError: "",
        checkEmail:"hodahossam257@gmail.com",
        checkPassword:"123456",
        checkedCorrect: false,
    }
    

    validateEmail = (event) => {
        let EmailText = event.target.value;
        if (EmailText=="")
        {
            this.setState({emailError: "Please enter a valid email"})
            this.setState({emailStyle:{'border': '1px solid red'}})
        }
        else
        {
            this.setState({emailStyle:{}})
            this.setState({emailError:null})
            this.setState({EmailText:EmailText})
        }
    }
    validatePassword = (event) => {
        let PasswordText = event.target.value;
        if (PasswordText=="")
        {
            this.setState({passwordError: "Please enter your password."})
            this.setState({passwordStyle:{'border': '1px solid red'}})
        }
        else
        {
            this.setState({passwordError:null})
            this.setState({passwordStyle:{}})
            this.setState({PasswordText:PasswordText})
        }
        
    }

    handleLogIn = event => 
    {
        //fetch
        // catch error -> 401
        if(this.state.PasswordText==this.state.checkPassword && this.state.EmailText==this.state.checkEmail) 
        {
            window.location.replace("/");
        }
        else
        {
           this.setState({checkedCorrect:true})
        }
    }

   
    render(){
    return(
        <div className="login-page">
            <div className="login-logo">
                <a className="spotify-login image" title="Spotify" href="/"></a>
                <div className="border-bottom mt-4"></div>
            </div>
                <div className="container login-content">
           
                    <p> <strong> To continue, log in to Spotify.</strong> </p>
                    {this.state.checkedCorrect == true ? <div className="incorrect align-items-center">Incorrect email or password.</div>:<div></div>}
                    <button id="facebook-button" className="btn rounded-pill text-center " >
                    <i className="fab fa-facebook"></i> continue with facebook </button> 
                    <div className="border-divider">
                        <strong className="or-login">or</strong>
                    </div>
                    <form >
                    <div className="form-group">
                        <div style={{marginBottom: "15px"}}>
                            <input style={this.state.emailStyle} autocomplete="off" onChange={this.validateEmail} type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Email address" />
                            <div className="error-validate">{this.state.emailError}</div>
                        </div>
                        <input style={this.state.passwordStyle} onChange={this.validatePassword} type="password" className="form-control" id="input-password" placeholder="Password" />
                            <div  className="error-validate">{this.state.passwordError}</div>
                            <div className="form-check check-log">
                                <input  type="checkbox" className="form-check-input" id="checkbox"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                <a onClick={this.handleLogIn} className="btn rounded-pill text-center login-button">Log In</a>
                            </div>
                        <div className="forget-pass">
                        <a className="col-xs-12 text-center"> Forget Your Password? </a>
                        </div>  
                    </div>
                    </form>
                    <div className="border-divider"></div>
                    <div>
                        <h5>Don't have an account?</h5>
                        <button className="btn rounded-pill text-center signup-button">Sign up for spotify</button>
                    </div>
                    <div className="border-divider"></div>
                </div>
        </div>
    )
}
}
 export default Login