import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const ReviewList = ({ reviews = [] }) => {
    if (!reviews.length) {
        return <h3>No reviews yet</h3>;
    }
    console.log(reviews);
    return (
        <>
            <h3>Reviews</h3>

            {reviews &&
                reviews.map((review) => (
                    <Card key={review._id}>
                        <Card.Header>{review.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>{review.body}</Card.Text>
                            <StarRatingComponent
                                name="comment-rating"
                                value={review.rating}
                                starCount={5}
                                editing={false}
                            />
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Email: {review.email}</ListGroupItem>
                        </ListGroup>
                    </Card>
                ))}

            {/* <Card>
                <Card.Header>{review.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{review.body}</Card.Text>
                    <StarRatingComponent
                        name="comment-rating"
                        value={review.rating}
                        starCount={5}
                        editing={false}
                    />
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Email: {review.email}</ListGroupItem>
                </ListGroup>
            </Card> */}
        </>
    );
};

export default ReviewList;
