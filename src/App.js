import Top from "./pages/Top";
import Question from "./pages/Question";
import Result from "./pages/Result";
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
