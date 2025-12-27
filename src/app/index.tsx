import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../features/core/components/Login";
import Home from "../features/core/components/Home";

const App = (): JSX.Element => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App
