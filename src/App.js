import { useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./common/Header";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle path={pathname} />
      <Header />
    </>
  );
}

export default App;
