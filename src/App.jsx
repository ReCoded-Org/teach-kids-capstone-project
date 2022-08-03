import Home from "./containers/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SingleEventPage from "./containers/SingleEventPage";
import AllEvents from "./containers/AllEvents";

function App() {
    return (
        <div className=''>
            <Routes>
                <Route path='/events' element={<AllEvents />} />
                {/* <Route path='/event:id' element={<Event />} /> */}
                {/*<Route path='/sign-in' element={<SignIn />} />*/}
                {/* <Route path='/sign-up' element={<VolunteerOrNgo />} /> */}
                {/* <Route path='/volunteer-profile' element={< VolunteerProfile. />} /> */}
                {/* <Route path='/ngo' element={<NGO />} /> */}
                <Route path='/' element={<SingleEventPage />} />
            </Routes>
        </div>
    );
}

export default App;
