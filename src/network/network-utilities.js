import fetch from "node-fetch";

export const fetchImage = async (src) => {
  const response = await fetch(src);
  const image = await response.arrayBuffer();

  return image;
};
