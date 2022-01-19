import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Image from "./Image"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Card } from "react-bootstrap"
import "../App.css"
import { Heart, HeartFill } from 'react-bootstrap-icons';
import ImageCard from './ImageCard'

const apiKey = process.env.REACT_APP_NASA_KEY;

function ImageList() {
  const [imageData, setImageData] = useState([]);
  // const [like, setLike] = useState(true);


  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-01&end_date=2022-01-11`
      );
      const data = await res.json();
      setImageData(data);
      console.log(data)
    }
  }, []);


  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {imageData ? imageData.map((image) => (
            <Col md={4}>
              <ImageCard image={image}/>
            </Col>
          )) : "loading..."}
        </Row>
      </Container>
    </>
  );
}

export default ImageList;