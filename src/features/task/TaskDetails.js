import React from 'react';
import styles from "./TaskDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedTask, selectWindowState ,initWindowsState} from "./taskSlice";
import { JSWindow, WindowStyle } from "@jswf/react";
import Button from "@material-ui/core/Button";

const TaskDetails = () => {
    const isWindowStates = useSelector(selectWindowState);
    const selectedTask = useSelector(selectSelectedTask);
    const dispatch = useDispatch();

    const closeWindows = () => {
        dispatch(initWindowsState());
    }
    
    return (
        <JSWindow width={350} height={400} titleSize={30} title="Detail"
            clientStyle={{ backgroundColor: "#292f38" }} windowState={ isWindowStates.WindowState} windowStyle={~WindowStyle.CLOSE} >
        <div className={styles.details}>
            {selectedTask.title && ( //論理積で、タイトルが存在する場合のみ値を表示するようにしている
                <>
                    <h2>{selectedTask.title}</h2>
                    <p>Create at</p>
                    <h3>{selectedTask.created_at}</h3>
                    <p>Update at</p>
                    <h3>{selectedTask.updated_at}</h3>
                    <div className={styles.button}>
                        <Button
                            variant="contained"
                            onClick={closeWindows}
                        color="primary"
                    >
                        Close
                    </Button>
                    </div>
                </>
            )}
        </div>
    </JSWindow>
    );
};

export default TaskDetails
