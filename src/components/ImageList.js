import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from "react-bootstrap"
import "../App.css"
import ImageCard from './ImageCard'
import RingLoader from "react-spinners/RingLoader";
import { css } from '@emotion/react'

const apiKey = process.env.REACT_APP_NASA_KEY;

function ImageList() {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-01&end_date=2022-01-11`
      );
      
      const data = await res.json();
      setImageData(data);
      setLoading(true);
      console.log(data)
    }
  }, []);


  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {loading ?  
          imageData.map((image) => (
            <Col md={4}>
              <ImageCard
              key={image.hdurl}
              image={image}
              />
            </Col>
          )) : 
          <RingLoader
          className="loader"
          color={"#544eac"}
          size={150} 
          />
          }
        </Row>
      </Container>
    </>
  );
}

export default ImageList;