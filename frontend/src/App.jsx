import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { UsersPage } from './pages/UsersPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="app-wrapper">
        {token && <Header />}
        <main className="app-main">
          <Routes>
            <Route 
              path="/login" 
              element={<LoginPage />} 
            />
            <Route 
              path="/" 
              element={token ? <HomePage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/service/:id" 
              element={token ? <ServiceDetailPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/users" 
              element={token ? <UsersPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={token ? <ProfilePage /> : <Navigate to="/login" />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {token && <Footer />}
      </div>
    </Router>
  );
}

export default App;

