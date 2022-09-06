import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import './Task.css'

type props = {
	index: number,
	task: task,
	taskList: task[],
	setTaskList: React.Dispatch<React.SetStateAction<task[]>>
};

export const Task = ({ index, task, taskList, setTaskList }: props) => {

	const handleDelete = (id: number) => {
		setTaskList(taskList.filter(task => task.id !== id));
	};

	return (
		<Draggable index={index} draggableId={task.draggableId}>
			{(provided) => (
				<div className='taskBox' key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<p className='taskText'>
						{task.text}
					</p>
					<button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
						<i className="fa-solid fa-trash"></i>
					</button>
				</div>
			)}
		</Draggable>
	)
}
