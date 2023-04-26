import Template from "@/components/template";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/lib/theme_context";
import FavouriteCard from "@/components/cards/favourite_card";
import { CharacterMap } from "@/lib/character";

function Favourites() {
    let [ favList, setFav ] : [favList: CharacterMap, setFav:any] = useState({});

    let updateFav = (fav: CharacterMap) => {
        setFav(fav);
    }
    useEffect(() => {
        let storage = localStorage.getItem("favourites");
        let data: CharacterMap = JSON.parse(storage === null ? "{}" : storage);
        setFav(data)
    }, [])
    
    let { theme } = useContext(ThemeContext);

    return (
        <Template>
            <p className={`${theme.textColor} font-bold text-2xl`}>Waifu/Astolfo:</p>
            {
                Object.keys(favList).map((e: any) => {
                    return <FavouriteCard key={e.id} char={favList[e]} favUpdater={ updateFav }></FavouriteCard>
                })
            }
        </Template>
    )    
}

export default Favourites;