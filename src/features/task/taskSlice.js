import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { useSelector } from "react-redux";
//import { selectProfile} from "../login/loginSlice";

const apiUrl = "http://localhost:8000/api/tasks/"
const token = localStorage.localJWT;

export const fetchAsyncGet = createAsyncThunk("task/get", async (id) => {
    //const profile = useSelector(selectProfile);
    const res = await axios.get(`${apiUrl}?userid=${id}`,{
    //    const res = await axios.get(`${apiUrl}?userid=4`,{
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
    },
    reducers: {
        editTask(state, action){
            state.editedTask = action.payload;
        },
        selectTask(state, action) {
            state.selectedTask = action.payload;
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
export const { editTask, selectTask } = taskSlice.actions;

export const selectSelectedTask = (state) => state.task.selectedTask;
export const selectEditedTask = (state) => state.task.editedTask;
export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
