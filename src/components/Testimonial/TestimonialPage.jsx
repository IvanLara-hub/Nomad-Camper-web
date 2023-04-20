import React, { useState } from "react";
import { useEffect } from "react";
import { listTestimonials } from "../../services/TestimonialService";

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

  return (
    <div className="container Testimonials">
      <h1>Valoración</h1>

      {testimonials.map((testimonial) => (
        <div>
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
              <img className="quote-img" src="http://placehold.it/120x120" />
              <p className="text-start ps-4">
                Overall, fantastic! I'd recommend them to anyone looking for a
                creative, thoughtful, and professional team.”
              </p>
            </div>
            <div className="pt-3">
              <span>{testimonial.user.firstName}</span>
              <br />
              Social Media Specialist
              <br />
              {new Array(testimonial.rating).fill("").map((rate) => {
                return <span>estrellita </span>;
              })}
            </div>
          </div>

          <hr style={{ opacity: 0.5 }} />
        </div>
        // <div key={testimonial._id} className="testimonial">
        //   <img src={testimonial.camper.img} alt="Imagen camper" />
        //   <p>{testimonial.text}</p>
        //   <p>Usuario: {testimonial.user.firstName}</p>
        //   <p>Valoración: {testimonial.rating}</p>
        //   <p>Casa rodante: {testimonial.camper.name}</p>
        // </div>
      ))}
    </div>
  );
};

export default TestimonialPage;
