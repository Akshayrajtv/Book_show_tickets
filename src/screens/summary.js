import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Summary() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const pathSegments = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${pathSegments}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show data:", error);
        setError(error);
      }
    };

    fetchShowData();
  }, [showId, pathSegments]);

  const handleBookNow = () => {
    navigate(`/booking/${showId}/${show.name}`);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!show) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{show.name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary m-2" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
