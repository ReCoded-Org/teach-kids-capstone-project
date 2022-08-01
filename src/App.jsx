import Home from "./containers/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
    return (
        <div>
            <Routes>
                {/* <Route path='/events' element={<Events />} /> */}
                {/* <Route path='/event:id' element={<Event />} /> */}
                {/* <Route path='/sign-in' element={<SignIn />} /> */}
                {/* <Route path='/sign-up' element={<VolunteerOrNgo />} /> */}
                {/* <Route path='/volunteer-profile' element={< VolunteerProfile. />} /> */}
                {/* <Route path='/ngo' element={<NGO />} /> */}
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
