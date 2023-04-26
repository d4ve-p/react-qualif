import { CharacterMap, CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import { GET_CHARACTER_BY_ID } from "@/pages/api/query/CharacterQuery";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

function DetailsCard({dat} : {dat: CharacterObject}) {
    let { theme } = useContext(ThemeContext);
    let [ isFav, setFav ] = useState(false);
    let [ heartValue, setHeart ] = useState("/no-hearted.svg");

    useEffect(() => {
        let temp = localStorage.getItem("favourites");
        let storage: CharacterMap = JSON.parse(temp === null ? "{}" : temp);
        if(storage[dat.id] !== undefined) setFav(true);
    }, [])

    useEffect(() => {
        let temp = localStorage.getItem("favourites");
        let storage: CharacterMap = JSON.parse(temp === null ? "{}" : temp);

        if(isFav) {
            storage[dat.id] = dat;
        } else {
            if(storage[dat.id] === undefined) return;
            delete storage[dat.id]
        }
        localStorage.setItem("favourites", JSON.stringify(storage));
        setHeart(isFav ? "/hearted.svg" : "/no-hearted.svg");
    }, [isFav])

    let months: string[] = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    let handleFavourite = () => {
        if(isFav) {
            setHeart("/no-hearted.svg");
            setFav(false);
        } else {
            setHeart("/hearted.svg");
            setFav(true);
        }
    }

    return (
        <div className="p-5">
            <div className="flex flex-row gap-x-5 relative" style={{width: 83.3, height: 118.6}}>
                <div className={`bg-black absolute ${theme.overlayOpacity}`} style={{width: "100%", height:"100%"}}></div>
                <img src={`${dat.image.large}`} alt={`${dat.name.full}`} style={{width:83.3, height:118.6}}></img>
                <div className="flex flex-col">
                    <p className={`${theme.textColor}`}>{dat.name.full}</p>
                    <p className={`${theme.textColor}`}>{dat.name.native}</p>
                    <Image src={heartValue} alt="heart" width={50} height={50} onClick={handleFavourite}></Image>
                </div>
            </div>
            <div className="grid grid-cols-2 gird-flow-col mt-4">
                <span className={`${theme.textColor}`}>
                    Gender: {dat.gender}
                </span>
                <span className={`${theme.textColor}`}>
                    DOB: {`${dat.dateOfBirth.day} ${months[dat.dateOfBirth.month]} ${dat.dateOfBirth.year}`}
                </span>
                <span className={`${theme.textColor}`}>Age: {dat.age}</span>
                <span className={`${theme.textColor}`}>Blood Type: {dat.bloodType}</span>
            </div>
            <div className={`${theme.textColor} mt-4`}>
                {dat.description}
            </div>
        </div>
    )
}

export default DetailsCard;