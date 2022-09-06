import React, { useState } from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { AddTaskCardButton } from '../AddTaskCardButton/AddTaskCardButton'
import './TaskCards.css'
import { v4 as uuidv4 } from 'uuid';

export const TaskCards = () => {

	const [taskCardsList, setTaskCardsList] = useState<taskCard[]>([
		{
			id: uuidv4(),
			draggableId: uuidv4(),
			title: '',
			taskList: [],
		}
	]);

	return (
		<div className='taskCardsArea'>
			{taskCardsList.map(taskCard => (
				<TaskCard key={taskCard.id} taskCard={taskCard} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
			))}
			<AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
		</div>
	)
}
