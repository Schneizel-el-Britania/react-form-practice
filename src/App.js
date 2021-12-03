import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
