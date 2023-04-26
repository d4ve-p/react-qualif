import { CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import Link from "next/link";
import { useContext } from "react";

function SearchCard({character} : {character: CharacterObject}) {
    let { theme } = useContext(ThemeContext);

    return (
        <Link href={{pathname: `/details/${character.id}`, query: JSON.stringify(character)}}>
        <div className="flex flex-row items-center gap-x-4 relative" style={{width: 50, height: 75}}>
            <div className={`bg-black absolute ${theme.overlayOpacity}`} style={{width: "100%", height:"100%"}}></div>
            <img src={`${character.image.large}`} width={"100%"} height={"100%"}></img>
            <div className="flex flex-col">
                <p className={`${theme.textColor}`}>{character.name.full}</p>
                <p className={`${theme.textColor}`}>{character.gender}</p>
            </div>
        </div>
        </Link>
    )
}
export default SearchCard;