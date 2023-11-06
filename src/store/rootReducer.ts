import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyViTriReducer } from "./quanLyViTri/slice";
import { quanLyPhongReducer } from "./quanLyPhong/slice";
import { quanLyBinhLuanReducer } from "./quanLyBinhLuan/slice";
import { quanLyDatPhongReducer } from "./quanLyDatPhong/slice";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyViTri: quanLyViTriReducer,
    quanLyPhong: quanLyPhongReducer,
    quanLyDatPhong: quanLyDatPhongReducer,
    quanLyBinhLuan: quanLyBinhLuanReducer,
})