import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/douglasscaini/podcastr",
  // baseURL: "http://localhost:3333/",
});
