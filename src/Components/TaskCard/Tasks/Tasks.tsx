import React from 'react'
import { Task } from './Task'

type props = {
	inputText: string,
	taskList: task[]
}

export const Tasks = ({ inputText, taskList }: props) => {
	return (
		<>
			{taskList.map(task =>
				<Task key={task.text} task={task.text}></Task>
			)}
		</>
	)
}
