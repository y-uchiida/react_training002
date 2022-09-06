import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './DndPractice.css'


function DndPractice() {

	/* const [状態変数, 状態を変更するための関数] = useState(状態の初期値); */
	const [items] = useState(['apple', 'banana', 'cherry']);

	/* onDragEnd: ドラッグ中の要素がドロップされたとき(ドラッグ状態が終了したとき)に実行される */
	const onDragEnd = result => { // result のsource(ドラッグの開始位置) とdestination(ドラッグの終了位置) を利用して、データを入れ替える
		const remove = items.splice(result.source.index, 1); // ドラッグした要素をリストから削除する
		items.splice(result.destination.index, 0, ...remove); // ドラッグ終了した位置に、ドラッグをした要素を追加する
	}

	return (
		<div>
			<h1>DndPractice</h1>
			{/* DragDropContext: D&Dをすることができる領域 */}
			<div className="dragDropArea">
				<DragDropContext onDragEnd={onDragEnd}>

					{/* Droppable: ドラッグ中の要素をドロップできる領域 */}
					<Droppable droppableId="droppable">
						{/* Droppable の子要素は関数でなければならないので、{}で囲んでアロー関数を記述し、そこにJSXを書く
					  * 関数はprovided の引数を取り、これらを使って子要素に情報を伝搬させる
						* 具体的には、 droppableProps と innerRef を子要素の属性に渡す
					  */}
						{provided =>
							<div {...provided.droppableProps} ref={provided.innerRef}>
								{items.map((item, index) => {
									// return でJSXを返すと画面に出力できる
									return (
										<Draggable draggableId={item} index={index} key={item}>
											{/* Draggable の子要素も、おなじく関数である必要がある */}
											{provided =>
												<div className="item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
													{item}
												</div>
											}
										</Draggable>
									)
								})}
								{provided.placeholder} {/* waringが出るので、placeholderを追加しておく */}
							</div>}
					</Droppable>

				</DragDropContext>
			</div>
		</div>
	)
}

export default DndPractice
