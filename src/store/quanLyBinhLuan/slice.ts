import { createSlice } from "@reduxjs/toolkit"
import { getCommentsByRoomIdThunk } from "./thunk"
import { BinhLuan } from "types"

type QuanLyBinhLuanInitialState = {
    CommentsByRoomIdList?: BinhLuan[]
    RateAverage?: number
    FeedbackSum?: number
}

const initialState: QuanLyBinhLuanInitialState = {
    CommentsByRoomIdList: [],
}

const quanLyBinhLuanSlice = createSlice({
    name: "quanLyBinhLuan",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.
            addCase(getCommentsByRoomIdThunk.fulfilled, (state, { payload }) => {
                state.CommentsByRoomIdList = payload
                let commentsArray = [...state.CommentsByRoomIdList]
                let commentQty = commentsArray.length
                if (commentQty) {
                    // calculate rate average
                    let rateSum = 0;
                    commentsArray.map(comment => {
                        rateSum += comment.saoBinhLuan
                    })
                    state.RateAverage = Math.round(rateSum / commentsArray.length * 100) / 100
                    // calculate comment quantity
                    state.FeedbackSum = commentsArray.length
                } else {
                    state.RateAverage = 0
                    state.FeedbackSum = 0
                }
            })
    },
})

export const { actions: quanLyBinhLuanActions, reducer: quanLyBinhLuanReducer } = quanLyBinhLuanSlice