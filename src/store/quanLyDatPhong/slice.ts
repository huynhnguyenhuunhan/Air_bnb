import { createSlice } from "@reduxjs/toolkit"
import { getBookingThunk } from "./thunk"

type QuanLyDatPhongInitialState = {
    maNguoiDung?: any
}

const initialState: QuanLyDatPhongInitialState = {

}

const quanLyDatPhongSlice = createSlice({
    name: "quanLyDatPhong",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getBookingThunk.fulfilled, (state, {payload}) => {
            state.maNguoiDung = payload
        })
    },
})

export const { actions: quanLyDatPhongActions, reducer: quanLyDatPhongReducer } = quanLyDatPhongSlice