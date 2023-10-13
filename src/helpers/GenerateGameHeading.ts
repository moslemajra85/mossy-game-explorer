import { GameQuery } from "../App";

const generateGameHeading = (gameQuery: GameQuery) => {
  const items: string[] = ['Games'];

  if (gameQuery.genre) items.unshift(gameQuery.genre.name);
  if (gameQuery.platform) items.unshift(gameQuery.platform.name);

  return items.slice(0).join(' ');
};

export default generateGameHeading;
