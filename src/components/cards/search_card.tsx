import { CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import Link from "next/link";
import { useContext } from "react";

function SearchCard({character} : {character: CharacterObject}) {
    let { theme } = useContext(ThemeContext);

    return (
        <Link href={{pathname: `/details/${character.id}`, query: JSON.stringify(character)}}>
        <div className="flex flex-row items-center gap-x-4">
            <img src={`${character.image.large}`} width={50} height={71}></img>
            <div className="flex flex-col">
                <p className={`${theme.textColor}`}>{character.name.full}</p>
                <p className={`${theme.textColor}`}>{character.gender}</p>
            </div>
        </div>
        </Link>
    )
}
export default SearchCard;