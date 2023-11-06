import { createSlice } from "@reduxjs/toolkit"
import { getRoomByIdThunk, getRoomsByLocationThunk, getRoomsThunk,getRoomAllThunk } from "./thunk"
import { RoomsByLocation,Rooms } from "types"

type quanLyPhongInitialState = {
    RoomsByLocationList?: RoomsByLocation[]
    RoomsAllList?:Rooms[]
    Room?: RoomsByLocation
    isFetchingRoom: boolean
    currentRoom?: RoomsByLocation
}

const initialState: quanLyPhongInitialState = {
    RoomsByLocationList: [],
    RoomsAllList:[],
    isFetchingRoom: false
}

const quanLyPhongSlice = createSlice({
    name: "quanLyPhong",
    initialState,
    reducers: {
        setCurrentRoom: (state, { payload }) => {
            state.currentRoom = payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getRoomsThunk.fulfilled, (state, { payload }) => {
                state.RoomsByLocationList = payload
                state.isFetchingRoom = false
            })
            .addCase(getRoomsByLocationThunk.fulfilled, (state, { payload }) => {
                state.RoomsByLocationList = payload
                state.isFetchingRoom = false
            })
            .addCase(getRoomsByLocationThunk.pending, (state) => {
                state.isFetchingRoom = true
            })
            .addCase(getRoomsByLocationThunk.rejected, (state) => {
                state.isFetchingRoom = false
            })
            .addCase(getRoomByIdThunk.fulfilled, (state, { payload }) => {
                state.Room = payload
                localStorage.setItem("currentRoomIdView", JSON.stringify(payload.id))
            })
            .addCase(getRoomAllThunk.fulfilled, (state, {payload})=> {
                state.RoomsAllList = payload
                state.isFetchingRoom = false
            })
    },
})

export const { actions: quanLyPhongActions, reducer: quanLyPhongReducer } = quanLyPhongSlice