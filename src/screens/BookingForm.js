import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function BookingScreen() {
    const { id, name } = useParams();

    const [bookerName, setBookerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if all fields are filled
        if (!bookerName || !email || !phone) {
            setErrorMessage("Please fill in all the fields");
            return;
        }

        // save the user details to local storage
        localStorage.setItem(
            `booking-${id}`,
            JSON.stringify({ bookerName, email, phone })
        );

        // show success message
        alert(`Ticket booked successfully for ${bookerName}`);
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <div className="booking-box p-3 card" style={{ width: "80%", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                <h2 className="mt-5">Book a ticket</h2>
                <h2>Show Name: {name}</h2>

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mt-1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={bookerName}
                            onChange={(e) => setBookerName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone " className="mt-1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-primary mt-3 mb-3"
                    >
                        Book Now
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default BookingScreen;
