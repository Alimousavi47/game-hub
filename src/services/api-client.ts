import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5036cc33af7f4f5f948b189aa949f30c",
  },
});
