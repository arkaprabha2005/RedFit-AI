import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}