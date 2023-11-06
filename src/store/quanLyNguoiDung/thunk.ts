import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
// import { User } from "types";


export const loginThunk = createAsyncThunk('quanLyNguoiDung/loginThunk', async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
        const data = await quanLyNguoiDungServices.login(payload)
        return data.data.content
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getUserIDThunk = createAsyncThunk('quanLyNguoiDung/getUserIDThunk', async (payload: string, { rejectWithValue }) => {
    try {
        const data = await quanLyNguoiDungServices.getUserID(payload)
        return data.data.content
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const putUserIDThunk = createAsyncThunk('quanLyNguoiDung/putUserIDThunk', async ({ id, payload }: { id: string, payload: any }, { rejectWithValue }) => {
    try {
        const data = await quanLyNguoiDungServices.putUserID(id, payload)
        return data.data.content
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const uploadAvatarThunk = createAsyncThunk('quanLyNguoiDung/uploadAvatarThunk', async (payload: any, { rejectWithValue }) => {
    try {
        const data = await quanLyNguoiDungServices.uploadAvatar(payload)
        return data.data.content
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getUserThunk = createAsyncThunk('quanLyNguoiDung/getUser',async(_,{rejectWithValue}) => {
    try {
        const data = await quanLyNguoiDungServices.getUser()
        console.log("data của getuser tại apithunk", data);
        return data.data.content
    } catch (error) {
        return rejectWithValue(error)
    }
})

