import axios from "axios";

const api = axios.create({
  baseURL: "https://presenter-alarm-restapi.herokuapp.com/",
});

export { api };
