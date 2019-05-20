import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.wotblitz.com/wotb/encyclopedia/vehicles/?application_id=d6c98f6c814edfb68d506b975a6cbb14"
});
