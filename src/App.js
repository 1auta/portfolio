import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { AboutMe } from "./pages/AboutMe";
import { Other } from "./pages/Other";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/Other" element={<Other/>} />
      </Routes>
    </BrowserRouter>
  );
}
