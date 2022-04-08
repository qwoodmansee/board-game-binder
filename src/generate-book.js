import "dotenv/config";
import {
  EXAMPLE_BGG_GAMES,
  EXAMPLE_ATLAS_GAMES,
} from "./mocks/example-games.js";
import { parseInput } from "./input-utils/parse-input.js";
import { getJsonGameInputData } from "./input-utils/parse-input.js";
import { fetchBoardGamesFromAtlas } from "./network/atlas-integration.js";
import { fetchBoardGamesFromBoardGameGeek } from "./network/bgg-integration.js";
import { createUsableGamesObject } from "./data-transformations/create-usable-game-object.js";
import { createOutputPdf } from "./pdf-utils/drawing-utils.js";

const main = async () => {
  const commandLineOptions = parseInput();
  const jsonGameInputData = await getJsonGameInputData(commandLineOptions);
  const bggGames = await fetchBoardGamesFromBoardGameGeek(jsonGameInputData);
  const atlasGames = await fetchBoardGamesFromAtlas(jsonGameInputData);
  const games = createUsableGamesObject(
    jsonGameInputData,
    bggGames,
    atlasGames
  );

  const orderedGames = games.sort((a, b) => a.name.localeCompare(b.name));
  await createOutputPdf(commandLineOptions, orderedGames);
};

main();
