import React, { Dispatch, SetStateAction } from "react";
import './TaskAddInput.css';

type props = {
  inputText: string,
  setInputText: Dispatch<SetStateAction<string>>,
  taskList: task[],
  setTaskList: React.Dispatch<React.SetStateAction<task[]>>,
}

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}: props
) => {

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* 入力された内容でTaskCardを追加する */
    setTaskList([
      ...taskList,
      { text: inputText }
    ]);
    /* TaskCardとして追加したので、入力内容を空にする */
    setInputText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </>
  );
};
