import { api } from "./api";

export function createProject(project) {
  return api.post("/project", { ...project });
}
