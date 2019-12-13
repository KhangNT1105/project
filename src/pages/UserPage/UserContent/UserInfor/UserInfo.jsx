import React, { Component } from 'react'
import './UserInfo.scss'
import { connect } from 'react-redux'
import { layThongTinNguoiDung, chinhSuaThongTinNguoiDung } from '../../../../redux/actions/QuanLyNguoiDungAction';
export class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                maNhom: "GP11",
                email: "",
            }
        }
    }
    componentDidMount() {
        this.props.layThongTinNguoiDung(JSON.parse(localStorage.getItem("userLogin")).taiKhoan)

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            account: {
                ...this.state.account, ...nextProps.thongTinNguoiDungDaChon
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.chinhSuaThongTinNguoiDung(this.state.account);
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            account: {
                ...this.state.account, [name]: value,
            }
        })
    }
    render() {
        console.log(this.state);
        let { account } = this.state;
        return (
            <div className="userInfo">
                <div className="title">
                    <h4>My Profile</h4>
                </div>
                <div className="userInfo__content">
                    <form action="" className="form-group" onSubmit={this.handleSubmit}>
                        <div className="input-field ">
                            <input type="text" value={account.hoTen} name="hoTen" required onChange={this.handleChange} />
                            <label>FullName</label>
                            <span></span>
                        </div>
                        <div className="input-field ">
                            <input
                                type="text"
                                name="soDT"
                                value={account.soDT}
                                required
                                onChange={this.handleChange}
                            />
                            <label>Phone number</label>
                            <span></span>
                        </div>
                        <div className="input-field ">
                            <input
                                type="email"
                                name="email"
                                value={account.email}
                                required
                                onChange={this.handleChange}
                            />
                            <label>Email</label>
                            <span></span>
                        </div>
                        <input
                            type="submit"
                            className="form-control btn btn-primary"
                            value="Edit"
                        />

                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        thongTinNguoiDungDaChon: state.QuanLyNguoiDungReducer.thongTinNguoiDungDaChon
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinNguoiDung: (taiKhoan) => {
            dispatch(layThongTinNguoiDung(taiKhoan))
        },
        chinhSuaThongTinNguoiDung: (thongTin) => {
            dispatch(chinhSuaThongTinNguoiDung(thongTin))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)