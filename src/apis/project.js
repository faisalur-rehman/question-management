import { api } from "./api";

export function createProject(project) {
  return api.post("/project", { ...project });
}

export function fetchAllProjects() {
  return api.get("/project");
}

export function createSuperUser(data) {
  return api.post("/auth/register-superuser", { ...data });
}

export function register(data) {
  return api.post(
    "/auth/register-user",
    { ...data },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("super-user-token")}`,
      },
    }
  );
}
export function login(data) {
  return api.post("/auth/login", { ...data });
}
