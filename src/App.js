import "./App.css";
import Top from "./components/Top";
import Question from "./components/Question";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
