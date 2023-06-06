import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Homescreen() {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then((response) => response.json())
            .then((data) => setShows(data.map((item) => item.show)));
    }, []);

    const handleShowSummary = (showId) => {
        navigate(`/summary/${showId}`);
    };

    return (
        <div className="container  ml-5 ">
            <h1 className="title ml-5">TV Shows</h1>
            <div className="shows-container ml-5">
                {shows.map((show) => (
                    <div className="card p-1 mb-4 " key={show.id}>
                        <img
                            src={show.image && show.image.medium}
                            className="card-image"
                            alt={show.name}
                        />
                        <div className="card-content p-2">
                            <h2 className="card-title">{show.name}</h2>
                           
                            <p className="card-info">
                                <span>Type:</span> {show.type}
                            </p>
                            <p className="card-info">
                                <span>Language:</span> {show.language}
                            </p>
                            <p className="card-info">
                                <span>Genre:</span> {show.genres.join(", ")}
                            </p>
                            <p className="card-info">
                                <span>Status:</span> {show.status}
                            </p>
                            {show.rating && (
                                <p className="card-info">
                                    <span>Rating:</span> {show.rating.average}
                                </p>
                            )}
                            {show.schedule && (
                                <p className="card-info">
                                    <span>Schedule:</span> {show.schedule.time}{" "}
                                    on {show.schedule.days.join(", ")}
                                </p>
                            )}
                        </div>
                        <div className="card-actions">
                            {/* <Link to={`/booking/${show.id}/${show.name}`}>
                                <button className="btn">Book Now</button>
                            </Link> */}
                            <button
                                className="btn"
                                onClick={() => handleShowSummary(show.id)}
                            >
                                View Summary
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homescreen;
