import { createHttp } from "./BaseService";
const authenticatedHttp = createHttp(true);

export const createBudget = (body) => authenticatedHttp.post("/budget", body);
