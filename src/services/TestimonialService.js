import { createHttp } from "./BaseService";
const authenticatedHttp = createHttp(true);

export const createTestimonial = (body) =>
  authenticatedHttp.post("/testimonial", body);

export const listTestimonials = () => authenticatedHttp.get("/testimonials");
