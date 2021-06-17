import axios from "axios";

export const getCurrentPlaylist = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CURRENT_PLAYLIST}`
  );
  return response.data;
};
