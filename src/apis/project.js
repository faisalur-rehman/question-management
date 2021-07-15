import { api } from "./api";

export function createProject(project) {
  return api.post("/project", { ...project });
}

export function fetchAllProjects() {
  return api.get("/project");
}

export function fecthSingleProject(id) {
  return api.get(`/project/${id}`);
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
export function presenterPermissions() {
  return api.get("/presenter-permission");
}

export function setPresenterPermissions(data) {
  return api.post(
    "/presenter-permission",
    { ...data },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("super-user-token")}`,
      },
    }
  );
}
export function moderatorPermissions() {
  return api.get("/moderator-permission");
}

export function setModeratorPermissions(data) {
  return api.post(
    "/moderator-permission",
    { ...data },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("super-user-token")}`,
      },
    }
  );
}
