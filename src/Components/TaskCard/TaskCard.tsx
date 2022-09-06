import React, { useState } from 'react'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskAddInput } from './TaskAddInput'
import { Tasks } from './Tasks/Tasks'
import './TaskCard.css'
import { Draggable } from 'react-beautiful-dnd'

type props = {
	index: number,
	taskCard: taskCard,
	taskCardsList: taskCard[],
	setTaskCardsList: React.Dispatch<React.SetStateAction<taskCard[]>>,
};

export const TaskCard = ({
	index,
	taskCard,
	taskCardsList,
	setTaskCardsList,
}: props) => {

	/* 追加するタスクのタイトルになる文字列。TaskAddInputに入力された値を受け取る */
	const [inputText, setInputText] = useState('');

	/* TaskCardが保持しているtaskの一覧 */
	const [taskList, setTaskList] = useState<task[]>([]);

	return (
		<Draggable draggableId={taskCard.id} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} className="taskCard">
					<div {...provided.dragHandleProps} className='taskCardTitleAndTaskCardDeleteButtonArea'>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCard={taskCard}
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
						/>
					</div>

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
			)}
		</Draggable>
	)
}
