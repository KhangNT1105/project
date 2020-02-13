import { actionType } from "../constants/QuanLyNguoiDungConstants";
import axios from "axios";
import { settings } from "../../common/config/setting";
import swal from "sweetalert2";
import { layDanhSachKhoaHoc } from "./QuanLyKhoaHocAction";

export const dangNhap = thongTinNguoiDung => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: thongTinNguoiDung
    })
      .then(result => {
        localStorage.setItem(settings.accessToken, result.data.accessToken);
        localStorage.setItem(settings.userLogin, JSON.stringify(result.data));

        swal.fire({
          type: "success",
          title: "Login Nofication",
          text: "Login Sucess",
          timer: 1500
        });

        dispatch({
          type: actionType.DANG_NHAP,
          login: true
        });

      })
      .catch(err => {
        swal.fire({
          type: "error",
          title: "Oops...",
          text: err.response.data,
          timer: 1500
        });
      });
  };
};
export const dangKy = thongTinNguoiDung => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTinNguoiDung
    })
      .then(result => {
        console.log("reuslt", result.data);
        swal.fire({
          type: "success",
          title: "Sign Up Nofication",
          text: "Sign Up Success",
          timer: 1500
        });
      })
      .catch(err => {
        swal.fire({
          type: "error",
          title: "Sign Up Nofication",
          text: err.response.data
        });
      });
  };
};
export const layDanhSachNguoiDung = () => {
  return dispatch => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: true,
    })
    axios({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11`,
      method: "GET"
    })
      .then(result => {
        console.log(result.data);
        dispatch({
          type: actionType.LAY_DANH_SACH_NGUOI_DUNG,
          mangDanhSachNguoiDung: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    setTimeout(() => {
      dispatch({
        type: actionType.SET_LOADING,
        loading: false,
      })
    }, 1000)
  };
};

export const timKiemNguoiDung = tenNguoiDung => {
  return dispatch => {
    axios({
      url:
        settings.domain +
        `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${settings.maNhom}&tuKhoa=${tenNguoiDung}`,
      method: "GET"
    })
      .then(result => {
        dispatch({
          type: actionType.TIM_KIEM_NGUOI_DUNG,
          mangDanhSachNguoiDung: result.data
        });
      })
      .catch(err => {
        dispatch({
          type: actionType.TIM_KIEM_NGUOI_DUNG,
          mangDanhSachNguoiDung: []
        });
      });
  };
};
export const layDanhSachKhoaHocChoXetDuyet = taiKhoan => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      data: {
        taiKhoan: taiKhoan
      },
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(result => {
        console.log("danh sach khoa hoc ", result.data);
        dispatch({
          type: actionType.LAY_DANH_SACH_KHOA_HOC_CHO_XET_DUYET,
          danhSachKhoaHocChoXetDuyet: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};
export const layDanhSachKhoaHocDaGhiDanh = taiKhoan => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      data: {
        taiKhoan: taiKhoan
      },
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(result => {
        console.log("da ghi danh", result.data);
        dispatch({
          type: actionType.LAY_DANH_SACH_KHOA_HOC_DA_GHI_DANH,
          danhSachKhoaHocDaGhiDanh: result.data
        });
      })
      .catch(err => {
        console.log("loi o day")
        console.log(err.response.data);
      });
  };
};
export const daDangNhap = () => {
  return dispatch => {
    dispatch({
      type: actionType.DA_DANG_NHAP,
      login: true
    });
  };
};
export const dangXuat = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userLogin");
  return dispatch => {
    dispatch({
      type: actionType.DANG_XUAT,
      login: false
    });
  };
};
export const themNguoiDung = thongTinNguoiDung => {
  console.log("vao them nguoi dung");
  return dispatch => {
    axios({
      url: settings.domain + "/QuanLyNguoiDung/ThemNguoiDung",
      data: thongTinNguoiDung,
      method: "POST",
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(result => {
        swal.fire("Success", result.data, "success");
        dispatch(layDanhSachNguoiDung());
      })
      .catch(err => {
        swal.fire("Error", err.response.data, "error");
      });
  };
};
export const xoaNguoiDung = taiKhoan => {
  return dispatch => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then(result => {
        if (result.value) {
          axios({
            url:
              settings.domain +
              `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer  " + localStorage.getItem(settings.accessToken)
            }
          })
            .then(result => {
              swal.fire("Deleted!", result.data, "success");
              dispatch(layDanhSachNguoiDung());
            })
            .catch(err => {
              swal.fire("Oops...", err.response.data, "error");
            });
        }
      });
  };
};
export const chinhSuaThongTinNguoiDung = thongTinNguoiDung => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.accessToken)
      },
      data: thongTinNguoiDung
    })
      .then(result => {
        swal.fire("Success", "Edit information successfully", "success");
        dispatch(layDanhSachNguoiDung());
        dispatch(layThongTinNguoiDung(thongTinNguoiDung.taiKhoan))
      })
      .catch(err => {
        swal.fire("Opps...", err.response.data, "error");
      });
  };
};
export const layThongTinNguoiDung = (taiKhoan, accessToken) => {
  let token = localStorage.getItem(settings.accessToken);
  if (accessToken) {
    token = accessToken;
  }
  console.log("accessToken ben action", token)

  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/ThongTinTaiKhoan`,
      data: {
        TaiKhoan: taiKhoan
      },
      headers: {
        Authorization: "Bearer  " + token
      },
      method: "POST"
    })
      .then(result => {
        console.log("thong tin ng odi ng", result.data);
        dispatch({
          type: actionType.LAY_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data
        });
        setTimeout(() => {
          dispatch({
            type: actionType.LOADING,
            loading: false,
          })
        }, 500)
      })
      .catch(err => {
        dispatch({
          type: actionType.LAY_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: ""
        });
        console.log(err.response.data);
      });
  };
};
export const xacThucGhiDanh = (taiKhoan, maKhoaHoc) => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
      data: {
        taiKhoan: taiKhoan,
        maKhoaHoc: maKhoaHoc
      },
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.accessToken)
      },
      method: "POST"
    })
      .then(result => {
        swal.fire("Success", result.data, "success");
        dispatch(layDanhSachKhoaHocDaGhiDanh(taiKhoan));
        dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan));
      })
      .catch(err => {
        swal.fire("Opps...", err.response.data, "error");
      });
  };
};
export const huyGhiDanh = (taiKhoan, maKhoaHoc) => {
  return dispatch => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then(result => {
        if (result.value) {
          axios({
            url: settings.domain + `/QuanLyKhoaHoc/HuyGhiDanh`,
            data: {
              taiKhoan: taiKhoan,
              maKhoaHoc: maKhoaHoc
            },
            headers: {
              Authorization:
                "Bearer  " + localStorage.getItem(settings.accessToken)
            },
            method: "POST"
          })
            .then(result => {
              swal.fire("Deleted!", result.data, "success");
              dispatch(layThongTinNguoiDung(taiKhoan));
              dispatch(layDanhSachKhoaHocDaGhiDanh(taiKhoan));
              dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan));
            })
            .catch(err => {
              swal.fire("Opps...", err.response.data, "error");
            });
        }
      });
  };
};
export const layDanhSachLoaiNguoiDung = () => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
      method: "GET"
    })
      .then(result => {
        dispatch({
          type: actionType.LAY_DANH_SACH_LOAI_NGUOI_DUNG,
          data: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};
export const changeSidebarStatus = (status) => {
  return dispatch => {
    dispatch({
      type: actionType.CHANGE_SIDEBAR_STATUS,
      status: status
    })
  }
}
