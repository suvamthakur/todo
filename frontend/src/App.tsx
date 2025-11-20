import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
