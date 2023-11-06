import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyBinhLuanServices } from "services";

export const getCommentsByRoomIdThunk = createAsyncThunk(
    'quanLyBinhLuan/getCommentsByRoomIdThunk', async (MaPhong: number, { rejectWithValue }) => {
        try {
            const data = await quanLyBinhLuanServices.getCommentsByRoomId(MaPhong)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)