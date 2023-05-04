import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function Homescreen() {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => setShows(data));
    }, []);

    const handleClose = () => setSelectedShow(null);
    const handleShow = (show) => setSelectedShow(show);

    return (
        <div>
            {shows.map((show) => (
                <div className="row box m-5" key={show.show.id}>
                    <div className="col-md-5">
                        {show.show.image && (
                            <img
                                src={show.show.image.medium}
                                className="smallimg"
                            />
                        )}
                    </div>
                    <div className="col-md-5">
                        <b>
                            <div>
                                <h2>{show.show.name}</h2>
                                <p>Type: {show.show.type}</p>
                                <p>Language: {show.show.language}</p>
                                <p>Genre: {show.show.genres.join(",")}</p>
                                <p>Status: {show.show.status}</p>
                                {show.show.rating && (
                                    <p>Rating: {show.show.rating.average}</p>
                                )}
                                {show.show.schedule ? (
                                    <p>
                                        Schedule: {show.show.schedule.time} on{" "}
                                        {show.show.schedule.days.join(", ")}
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </b>
                        <div style={{ float: "right" }}>
                        <Link to={`/booking/${show.show.id}/${show.show.name}`}>

                                <button className="btn btn-primary m-2">
                                    Book Now
                                </button>
                            </Link>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleShow(show)}
                            >
                                View Summary
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {selectedShow && (
                <Modal show={true} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedShow.show.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <p dangerouslySetInnerHTML={{ __html: selectedShow.show.summary }}></p>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Homescreen;
