import React from 'react';
import styles from "./TaskDetails.module.css";
import { useSelector } from "react-redux";
import { selectSelectedTask } from "./taskSlice";

const TaskDetails = () => {
    const selectedTask = useSelector(selectSelectedTask);
    return (
        <div className={styles.details}>
            {selectedTask.title && ( //論理積で、タイトルが存在する場合のみ値を表示するようにしている
                <>
                    <h2>{selectedTask.title}</h2>
                    <p>Create at</p>
                    <h3>{selectedTask.created_at}</h3>
                    <p>Update at</p>
                    <h3>{selectedTask.updated_at}</h3>
                </>
            )}
        </div>
    );
};

export default TaskDetails
