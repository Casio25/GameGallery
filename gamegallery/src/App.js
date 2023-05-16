import { Header } from './components/Header/Header';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/games"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
