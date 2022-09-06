import React from 'react'

type props = {
	taskCard: taskCard,
	taskCardsList: taskCard[],
	setTaskCardsList: React.Dispatch<React.SetStateAction<taskCard[]>>,
};

export const TaskCardDeleteButton = ({
	taskCard,
	taskCardsList,
	setTaskCardsList,
}: props) => {

	const taskCardDeleteButton = (id: string) => {
		setTaskCardsList(taskCardsList.filter(e => e.id !== id));
	};

	return (
		<>
			<button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}>
				<i className='fas fa-times' />
			</button>
		</>
	)
}
