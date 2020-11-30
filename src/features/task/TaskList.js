import React, { useEffect } from 'react';
import styles from "./TaskList.module.css";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";

import { selectProfile, fetchAsyncProf } from "../login/loginSlice.js";
import { selectTasks, fetchAsyncGet } from "./taskSlice";


const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);

    //useEffectでブラウザ読み込み時にタスク一覧の表示＆ログインユーザーの情報を表示
    useEffect(() => {
        const fetchTaskProf = async () => {
            await dispatch(fetchAsyncProf());
            await dispatch(fetchAsyncGet(profile.id));
        };
        fetchTaskProf(); //関数を実行
    }, [dispatch,profile.id]); //dispatchをuseEffectの第二引数として渡す必要あり

    return (
        <div>
            <ul className={styles.TaskList}>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}

export default TaskList
