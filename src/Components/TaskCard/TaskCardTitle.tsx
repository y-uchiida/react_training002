import React, { useState } from 'react';
import './TaskCardTitle.css'

export const TaskCardTitle = () => {

	// フックの呼び出し(useStateでの状態変数の定義)は、関数コンポーネントのトップレベルで行わなければならない
	const [isClick, setIsClick] = useState(false);
	const [inputCardTitle, setInputCardTitle] = useState('Today');

	const handleClick = () => setIsClick(true);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCardTitle(e.target.value);
	};

	/**
	 * Title入力中にenter が押された場合の動作
	 * submit をキャンセルし、編集状態を終了する
	 */
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsClick(false);
	}

	const handleBlur = () => {
		setIsClick(false);
	}

	return (
		<div onClick={handleClick} className="taskCardTitleInputArea">
			{isClick
				?
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="taskCardTitleInput"
						autoFocus
						maxLength={10}
						onChange={handleChange}
						onBlur={handleBlur}
						value={inputCardTitle}
					/>
				</form>
				:
				<h3>{inputCardTitle}</h3>
			}
		</div>
	)
}
