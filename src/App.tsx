// Libs
import { BrowserRouter } from 'react-router-dom';

// Components
import { Routes } from "./routes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
