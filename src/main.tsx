import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './Components/App/App'
import DndPractice from './Components/DndPractice/DndPractice'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /* react-beautiful-dnd がReact v18 に対応していないため、StrictModeを利用しているとエラーが出る
   * 今回は練習なので、StrictModeを利用しないことで対応したが...
   * 今後のバージョンアップはしない、と開発側が明言しているので、以降はプロダクションでは使えないかも
   */
  // <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<App />} />
      <Route path={`/dnd_practice`} element={<DndPractice />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
)
