import React, { useEffect, useState } from "react";
import Image from "./Image"
import 'bootstrap/dist/css/bootstrap.css'
import { Card } from "react-bootstrap"
import "../App.css"
import { Heart, HeartFill } from 'react-bootstrap-icons';

function ImageCard({ image }) {

  const [like, setLike] = useState(true);

  return (
    <Card className="mb-3" border='secondary'>
      <a target="_blank" href={image.url}>
        <Image className="card-img-top" src={image.url} alt={image.title} />
      </a>
      <Card.Body>
        <div className='like-icon' onClick={() => setLike(!like)}>
          {like ? <Heart /> : <HeartFill color="#726bdd"/>}
        </div>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>
          <p>
            {image.date}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default ImageCard;