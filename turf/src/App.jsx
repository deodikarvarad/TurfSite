import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/UserLogin/Navbar';
import Footer from './components/UserLogin/Footer';
import Loginpage from './components/UserLogin/Loginpage';
import Home from './components/UserLogin/Home';
import Turf from './components/UserLogin/Turf';
import CreateUser from './components/UserLogin/CreateUserpage';
import ProfilePage from './components/UserLogin/Profile';
import Turfbooking from './components/UserLogin/booking';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/turf' element={<Turf />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/" element={<CreateUser/>} />
        <Route path="/turfbooking" element={<Turfbooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/userlogin' element={<Loginpage />} />
        <Route path='/usercreate' element={<CreateUser/>}/>
        <Route path='/*' element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
