import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import BookingForm from "./screens/BookingForm";
import Summary from "./screens/summary";

function App() {
    return (
        <div className="App">
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homescreen />} />
                    <Route path="/summary/:showId" element={<Summary />} />
                    <Route
                        path="/booking/:showId/:name"
                        element={<BookingForm />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
