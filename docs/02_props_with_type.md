# props で受け取った引数の型を指定する

JS の場合は以下のようにしてオブジェクトを分割代入で受け取ればよい

```js
export const Tasks = ({ inputText, taskList }) => {
  /* 以下略 */
};
```

しかし、TypeScript の場合は型が指定されていないため以下のエラーが出る

```
Binding element 'inputText' implicitly has an 'any' type.
```

props で渡されるのは一つのオブジェクトになっているので、このオブジェクトをインラインで型定義してやれば OK

```ts
export const Tasks = ({
  inputText,
  taskList,
}: {
  inputText: string;
  taskList: task[];
}) => {
  /* 以下略 */
};
```

インラインで書くととても長くなってしまうので、コンポーネントが受け取る引数オブジェクトを`props` などで定義しておき、それを指定する方法もよいかも

```ts
type props = {
  inputText: string;
  taskList: task[];
};

export const Tasks = ({ inputText, taskList }: props) => {
  /* 以下略 */
};
```
