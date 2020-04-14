import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ViJCH0LikjeFHF05hzOGIAK-dWOCXugqoaQlCOe2DkU",
  },
})
