import Home from "./containers/Home";
import AdminDashboard from "./containers/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SingleEventPage from "./containers/SingleEventPage";
import AllEvents from "./containers/AllEvents";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className=''>
            <Routes>
                <Route path='/events' element={<AllEvents />} />
                {/* <Route path='/event:id' element={<Event />} /> */}
                {/* <Route path='/sign-in' element={<SignIn />} /> */}
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/event:id' element={<SingleEventPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                {/* <Route path='/sign-up' element={<VolunteerOrNgo />} /> */}
                {/* <Route path='/volunteer-profile' element={< VolunteerProfile. />} /> */}
                <Route path='/ngo' element={<AdminDashboard />} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
