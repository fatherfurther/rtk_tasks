import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { WindowState  } from "@jswf/react";

const apiUrl = "http://192.168.1.9:8000/api/tasks/"
const token = localStorage.localJWT;

export const fetchAsyncGet = createAsyncThunk("task/get", async (id) => {
    const res = await axios.get(`${apiUrl}?userid=${id}`,{
        headers: {
            Authorization: `JWT ${token}`,
        },
    });
    return res.data;
});

export const fetchAsyncCreate = createAsyncThunk("task/post", async (task) => {
    const res = await axios.post(apiUrl, task, {
        headers: {
            "content-Type": "application/json",
            Authorization: `JWT ${token}`,
        },
    });
    return res.data;
});

export const fetchAsyncUpdate = createAsyncThunk("task/put", async (task) => {
    const res = await axios.put(`${apiUrl}${task.id}/`, task, {
        headers: {
            "content-Type": "application/json",
            Authorization: `JWT ${token}`,
        },
    });
    return res.data;
});

export const fetchAsyncDelete = createAsyncThunk("task/delete", async (id) => {
    await axios.delete(`${apiUrl}${id}/`, {
        headers: {
            "content-Type": "application/json",
            Authorization: `JWT ${token}`,
        },
    });
    return id;
});

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [ //配列。各要素はオブジェクト
            {
                id: 0,
                title: "",
                create_at: "",
                update_at: "",
                userid: 0,
            },
        ],
        editedTask: {
            id: 0,
            title: "",
            create_at: "",
            update_at: "",
            userid: 0,
        },
        selectedTask: {
            id: 0,
            title: "",
            create_at: "",
            update_at: "",
            userid: 0,
        },
        isWindowState: {
            WindowState: WindowState.HIDE,
        },
    },
    reducers: {
        editTask(state, action){
            state.editedTask = action.payload;
        },
        selectTask(state, action) {
            state.selectedTask = action.payload;
            state.isWindowState.WindowState = WindowState.NORMAL;
        },
        initWindowsState(state) {
            state.isWindowState.WindowState = WindowState.HIDE;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
            return {
                ...state,
                tasks: action.payload,
            };
        });
        builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };
        });
        builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
            return {
                ...state,
                tasks: state.tasks.map((t) =>
                    t.id === action.payload.id ? action.payload : t
                ),
                selectedTask: action.payload,
                isWindowState: { WindowState: WindowState.NORMAL },
            };
        });
        builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
            return {
                ...state,
                tasks: state.tasks.filter((t) => t.id !== action.payload),
                selectedTask: {id:0, title:"", create_at:"", update_at:"", userid:0 },
            };
        });
    },
});
export const { editTask, selectTask, initWindowsState } = taskSlice.actions;

export const selectSelectedTask = (state) => state.task.selectedTask;
export const selectEditedTask = (state) => state.task.editedTask;
export const selectTasks = (state) => state.task.tasks;
export const selectWindowState = (state) => state.task.isWindowState;

export default taskSlice.reducer;
