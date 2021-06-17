import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_POSTS}`);
  return response.data;
};
