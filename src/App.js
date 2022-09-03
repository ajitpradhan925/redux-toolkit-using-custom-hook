import { 
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
