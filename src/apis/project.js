import { api } from "./api";

export function createProject(project) {
  return api.post("/project", { ...project });
}

export function fetchAllProjects() {
  return api.get("/project");
}
