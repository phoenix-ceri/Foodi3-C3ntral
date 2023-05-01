// // import { useMutation } from "@apollo/client";
// // import React, { useState } from "react";
// // import { Card, Button, Form } from "react-bootstrap";
// // import { FaStar } from "react-icons/fa";
// // import { ADD_RATING } from "../../utils/mutations";
// // import Auth from '../../utils/auth';

// // function AddReview({ recipeDetailsId }) {
// //   const [rating, setRating] = useState(0);
// //   const [characterCount, setCharacterCount] = useState(0);
// //   const [commentBody, setCommentBody] = useState("");
  
// //   const [addRating, { error }] = useMutation(ADD_RATING);

// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //         const { data } = await addRating({
// //             variables: {
// //                 recipeDetailsId,
// //                 commentBody,
// //                 commentAuthor: Auth.getProfile().data.username,
// //             },
// //         });

//         setRating(0);
//         setCommentBody('');
//     } catch (err) {
//         console.error(err);
//     }
//   };
  
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'commentBody' && value.length <= 280) {
//         setCommentBody(value);
//         setCharacterCount(value.length);
//     } else if (name === 'rating' && value >= 0 && value <= 5) {
//         setRating(parseInt(value));
//     }
//   };

 
//   return (
//     <section style={{ backgroundColor: "#d94125" }}>
//       <div className="container my-5 py-5 text-dark">
//         <div className="row d-flex justify-content-center">
//           <div className="col-md-10 col-lg-8 col-xl-6">
//             <Card>
//               <Card.Body className="p-4">
//                 <div className="d-flex flex-start w-100">
//                   <img
//                     className="rounded-circle shadow-1-strong me-3"
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
//                     alt="avatar"
//                     width="65"
//                     height="65"
//                   />
//                   <div className="w-100">
//                     <div className="d-flex align-items-center mb-3">
//                       {[...Array(5)].map((_, index) => (
//                         <FaStar
//                           key={index}
//                           className="star"
//                           color={index < rating ? "red" : "gray"}
//                           size={20}
//                           title={
//                             index === 0
//                               ? "Bad"
//                               : index === 1
//                               ? "Poor"
//                               : index === 2
//                               ? "OK"
//                               : index === 3
//                               ? "Good"
//                               : "Excellent"
//                           }
//                           onClick={() => setRating(index + 1)}
//                           onMouseEnter={() => setRating(index + 1)}
//                           onMouseLeave={() => setRating(0)}
//                         />
//                       ))}
//                     </div>
//                     <Form onSubmit={handleFormSubmit}>
//                       <Form.Group controlId="comment">
//                         <Form.Label>Leave a Review!</Form.Label>
//                         <Form.Control
//                           input="text"
//                           as="textarea"
//                           rows={4}
//                           value={commentBody}
//                           onChange={handleChange}
//                         />
//                         <Form.Text className="text-muted">
//                             {characterCount}/280
//                         </Form.Text>
//                       </Form.Group>
//                       <div className="d-flex justify-content-between mt-3">
//                         <Button variant="success">Delete</Button>
//                         <Button type="submit" variant="danger">
//                           Send <i className="fas fa-long-arrow-alt-right ms-1"></i>
//                         </Button>
//                       </div>
//                     </Form>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddReview;

