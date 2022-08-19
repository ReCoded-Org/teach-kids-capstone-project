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

import VolunteerPage from "../src/containers/VolunteerPage";

function App() {
    return (
        <div className=''>
            <Routes>
                <Route path='/events' element={<AllEvents />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/event:id' element={<SingleEventPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route
                    path='/volunteer-profile'
                    element={<VolunteerPage />}
                />
                <Route path='/ngo-admin' element={<AdminDashboard />} />
                <Route path='/ngo-profile' element={<NgoProfilePage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
