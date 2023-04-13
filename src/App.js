import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle path={location.pathname} />
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
