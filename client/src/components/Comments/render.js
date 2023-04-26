import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const RenderComment = ({ comment }) => {
  return (
    <Card>
      <Card.Header>{comment.name}</Card.Header>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
        <StarRatingComponent
          name="comment-rating"
          value={comment.rating}
          starCount={5}
          editing={false}
        />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Email: {comment.email}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default RenderComment;
