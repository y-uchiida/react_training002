import React from 'react'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskAddInput } from './TaskAddInput'
import { Tasks } from './Tasks/Tasks'
import './TaskCard.css'

export const TaskCard = () => {
	return (
		<div className="taskCard">
			<TaskCardTitle />
			<TaskCardDeleteButton />
			<TaskAddInput />
			<Tasks />
		</div>
	)
}
