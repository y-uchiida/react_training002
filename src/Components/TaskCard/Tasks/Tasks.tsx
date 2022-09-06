import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

type props = {
	inputText: string,
	taskList: task[],
	setTaskList: React.Dispatch<React.SetStateAction<task[]>>,
}
/**
 * ドラッグされたタスクを入れ替える
 */
const reorder = (taskList: task[], startIndex: number, endIndex: number) => {
	const remove = taskList.splice(startIndex, 1); // ドラッグした要素をリストから削除する
	taskList.splice(endIndex, 0, ...remove); // ドラッグ終了した位置に、ドラッグをした要素を追加する
};

export const Tasks = ({ inputText, taskList, setTaskList }: props) => {

	const handleDragEnd = (result: DropResult) => {
		if (result.destination !== undefined) {
			reorder(taskList, result.source.index, result.destination.index);
		}
	};

	return (
		<>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId='droppable'>
					{provided =>
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{taskList.map(
								(task, index) => (
									<div key={task.id}>
										<Task
											index={index}
											key={task.text}
											task={task}
											taskList={taskList}
											setTaskList={setTaskList}
										></Task>
									</div>
								)
							)}
							{provided.placeholder}
						</div>
					}
				</Droppable>
			</DragDropContext>
		</>
	)
}
