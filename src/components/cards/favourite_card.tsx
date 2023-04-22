import { CharacterMap, CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import Link from "next/link";
import { useContext } from "react";

function FavouriteCard({char} : {char: CharacterObject}) {
    let theme = useContext(ThemeContext);

    let removeFav = () => {
        let storage = localStorage.getItem("favourites");
        let data: CharacterMap = JSON.parse(storage === null ? "{}" : storage);
        if(data === null) return;
        if(data[char.id] === null) return

        delete data[char.id];
        localStorage.setItem("favourites", JSON.stringify(data));
        location.reload();

    }

    return (
        <div className="flex flex-row items-center">
        <Link href={{pathname: `/details/${char.id}`, query: JSON.stringify(char)}}>
        <div style={{width: "80vw"}}>
            <div className="flex flex-row items-center gap-x-4">
            <img src={`${char.image.large}`} width={50} height={71}></img>
            <div className="flex flex-col">
                <p className={`${theme.textColor}`}>{char.name.full}</p>
                <p className={`${theme.textColor}`}>{char.gender}</p>
            </div>
            </div>
        </div>
        </Link>
        <div style={{width:"20vw"}}>
        <button onClick={removeFav} className="bg-blue-500 text-white font-bold py-2 px-1 rounded text-xs" style={{maxWidth: "100%"}}>Remove</button>
        </div>
        </div>
    )
}
export default FavouriteCard;