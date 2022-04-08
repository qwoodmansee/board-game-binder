const getPlayTimeString = (atlasGame, bggGame) => {
  let playTime = undefined;
  if (atlasGame?.min_playtime || atlasGame?.max_playtime) {
    if (atlasGame?.min_playtime === atlasGame?.max_playtime) {
      playTime = `~${atlasGame?.min_playtime} min`;
    } else if (atlasGame?.min_playtime && atlasGame?.max_playtime) {
      playTime = `${atlasGame?.min_playtime}-${atlasGame?.max_playtime} min`;
    } else if (atlasGame?.min_playtime) {
      playTime = `~${atlasGame?.min_playtime} min`;
    } else if (atlasGame?.max_playtime) {
      playTime = `~${atlasGame?.max_playtime} min`;
    }
  } else if (bggGame?.minplaytime || bggGame?.maxplaytime[0].$.value) {
    if (bggGame?.minplaytime[0].$.value === bggGame?.maxplaytime[0].$.value) {
      playTime = `~${bggGame?.minplaytime[0].$.value} min`;
    } else if (
      bggGame?.minplaytime[0].$.value &&
      bggGame?.maxplaytime[0].$.value
    ) {
      playTime = `${bggGame?.minplaytime[0].$.value}-${bggGame?.maxplaytime[0].$.value} min`;
    } else if (bggGame?.minplaytime[0].$.value) {
      playTime = `~${bggGame?.minplaytime[0].$.value} min`;
    } else if (bggGame?.maxplaytime[0].$.value) {
      playTime = `~${bggGame?.maxplaytime[0].$.value} min`;
    }
  }
  return playTime;
};

const getPlayersString = (atlasGame, bggGame) => {
  let playerString = undefined;
  if (atlasGame?.min_players || atlasGame?.max_players) {
    if (atlasGame?.min_players === atlasGame?.max_players) {
      playerString = `${atlasGame?.min_players}`;
    } else if (atlasGame?.min_players && atlasGame?.max_players) {
      playerString = `${atlasGame?.min_players}-${atlasGame?.max_players}`;
    } else if (atlasGame?.min_players) {
      playerString = `${atlasGame?.min_players}`;
    } else if (atlasGame?.max_players) {
      playerString = `${atlasGame?.max_players}`;
    }
  }

  return playerString;
};

export const createUsableGamesObject = (
  jsonGameInputData,
  bggGames,
  atlasGames
) => {
  const usableGamesObject = bggGames.map((bggGame, i) => {
    const inputGame = jsonGameInputData[i];
    const atlasGame = atlasGames[i];

    const tags = bggGame.link
      .filter((l) => l.$.type === "boardgamemechanic")
      .map((l) => l.$.value);

    return {
      name: bggGame.name[0].$.value,
      image: bggGame.image[0],
      learningComplexity:
        atlasGame?.average_learning_complexity &&
        atlasGame?.average_learning_complexity.toFixed(1),
      strategyComplexity:
        atlasGame?.average_strategy_complexity &&
        atlasGame?.average_strategy_complexity.toFixed(1),
      description:
        atlasGame?.description_preview ||
        atlasGame?.description ||
        bggGame?.description,
      players: getPlayersString(atlasGame, bggGame),
      playTime: getPlayTimeString(atlasGame, bggGame),
      rulesUrl: atlasGame?.rules_url,
      sarahsPick: inputGame.sarahsPick,
      quintonsPick: inputGame.quintonsPick,
      tags,
    };
  });

  return usableGamesObject;
};
