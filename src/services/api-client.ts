import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5e922f2af0344177b29752d817f306df",
  },
});
