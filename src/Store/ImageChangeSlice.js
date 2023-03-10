import { createSlice } from "@reduxjs/toolkit";


export const ImageChangeSlice = createSlice({
    name : 'imageChange',
    initialState : {
        UploadImage: "User-Image",
        ImagePath: "",
        UserId: ""
    },
    reducers : {
        path(state, {payload}){
            state.ImagePath = payload.path
        },
        ids(state,{payload}){
            state.UserId = payload.ids
        }
    }
})