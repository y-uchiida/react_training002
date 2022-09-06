import React from 'react'
import './Task.css'

export const Task = ({ task }: { task: string }) => {
	return (
		<div className='taskBox'>
			<p className='taskText'>
				{task}
			</p>
			<button className='taskTrashButton'>
				<i className="fa-solid fa-trash"></i>
			</button>
		</div>
	)
}
