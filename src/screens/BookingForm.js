import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function BookingScreen() {
    const { id, name } = useParams();

    const [BookerName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if all fields are filled
        if (!BookerName || !email || !phone) {
            setErrorMessage("Please fill in all the fields");
            return;
        }

        // save the user details to local storage
        localStorage.setItem(
            `booking-${id}`,
            JSON.stringify({ BookerName, email, phone })
        );

        // show success message
        alert(`Ticket booked successfully for ${BookerName}`);
    };

    return (
        <div className="container mt-5  box col-md-7">
            <h2>Book a ticket for Show #{id}</h2>
            <h2>Show Name: {name}</h2>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={BookerName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
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
                    type="submit "
                    className="btn btn-primary mt-3"
                >
                    Book Now
                </Button>
            </Form>
        </div>
    );
}

export default BookingScreen;
