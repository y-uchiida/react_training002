import React from 'react'
import { Task } from './Task'

type props = {
	inputText: string,
	taskList: task[],
	setTaskList: React.Dispatch<React.SetStateAction<task[]>>,
}

export const Tasks = ({ inputText, taskList, setTaskList }: props) => {
	return (
		<>
			{taskList.map(task =>
				<Task key={task.text} task={task} taskList={taskList} setTaskList={setTaskList}></Task>
			)}
		</>
	)
}
