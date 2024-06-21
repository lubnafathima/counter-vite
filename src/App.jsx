import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter1 from "./pages/Counter1/Counter1"
import Counter2 from "./pages/Counter2/Counter2"
import Counter3 from "./pages/Counter3/Counter3"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter1 />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/counter3" element={<Counter3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
