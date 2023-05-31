import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <GlobalStyle path={pathname} />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
