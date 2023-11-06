import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingSchemaType } from "schema/BookingSchema";
import { quanLyDatPhongServices } from "services";

export const postBookingThunk = createAsyncThunk('quanLyDatPhong/postBookingThunk', async (payload: BookingSchemaType, { rejectWithValue }) => {
    try {
        const data = await quanLyDatPhongServices.postBooking(payload)
        return data.data.content
    } catch (error) {
        rejectWithValue(error)
    }
})
export const getBookingThunk = createAsyncThunk('quanLyDatPhong/getBookingThunk', async (maNguoiDung:number, { rejectWithValue }) => {
    try {
        const data = await quanLyDatPhongServices.getBooking(maNguoiDung)
        return data.data.content
    } catch (error) {
        rejectWithValue(error)
    }
})