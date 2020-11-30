import React from 'react';
import styles from "./TaskInput.module.css";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

import {
    fetchAsyncCreate,
    fetchAsyncUpdate,
    editTask,
    selectEditedTask,
} from "./taskSlice";

import { selectProfile} from "../login/loginSlice";

const TaskInput = () => {
    const dispatch = useDispatch();
    const editedTask = useSelector(selectEditedTask);
    const profile = useSelector(selectProfile);

    const handleInputChange = (e) => {
        editedTask.id === 0 //0の場合は新規作成となる
            ? dispatch(editTask({ id: 0, title: e.target.value, userid: profile.id })) //Createの場合はDjango側でidを自動採番されるので、0を仮設定している
            : dispatch(editTask({ id: editedTask.id, title: e.target.value, userid: profile.id }));
    };

    const isDisabled = editedTask.title.length === 0;

    const createClicked = () => {
        dispatch(fetchAsyncCreate(editedTask));
        dispatch(editTask({ id: 0, title: "", userid: 0 })); //editTaskのstateをリセットする
    };

    const updateClicked = () => {
        dispatch(fetchAsyncUpdate(editedTask));
        dispatch(editTask({ id: 0, title: "", userid: 0 }));
    };


    return (
        <div>
            <input
                type="text"
                className={styles.taskInput}
                value={editedTask.title}
                onChange={handleInputChange}
                placeholder="Please input task"
            />
            <div className={styles.switch}>
                {editedTask.id === 0 ? (
                    <Button
                        variant="contained"
                        disabled={isDisabled}
                        onClick={createClicked}
                        color="primary"
                    >
                        Create
                    </Button>
                ) : (
                    <div className={styles.inner}>
                    <Button
                        variant="contained"
                        disabled={isDisabled}
                        onClick={updateClicked}
                        color="primary"
                    >
                        Update
                    </Button>
                    
                    <Button
                        variant="contained"
                        disabled={isDisabled}
                        onClick={createClicked}
                        color="primary"
                    >
                        Create
                    </Button>
                    </div>
                        
                )}
            </div>
        </div>
    )
}

export default TaskInput
