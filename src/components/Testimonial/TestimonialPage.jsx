import React, { useState, useEffect } from "react";
import { listTestimonials } from "../../services/TestimonialService";
import "./TestimonialPage.css";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  console.log(testimonials);
  useEffect(() => {
    listTestimonials()
      .then((testimonialsData) => {
        setTestimonials(testimonialsData);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentRating, setCurrentRating] = useState(0);

  const handleClick = (value) => {
    setCurrentRating(value);
  };

  return (
    <div className="container Testimonials">
      <h1>Valoración</h1>

      {testimonials && testimonials.length > 0 ? (
        testimonials.map((testimonial) => (
          <div key={testimonial._id}>
            <div
              style={{
                width: "960px",
                margin: "0 auto",
                paddingTop: "80px",
                paddingBottom: "80px",
              }}
              className="testimonial-quote group"
            >
              <div className="quote-container d-flex align-items-center">
                <img src="./images/testimonial.jpg" alt="Mi imagen" />
                <p className="text-start ps-4">
                  <p>{testimonial.text}</p>
                </p>
              </div>
              <div className="pt-3">
                <span>{testimonial.user && testimonial.user.firstName}</span>
                <br />
                Social Media Specialist
                <br />
                {[1, 2, 3, 4, 5].map((value) => {
                  return (
                    <i
                      key={value}
                      className={`bi bi-star${
                        testimonial.rating >= value ? "-fill" : ""
                      }`}
                      style={{ fontSize: "1.5rem", color: "#ffc107" }}
                    ></i>
                  );
                })}
              </div>
            </div>

            <hr style={{ opacity: 0.5 }} />
          </div>
        ))
      ) : (
        <p>No hay testimonios disponibles.</p>
      )}
    </div>
  );
};

export default TestimonialPage;
