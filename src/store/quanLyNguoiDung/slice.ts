import { createSlice } from "@reduxjs/toolkit";
import { Content, User } from "types";
import { getUserIDThunk, getUserThunk, loginThunk, uploadAvatarThunk } from "./thunk";

type QuanLyNguoiDungInitialState = {
  userLogin?: Content<User>;
  accessToken?: string;
  getUserID?: & User;
  getUser?: User[];
  idUser?:number
  role?:string
};
const initialState: QuanLyNguoiDungInitialState = {
  // userLogin: {
  //   user: {
  //     id: 0,
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     birthday: "",
  //     avatar: "",
  //     gender: true,
  //     role: "",
  //   },
  //   token: "",
  // },
  // getUserID: {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   birthday: "",
  //   avatar: "",
  //   gender: true,
  //   role: "",
  // },
  // accessToken: localStorage.getItem("accessToken")
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logout: (state) => {
      state.userLogin = undefined;
      state.getUserID = undefined;
      state.role = undefined;
      localStorage.removeItem("idUser")
      localStorage.removeItem("tenViTri")
      localStorage.removeItem("role")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.userLogin = payload;
        console.log("payload", payload);
        state.idUser = payload?.user?.id;
        state.role = payload?.user?.role;
        if (payload) {
            localStorage.setItem("idUser",String(payload?.user?.id))
            localStorage.setItem("token",payload.token)
          }
        })
      .addCase(getUserIDThunk.fulfilled, (state, { payload }) => {
        state.getUserID = payload
      })
      .addCase(uploadAvatarThunk.fulfilled, ( state, { payload } ) => {
        state.getUserID = payload
      })
      .addCase(getUserThunk.fulfilled, ( state, { payload } ) => {
        state.getUser = payload
      })
  },
});

export const {
  actions: quanLyNguoiDungActions,
  reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
