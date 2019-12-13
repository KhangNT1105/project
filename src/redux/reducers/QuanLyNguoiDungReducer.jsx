import { actionType } from "../constants/QuanLyNguoiDungConstants";
const initialState = {
  mangDanhSachNguoiDung: [],
  login: false,
  mangDanhSachLoaiNguoiDung: [],
  mangDanhSachKhoaHocChoXetDuyet: [],
  mangDanhSachKhoaHocDaGhiDanh: [],
  thongTinNguoiDungDaChon: {}
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DANG_NHAP:
      state.login = action.login;
      console.log("dang nhap");
      return { ...state };
    case actionType.DANG_XUAT:
      state.login = action.login;
      console.log("dang xuat");
      return { ...state };
    case actionType.LAY_DANH_SACH_NGUOI_DUNG:
      state.mangDanhSachNguoiDung = action.mangDanhSachNguoiDung;
      console.log("mang danh sach nguoi dung ", state.mangDanhSachNguoiDung);
      return { ...state };

    case actionType.TIM_KIEM_NGUOI_DUNG:
      state.mangDanhSachNguoiDung = action.mangDanhSachNguoiDung;
      console.log(
        "mang danh sach nguoi dung tim kiem",
        state.mangDanhSachNguoiDung
      );
      return { ...state };
    case actionType.LAY_DANH_SACH_KHOA_HOC_CHO_XET_DUYET:
      state.mangDanhSachKhoaHocChoXetDuyet = action.danhSachKhoaHocChoXetDuyet;
      console.log(
        "mang danh sach khoa hoc cho xet duyet o reducer",
        state.mangDanhSachKhoaHocChoXetDuyet
      );
      return { ...state };
    case actionType.LAY_DANH_SACH_KHOA_HOC_DA_GHI_DANH:
      state.mangDanhSachKhoaHocDaGhiDanh = action.danhSachKhoaHocDaGhiDanh;
      console.log(
        "mang danh sach khoa hoc da ghi danh o reducer",
        state.mangDanhSachKhoaHocDaGhiDanh
      );
      return { ...state };
    case actionType.DA_DANG_NHAP:
      state.login = action.login;
      return { ...state };
    case actionType.LAY_THONG_TIN_NGUOI_DUNG:
      state.thongTinNguoiDungDaChon = action.thongTinNguoiDung;
      return { ...state };
    case actionType.LAY_DANH_SACH_LOAI_NGUOI_DUNG:
      state.mangDanhSachLoaiNguoiDung = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};
