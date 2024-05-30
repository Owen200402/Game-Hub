import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be4d38fa92034d9dbc1cee1126c214c5",
  },
});
