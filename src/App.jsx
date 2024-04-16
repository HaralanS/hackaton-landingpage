import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DicasEtnia from './pages/Dicas/DicasEtnia';
import DicasClasseSocial from './pages/Dicas/DicasClasseSocial';
import DicasEscolaridade from './pages/Dicas/DicasEscolaridade';
import DicasGenero from './pages/Dicas/DicasGenero';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/dicas/classe-social" element={ <DicasClasseSocial /> } />
      <Route path="/dicas/escolaridade" element={ <DicasEscolaridade /> } />
      <Route path="/dicas/etnia" element={ <DicasEtnia /> } />
      <Route path="/dicas/genero" element={ <DicasGenero /> } />
    </Routes>
  );
}

export default App;
