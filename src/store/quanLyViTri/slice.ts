import { createSlice } from "@reduxjs/toolkit"
import { getLocationAtHeaderThunk, getLocationPaginationThunk, getLocationByIdThunk, postLocationThunk, getLocationThunk } from "./thunk"
import { PhanTrangViTri, ViTri } from "types"


type quanLyViTriIntitialState = {
    Locations?: ViTri[]
    LocationPagination?: PhanTrangViTri,
    LocationById?: ViTri,
    LocationHeader?: ViTri[]
    isPostingLocation?: boolean
    setUploadModal?: boolean
    currentLocation?: ViTri
}

const initialState: quanLyViTriIntitialState = {
    // LocationHeader: [{
    //     id: 0,
    //     tenViTri: "" ,
    //     tinhThanh: "",
    //     quocGia: "",
    //     hinhAnh: "",
    // }]
}

const quanLyViTriSlice = createSlice({
    name: "quanLyViTri",
    initialState,
    reducers: {
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getLocationThunk.fulfilled, (state, { payload }) => {
                state.Locations = payload
            })
            .addCase(getLocationPaginationThunk.fulfilled, (state, { payload }) => {
                state.LocationPagination = payload
            })
            .addCase(getLocationByIdThunk.fulfilled, (state, { payload }) => {
                state.LocationById = payload
            })
            .addCase(getLocationAtHeaderThunk.fulfilled, (state, { payload }) => {
                console.log("payloadHeader", payload);
                state.LocationHeader = payload
            })
            .addCase(postLocationThunk.pending, (state) => {
                state.isPostingLocation = true
            })
            .addCase(postLocationThunk.fulfilled, (state, { payload }) => {
                state.LocationById = payload
                state.isPostingLocation = false
                state.setUploadModal = true
            })
            .addCase(postLocationThunk.rejected, (state) => {
                state.isPostingLocation = false
            })
    },
})
export const { actions: quanLyViTriActions, reducer: quanLyViTriReducer } = quanLyViTriSlice