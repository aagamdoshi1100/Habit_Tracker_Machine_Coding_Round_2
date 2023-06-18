import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Listing from "./Listing";
import ArchivePage from "./ArchivePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/ArchivePage" element={<ArchivePage />} />
      </Routes>
    </div>
  );
}
