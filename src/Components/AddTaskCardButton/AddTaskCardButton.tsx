import React from 'react'
import './AddTaskCardButton.css'
import { v4 as uuidv4 } from 'uuid';

type props = {
	taskCardsList: taskCard[],
	setTaskCardsList: React.Dispatch<React.SetStateAction<taskCard[]>>,
}

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }: props) => {

	const addTaskCard = () => {
		const taskCardId = uuidv4();
		setTaskCardsList([
			...taskCardsList,
			{
				id: taskCardId,
				draggableId: taskCardId,
				title: 'Today',
				taskList: []
			}
		]);
	};

	return (
		<div className='addTaskCardButtonArea'>
			<button className='addTaskCardButton' onClick={addTaskCard}>+</button>
		</div>
	)
}
