import React, { useState } from 'react'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskAddInput } from './TaskAddInput'
import { Tasks } from './Tasks/Tasks'
import './TaskCard.css'

export const TaskCard = () => {

	/* 追加するタスクのタイトルになる文字列。TaskAddInputに入力された値を受け取る */
	const [inputText, setInputText] = useState('');

	/* TaskCardが保持しているtaskの一覧 */
	const [taskList, setTaskList] = useState<task[]>([{ id: 0, text: 'Running 30min' }, { id: 1, text: 'shopping' }]);

	return (
		<div className="taskCard">
			<TaskCardTitle />
			<TaskCardDeleteButton />
			<TaskAddInput
				inputText={inputText}
				setInputText={setInputText}
				setTaskList={setTaskList}
				taskList={taskList}
			/>
			<Tasks
				inputText={inputText}
				taskList={taskList}
				setTaskList={setTaskList}
			/>
		</div>
	)
}
