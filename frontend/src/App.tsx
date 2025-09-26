import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import VoluntariosPage from "./pages/VoluntariosPage";
import CarbonoPage from "./pages/CarbonoPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/voluntarios">Voluntários</Link> |{" "}
        <Link to="/carbono">Carbono</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voluntarios" element={<VoluntariosPage />} />
        <Route path="/carbono" element={<CarbonoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
