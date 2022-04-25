import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./comp/error/PageNotFound";
import Homepage from "./comp/Homepage/Homepage";
import AddUser from "./comp/Homepage/Pages/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
