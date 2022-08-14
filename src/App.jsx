import Home from "./containers/Home";
import AdminDashboard from "./containers/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SingleEventPage from "./containers/SingleEventPage";
import AllEvents from "./containers/AllEvents";
import SignIn from "./components/SignIn/SignIn";

import NgoProfilePage from "./containers/NgoProfilePage";

import Register from "./components/Register/Register";

import Navbar from "./components/layout/Navbar/Navbar";

import Footer from "./components/layout/Footer/Footer";

function App() {
    return (
        <div className=''>
            <Navbar />
            <Routes>
                <Route path='/events' element={<AllEvents />} />
                {/* <Route path='/event:id' element={<Event />} /> */}
                {/* <Route path='/sign-in' element={<SignIn />} /> */}
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/event:id' element={<SingleEventPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                {/* <Route path='/sign-up' element={<VolunteerOrNgo />} /> */}
                {/* <Route path='/volunteer-profile' element={< VolunteerProfile. />} /> */}
                <Route path='/ngo-admin' element={<AdminDashboard />} />
                <Route path='/ngo-profile' element={<NgoProfilePage />} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
