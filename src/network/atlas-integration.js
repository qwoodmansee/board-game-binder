import fetch from "node-fetch";

export const fetchBoardGamesFromAtlas = async (jsonGameInputData) => {
  const allIdString = jsonGameInputData.map((g) => g.atlasId).join(",");
  const requestString = `https://api.boardgameatlas.com/api/search?ids=${allIdString}&client_id=${process.env.ATLAS_CLIENT_ID}`;

  let responseJson;
  try {
    const result = await fetch(requestString);
    responseJson = await result.json();
  } catch (e) {
    console.error(`couldn't get games from atlas:`, e);
  }

  return responseJson.games;
};
