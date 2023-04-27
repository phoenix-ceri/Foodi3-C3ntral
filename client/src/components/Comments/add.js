import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function CommentForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the rating and comment data
  };

  return (
    <section style={{ backgroundColor: "#d94125" }}>
      <div className="container my-5 py-5 text-dark">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <Card>
              <Card.Body className="p-4">
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="65"
                    height="65"
                  />
                  <div className="w-100">
                    <h5>Add a comment</h5>
                    <div className="d-flex align-items-center mb-3">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="star"
                          color={index < rating ? "red" : "gray"}
                          size={20}
                          title={
                            index === 0
                              ? "Bad"
                              : index === 1
                              ? "Poor"
                              : index === 2
                              ? "OK"
                              : index === 3
                              ? "Good"
                              : "Excellent"
                          }
                          onClick={() => handleRatingChange(index + 1)}
                          onMouseEnter={() => handleRatingChange(index + 1)}
                          onMouseLeave={() => handleRatingChange(0)}
                        />
                      ))}
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="comment">
                        <Form.Label>What is your view?</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          value={comment}
                          onChange={handleCommentChange}
                        />
                      </Form.Group>
                      <div className="d-flex justify-content-between mt-3">
                        <Button variant="success">Delete</Button>
                        <Button type="submit" variant="danger">
                          Send <i className="fas fa-long-arrow-alt-right ms-1"></i>
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentForm;

