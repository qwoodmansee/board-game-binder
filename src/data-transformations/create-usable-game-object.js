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
      learningComplexity: atlasGame.average_learning_complexity,
      strategyComplexity: atlasGame.average_strategy_complexity,
      description: atlasGame.description_preview,
      players: `${atlasGame.min_players}-${atlasGame.max_players}`,
      playTime: `${atlasGame.min_playtime}-${atlasGame.max_playtime} min`,
      rulesUrl: atlasGame.rules_url,
      sarahsPick: inputGame.sarahsPick,
      quintonsPick: inputGame.quintonsPick,
      tags,
    };
  });

  return usableGamesObject;
};
