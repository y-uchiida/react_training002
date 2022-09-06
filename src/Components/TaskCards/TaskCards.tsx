import React, { useState } from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { AddTaskCardButton } from '../AddTaskCardButton/AddTaskCardButton'
import './TaskCards.css'
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

/**
 * ドラッグされたタスクを入れ替える
 */
const reorder = (taskCardsList: taskCard[], startIndex: number, endIndex: number) => {
	const remove = taskCardsList.splice(startIndex, 1); // ドラッグした要素をリストから削除する
	taskCardsList.splice(endIndex, 0, ...remove); // ドラッグ終了した位置に、ドラッグをした要素を追加する
};

export const TaskCards = () => {

	const taskCardId = uuidv4();
	const [taskCardsList, setTaskCardsList] = useState<taskCard[]>([
		{
			id: taskCardId,
			draggableId: taskCardId,
			title: '',
			taskList: [],
		}
	]);

	const handleDragEnd = (result: DropResult) => {
		if (result.destination !== undefined && result.destination !== null) {
			reorder(taskCardsList, result.source.index, result.destination.index);
			setTaskCardsList(taskCardsList);
		}
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable key='taskCardsDroppable' droppableId='taskCardsDroppable' direction='horizontal'>
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef} className='taskCardsArea'>
						{taskCardsList.map((taskCard, index) => (
							<TaskCard key={taskCard.id} index={index} taskCard={taskCard} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
						))}
						{provided.placeholder}
						<AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}
