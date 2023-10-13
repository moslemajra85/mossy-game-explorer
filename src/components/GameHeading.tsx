import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import generateGameHeading from '../helpers/GenerateGameHeading';

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return <Heading>{generateGameHeading(gameQuery)}</Heading>;
};

export default GameHeading;
