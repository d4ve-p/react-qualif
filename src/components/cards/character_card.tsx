import Image from "next/image";

import { useContext } from "react";
import { ThemeContext } from "@/lib/theme_context";
import Link from "next/link";
import { CharacterObject } from "@/lib/character";

function CharacterCard({character} : {character:CharacterObject}) {
    let { theme } = useContext(ThemeContext)
        console.log("Character object: ")
        console.log(character)
        let a = JSON.stringify(character)
        console.log("Object to string: ")
        console.log(a)
        console.log("String to object")
        console.log(JSON.parse(a))

    return (
        <Link href={{pathname: `/details/${character.id}`, query: JSON.stringify(character)}}>
        <div className="w-32">
            <div className="relative" style={{width: 125, height: 178}}>
                <div className={`bg-black absolute ${theme.overlayOpacity}`} style={{width: "100%", height:"100%"}}></div>
                <img src={character.image.large} style={{width: "100%", height: "100%"}}></img>
            </div>

            <p className={`${theme.textColor}`}>{character.name.full}</p>
        </div>
        </Link>
    );
}

export default CharacterCard;
