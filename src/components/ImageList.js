import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Image from "./Image"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Card } from "react-bootstrap"
import "../App.css"
import { Heart, HeartFill } from 'react-bootstrap-icons';

const apiKey = process.env.REACT_APP_NASA_KEY;

function ImageList() {
  const [photoData, setPhotoData] = useState([]);
  const [like, setLike] = useState(true);

  useEffect(() => {
    fetchImage();

    async function fetchImage() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-01&end_date=2022-01-11`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data)
    }
  }, []);



  if (!photoData) return
  <div />

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {photoData.map((image) => (
            <Col md={4}>
              <Card className="mb-3" border='secondary'>
                <Image className="card-img-top" src={image.url} alt={image.title} />
                <Card.Body>
                  <Card.Title>{image.title}</Card.Title>
                  <Card.Text>
                    <p>
                      {image.date}
                    </p>
                    <div className='like-icon' onClick={() => setLike(!like)}>
                      {like?<Heart /> : <HeartFill />}
                      {/* <Heart onClick={() => setLike(!like)} /> */}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ImageList;