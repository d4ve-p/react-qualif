import { CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import Link from "next/link";
import { useContext } from "react";

function PopularityCard({rank, character} : {rank: number, character: CharacterObject}) {
    let { theme } = useContext(ThemeContext);
    return (
        <tr>
            <td className={`${theme.textColor}`}>
                <div className="flex justify-center">
                    {`${rank+1}`}
                </div>
            </td>
            <td>
            <Link href={{pathname: `/details/${character.id}`, query: JSON.stringify(character)}}>
            <div className="flex flex-row items-center gap-x-3">
                <img src={character.image.large} alt={character.name.full} style={{width:50, height:71}}></img>
                <p className={`${theme.textColor}`}>{character.name.full}</p>
            </div>
            </Link>
            </td>
        </tr>
    );
}

export default PopularityCard;