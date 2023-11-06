import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyViTriServices } from "services";
import { PhanTrangParams, UpdateViTri, UploadHinhViTri, ViTri } from "types";

export const getLocationThunk = createAsyncThunk(
    'quanLyViTri/getLocationThunk', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocation()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getLocationPaginationThunk = createAsyncThunk(
    'quanLyViTri/getLocationPaginationThunk', async (params: PhanTrangParams, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationPagination(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getLocationAtHeaderThunk = createAsyncThunk(
    'quanLyViTri/getLocationAtHeaderThunk', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationAtHeader()
            return data.data.content
        }
        catch (error) {
            return rejectWithValue(error)
        }
    })

export const getLocationByIdThunk = createAsyncThunk(
    'quanLyViTri/getLocationByIdThunk', async (params: number, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationById(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postLocationThunk = createAsyncThunk(
    'quanLyViTri/postLocationThunk', async (payload: ViTri, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.postLocation(payload)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postLocationImageThunk = createAsyncThunk(
    'quanLyViTri/postLocationImageThunk', async (params: UploadHinhViTri, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.postImage(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteLocationThunk = createAsyncThunk(
    'quanLyViTri/deleteLocationThunk', async (id: number, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.deleteLocation(id)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const updateLocationThunk = createAsyncThunk(
    'quanLyViTri/updateLocationThunk', async (params: UpdateViTri, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.updateLocation(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)