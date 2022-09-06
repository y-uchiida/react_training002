import React from 'react'
import './Task.css'

type props = {
	task: task,
	taskList: task[],
	setTaskList: React.Dispatch<React.SetStateAction<task[]>>
};

export const Task = ({ task, taskList, setTaskList }: props) => {

	const handleDelete = (id: number) => {
		setTaskList(taskList.filter(task => task.id !== id));
	};

	return (
		<div className='taskBox'>
			<p className='taskText'>
				{task.text}
			</p>
			<button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
				<i className="fa-solid fa-trash"></i>
			</button>
		</div>
	)
}
