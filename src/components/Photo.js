import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Image from "./Photos"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Card } from "react-bootstrap"
import "../App.css"
import { Heart } from 'react-bootstrap-icons';

const apiKey = process.env.REACT_APP_NASA_KEY;

function Photo() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-01&end_date=2021-12-31`
        // `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data)
    }
  }, []);

  const handleClick = () => {
    console.log('hello world')
  }



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
                    <p>
                      <Heart onClick={handleClick}/>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>



      {/* <div className="container">
        {photoData.map((image) => (
          <>
            <div className="row">
              <div className="col-md-3">
                <div class="card" >
                  <Image class="card-img-top" src={image.url} alt={image.title} />
                  <div class="card-body">
                    <h5 class="card-title">{image.title}</h5>
                    <p class="card-text">{image.date}</p>
                    <a href="#" class="btn btn-primary">Like</a>
                  </div>
                </div>
              </div> */}
      {/* <Image src={image.url} alt={image.title} />
              <div>
                <h3>
                  {image.title}
                </h3>
                <p>
                  {image.date}
                </p>
              </div> */}
      {/* </div>
          </>
        ))}
      </div> */}
    </>
  );
}

export default Photo;