import { actionType } from "../constants/QuanLyKhoaHocConstants";
const initialState = {
  mangDanhMucKhoaHoc: [],
  mangDanhSachKhoaHoc: [],
  khoaHocDaChon: {},
  loading: false
};
export const QuanLyKhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LAY_DANH_MUC_KHOA_HOC: {
      state.mangDanhMucKhoaHoc = action.mangDanhMucKhoaHoc;
      return { ...state };
    }
    case actionType.LAY_DANH_SACH_KHOA_HOC: {
      state.mangDanhSachKhoaHoc = action.mangDanhSachKhoaHoc;
   
      return { ...state };
    }
    case actionType.TIM_KIEM_KHOA_HOC:
      state.mangDanhSachKhoaHoc = action.mangDanhSachKhoaHoc;
      console.log("tim kiem khoah o c", state.mangDanhSachKhoaHoc);
      return { ...state };
    case actionType.LAY_CHI_TIET_KHOA_HOC:
      state.khoaHocDaChon = action.khoaHocDaChon;

      console.log("khoa hoc da chon ", state.khoaHocDaChon);
      return { ...state };
    case actionType.LAY_DANH_SACH_KHOA_HOC_THEO_MA_DANH_MUC:
      state.mangDanhSachKhoaHoc = action.danhSachKhoaHoc;

      return { ...state };
    case actionType.CHON_KHOA_HOC:
      state.khoaHocDaChon = action.khoaHocDaChon;
      return { ...state };
    case actionType.SET_LOADING:
      state.loading = action.loading;
      console.log("loading ở reducer", state.loading);
      return { ...state };
    default:
      return { ...state };
  }
};
