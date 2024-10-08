import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      transition="transform 0.4s, box-shadow 0.3s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack
          justifyContent={"space-between"}
          marginTop={-2}
          marginBottom={1}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
