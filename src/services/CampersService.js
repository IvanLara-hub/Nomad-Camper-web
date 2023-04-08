import { createHttp } from "./BaseService";

const unauthenticatedHttp = createHttp(false);

export const getCampers = () => unauthenticatedHttp.get("/campers");

export const getCamperBySlug = (slug) =>
  unauthenticatedHttp.get(`/campers/${slug}`);
