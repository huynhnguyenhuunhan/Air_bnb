import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomSchemaType } from "schema/RoomSchema";
import { quanLyPhongServices } from "services";
import { CityIdType, UploadHinhPhong } from "types";

export const getRoomsThunk = createAsyncThunk(
    'quanLyPhong/getRoomsThunk', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRooms()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getRoomsByLocationThunk = createAsyncThunk(
    'quanLyPhong/getRoomsByLocationThunk', async (params: CityIdType, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRoomsByLocation(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getRoomByIdThunk = createAsyncThunk(
    'quanLyPhong/getRoomByIdThunk', async (id: number, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRoomsById(id)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postRoomThunk = createAsyncThunk(
    'quanLyPhong/postRoomThunk', async (payload: RoomSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.postRoom(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const uploadRoomImageThunk = createAsyncThunk(
    'quanLyPhong/uploadRoomImageThunk', async (payload: UploadHinhPhong, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.uploadRoomImage(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteRoomThunk = createAsyncThunk(
    'quanLyPhong/deleteRoomThunk', async (id: number, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.deleteRoom(id)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getRoomAllThunk = createAsyncThunk(
    'quanLyPhong/getRoomAllThunk', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRoomAll()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)