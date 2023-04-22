import AnimeCard from "@/components/cards/character_card";
import Discover from "@/components/home/discover";
import PopularityBoard from "@/components/home/popularity_board";
import Template from "@/components/template";

export default function Home() {
  return (
    <Template>
      <div>
        <Discover></Discover>
        <br></br>
        <PopularityBoard></PopularityBoard>
      </div>
    </Template>
  )
}
