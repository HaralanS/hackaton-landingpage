import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WorkerProvider from './context/Provider.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WorkerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WorkerProvider>,
)
