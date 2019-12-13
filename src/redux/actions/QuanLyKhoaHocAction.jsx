import { actionType } from "../constants/QuanLyKhoaHocConstants";
import { settings } from "../../common/config/setting";
import swal from "sweetalert2";
import axios from "axios";

export const layDanhMucKhoaHoc = () => {
  return dispatch => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: true
    });
    axios({
      url: settings.domain + "/quanlykhoahoc/laydanhmuckhoahoc",
      method: "get"
    })
      .then(result => {
        dispatch({
          type: actionType.LAY_DANH_MUC_KHOA_HOC,
          mangDanhMucKhoaHoc: result.data
        });
      })
      .catch(err => {
        console.log("err.response.data");
      });
    dispatch({
      type: actionType.SET_LOADING,
      loading: false
    });
  };
};
export const layDanhSachKhoaHoc = () => {
  return dispatch => {
    // dispatch({
    //   type: actionType.SET_LOADING,
    //   loading: true
    // });
    axios({
      url:
        settings.domain +
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${settings.maNhom}`,
      method: "get"
    })
      .then(result => {
        dispatch({
          type: actionType.LAY_DANH_SACH_KHOA_HOC,
          mangDanhSachKhoaHoc: result.data
        });
      })
      .catch(err => {
        console.log("err.response.data");
      });
    setTimeout(() => {
      dispatch({
        type: actionType.SET_LOADING,
        loading: false,
      })
    }, 1000)
  };
};
export const themKhoaHoc = khoaHoc => {
  console.log("accses", localStorage.getItem(settings.accessToken));
  console.log("courseSubmit", khoaHoc);

  return dispatch => {
    //Lấy đối tượng file từ thuộc tính hình ảnh
    let file = khoaHoc.hinhAnh;
    khoaHoc.hinhAnh = file.name;

    axios({
      url: settings.domain + "/QuanLyKhoaHoc/ThemKhoaHoc",
      method: "POST",
      data: khoaHoc,
      headers: {
        Authorization: "Bearer  " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(() => {
        swal.fire({
          type: "success",
          title: "Notice",
          text: "Add Course Successfully",
          timer: 2500
        });
        //Sau khi người dùng thêm khoá học thành công
        //Gọi api upload hình ảnh
        let frm = new FormData();
        frm.append("file", file);
        frm.append("tenKhoaHoc", khoaHoc.tenKhoaHoc);
        axios({
          url: settings.domain + "/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
          method: "POST",
          data: frm
        })
          .then(result => {
            console.log(result.data);
          })
          .catch(err => {
            console.log(err.response.data);
          });
        dispatch(layDanhSachKhoaHoc());
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
export const xoaKhoaHoc = maKhoaHoc => {
  const swalWithBootstrapButtons = swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger mr-2"
    },
    buttonsStyling: false
  });

  return dispatch => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "No, cancel!",
        confirmButtonText: "Yes, delete it!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          axios({
            url:
              settings.domain +
              `/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem(settings.accessToken)
            }
          })
            .then(result => {
              console.log("delete : ", result.data);
              dispatch(layDanhSachKhoaHoc());
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            })
            .catch(err => {
              console.log("err : ", err.response.data);
              swalWithBootstrapButtons.fire(
                "Opps",
                "Something went wrongs!!",
                "error"
              );
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
};
export const chinhSuaKhoaHoc = khoaHoc => {
  return dispatch => {
    let file = khoaHoc.hinhAnh;
    khoaHoc.hinhAnh = file.name;
    axios({
      url: settings.domain + "/QuanLyKhoaHoc/CapNhatKhoaHoc",
      method: "PUT",
      data: {
        ...khoaHoc,
        taiKhoanNguoiTao: JSON.parse(localStorage.getItem(settings.userLogin))
          .taiKhoan
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(result => {
        swal.fire("Notice", result.data, "success");
        dispatch(layDanhSachKhoaHoc());
        let frm = new FormData();
        frm.append("file", file);
        frm.append("tenKhoaHoc", khoaHoc.tenKhoaHoc);
        axios({
          url: settings.domain + "/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
          method: "POST",
          data: frm
        })
          .then(result => {
            console.log(result.data);
          })
          .catch(err => {
            console.log(err.response.data);
          });
        dispatch(layDanhSachKhoaHoc());
      })
      .catch(err => {
        console.log("Loi roi");
        swal.fire("Opps", err.response.data, "error");
      });
  };
};
export const timKiemKhoaHoc = tenKhoaHoc => {
  if (tenKhoaHoc === '') {
    return dispatch => {
      dispatch({
        type: actionType.TIM_KIEM_KHOA_HOC,
        mangDanhSachKhoaHoc: []
      })
    }
  }
  return dispatch => {
    axios({
      url:
        settings.domain +
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${settings.maNhom}`,
      method: "GET"
    })
      .then(result => {
        console.log("tim kiem khoa hoc action", result.data);
        dispatch({
          type: actionType.TIM_KIEM_KHOA_HOC,
          mangDanhSachKhoaHoc: result.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: actionType.TIM_KIEM_KHOA_HOC,
          mangDanhSachKhoaHoc: []
        });
      });
  };
};
export const layChiTietKhoaHoc = maKhoaHoc => {
  return dispatch => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: true,
    })
    axios({
      url:
        settings.domain +
        `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET"
    })
      .then(result => {
        dispatch({
          type: actionType.LAY_CHI_TIET_KHOA_HOC,
          khoaHocDaChon: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      })
    setTimeout(() => {
      dispatch({
        type: actionType.SET_LOADING,
        loading: false,
      })
    }, 1000)

  };
};

export const layDanhSachKhoaHocTheoMaDanhMuc = maDanhMuc => {
  return dispatch => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: true,
    })
    axios({
      url:
        settings.domain +
        `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${settings.maNhom}`,
      method: "GET"
    })
      .then(result => {
        dispatch({
          type: actionType.LAY_DANH_SACH_KHOA_HOC_THEO_MA_DANH_MUC,
          danhSachKhoaHoc: result.data
        });

      })
      .catch(err => {
        console.log(err.response.data);
        dispatch(layDanhSachKhoaHoc())
      });
    setTimeout(() => {
      dispatch({
        type: actionType.SET_LOADING,
        loading: false,
      })
    }, 1000)
  };
};
export const chonKhoaHoc = khoaHocDaChon => {
  return dispatch => {
    dispatch({
      type: actionType.CHON_KHOA_HOC,
      khoaHocDaChon: khoaHocDaChon
    });
  };
};
export const setLoading = () => {
  return dispatch => {
    dispatch({
      type: actionType.SET_LOADING,
      loading: false
    });
  };
};
export const dangKyKhoaHoc = maKhoaHoc => {
  return dispatch => {
    if (!localStorage.getItem("userLogin")) {
      swal.fire(
        "Opps...",
        "You must be logged in to enroll this course",
        "error"
      );
    } else {
      axios({
        url: settings.domain + `/QuanLyKhoaHoc/DangKyKhoaHoc`,
        data: {
          maKhoaHoc: maKhoaHoc,
          taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin))
            .taiKhoan
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem(settings.accessToken)
        },
        method: "POST"
      })
        .then(result => {
          console.log("dangKyKhoa", result.data);
          swal.fire("Notice", "Enroll Success", "success");
        })
        .catch(err => {
          swal.fire("Notice", err.response.data, "error");
        });
    }
  };
};
export const huyDangKyKhoaHoc = maKhoaHoc => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyKhoaHoc/HuyGhiDanh`,
      data: {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: JSON.parse(localStorage.getItem(settings.userLogin)).taiKhoan
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem(settings.accessToken)
      }
    })
      .then(result => {
        swal.fire("Success", result.data, "success");
      })
      .catch(err => {
        swal.fire("Opps...", err.response.data, "error");
      });
  };
};
