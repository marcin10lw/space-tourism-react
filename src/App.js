import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle path={pathname} />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
