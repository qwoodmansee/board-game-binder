import { parseStringPromise } from "xml2js";
import fetch from "node-fetch";

export const fetchBoardGamesFromBoardGameGeek = async (jsonGameInputData) => {
  const allIdString = jsonGameInputData.map((g) => g.bggId).join(",");
  const requestString = `https://api.geekdo.com/xmlapi2/thing?id=${allIdString}`;

  let xmlText;
  try {
    const result = await fetch(requestString);
    xmlText = await result.text();
  } catch (e) {
    console.error(`couldn't get games from boardgamegeek:`, e);
  }

  let games;
  try {
    const parsed = await parseStringPromise(xmlText);
    games = parsed.items.item;
  } catch (e) {
    console.error(`couldn't parse response from boardgamegeek: `, e);
  }

  return games;
};
