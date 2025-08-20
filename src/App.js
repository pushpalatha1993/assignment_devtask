

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingScreen, LoginScreen, SignupScreen, ProfileScreen } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
