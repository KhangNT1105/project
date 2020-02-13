import React, { Component } from 'react'
import logo from '../../assets/img/logo_transparent2.png'
import { NavLink } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { connect } from 'react-redux'
import './LoginPage.scss'
import Loader from '../../components/Loader/Loader'
import { dangNhap, dangKy, layDanhSachNguoiDung } from '../../redux/actions/QuanLyNguoiDungAction';
export class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isSignInForm: true,
            accountSignIn: {
                taiKhoan: "",
                matKhau: "",

            },
            accountSignUp: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "HV",
                maNhom: "GP11",
                email: "",

            }
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    componentDidMount() {
        this.props.layDanhSachNguoiDung();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login) {
            setTimeout(() => {
                console.log("zo redirect")
                this.props.history.push("/");
            }, 1500)
        }
    }
    swapForm = () => {
        this.setState({
            isSignInForm: !this.state.isSignInForm,
        })
        console.log("is", this.state.isSignInForm);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.isSignInForm) {
            this.props.dangNhap(this.state.accountSignIn)
        } else {
            this.props.dangKy(this.state.accountSignUp)
        }
    }
    handleChange = (e) => {
        let { value, name } = e.target;
        if (this.state.isSignInForm) {
            this.setState({
                accountSignIn: {
                    ...this.state.accountSignIn, [name]: value,
                }
            })
        } else {
            this.setState({
                accountSignUp: {
                    ...this.state.accountSignUp, [name]: value,
                }
            })
        }
    }
    responseFacebook = (e) => {
        console.log(e);
        for (let i = 0; i < this.props.mangDanhSachNguoiDung.length; i++) {
            if (e.userID === this.props.mangDanhSachNguoiDung[i].taiKhoan) {
                console.log("zo login")
                this.setState({
                    accountSignIn: {
                        taiKhoan: e.userID,
                        matKhau: "1",
                    }
                });
                this.props.dangNhap(this.state.accountSignIn)
                return;
            }
        }
        console.log("zo signup")
        this.setState({
            accountSignUp: {
                ...this.state.accountSignUp,
                taiKhoan: e.userID,
                matKhau: "1",
                hoTen: e.name,
                email: e.email,
            }
        })
        this.props.dangKy(this.state.accountSignUp);
        setTimeout(() => {
            this.props.dangNhap({ taiKhoan: this.state.taiKhoan, matKhau: "1" })

        }, 1000);

    }
    render() {
        let className = `loginPage__form ${this.state.isSignInForm ? "" : "right-panel-active"}`;
        let { accountSignUp, accountSignIn } = this.state;
        return (
            <>
                {
                    this.state.loading ? <Loader /> : <div className="loginPage">
                        <div className="loginPage__logo">
                            <NavLink to="/">

                                <img src={logo} width="100px" height="100px" alt="" />

                            </NavLink>

                        </div>
                        {/* {this.state.isSignInForm ? this.signInForm() : this.signUpForm()} */}
                        <div className={className} >
                            <div className="form-container sign-up-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h1>Create Account</h1>
                                    <div className="social-container">
                                        <FacebookLogin
                                            appId="422187921999448"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            onClick={this.componentClicked}
                                            callback={this.responseFacebook}
                                            render={(renderProps) => (
                                                <a style={{ cursor: 'pointer' }} onClick={renderProps.onClick} className="social"><i className="fab fa-facebook-f" /></a>
                                            )}
                                        />
                                    </div>
                                    <span>or use your email for registration</span>
                                    <input type="text" name="taiKhoan" value={accountSignUp.taiKhoan} placeholder="Username" onChange={this.handleChange} />
                                    <input type="password" name="matKhau" value={accountSignUp.matKhau} placeholder="Password" onChange={this.handleChange} />
                                    <input type="text" name="hoTen" value={accountSignUp.hoTen} placeholder="Fullname" onChange={this.handleChange} />
                                    <input type="email" name="email" value={accountSignUp.email} placeholder="Email" onChange={this.handleChange} />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div className="form-container sign-in-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h1>Sign in</h1>
                                    <div className="social-container">
                                        <FacebookLogin
                                            appId="422187921999448"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            onClick={this.componentClicked}
                                            callback={this.responseFacebook}
                                            render={(renderProps) => {
                                                return <a style={{ cursor: 'pointer' }} onClick={renderProps.onClick} className="social"><i className="fab fa-facebook-f" /></a>
                                            }}
                                        />
                                    </div>
                                    <span>or use your account</span>
                                    <input type="text" name="taiKhoan" value={accountSignIn.taiKhoan} placeholder="Username" onChange={this.handleChange} />
                                    <input type="password" name="matKhau" value={accountSignIn.matKhau} placeholder="Password" onChange={this.handleChange} />
                                    <a href="#">Forgot your password?</a>
                                    {/* <button onClick={() => {
                                        document.getElementById('container').classList.remove("right-panel-active");

                                    }}>Sign In</button> */}
                                    <button>
                                        Sign In
                                    </button>
                                </form>
                            </div>

                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>

                                        <button className="ghost" onClick={() => {
                                            this.swapForm()
                                        }} id="signIn">Sign In</button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>

                                        <button onClick={() => {
                                            this.swapForm()

                                        }} className="ghost" id="signUp">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDanhSachNguoiDung: state.QuanLyNguoiDungReducer.mangDanhSachNguoiDung,
        login: state.QuanLyNguoiDungReducer.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap: (thongTin) => {
            dispatch(dangNhap(thongTin))
        },
        dangKy: (thongTin) => {
            dispatch(dangKy(thongTin))
        },
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachNguoiDung())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)