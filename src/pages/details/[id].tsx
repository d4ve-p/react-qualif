import DetailsCard from "@/components/cards/details_card";
import Template from "@/components/template";
import { CharacterObject } from "@/lib/character";
import { ThemeContext } from "@/lib/theme_context";
import { useRouter } from "next/router";
import { useContext } from "react";

function ViewDetails() {
    const router = useRouter();
    let id = router.query.id;
    let data: CharacterObject;

    let theme = useContext(ThemeContext);

    try {
        data = JSON.parse(Object.keys(router.query)[0]);
    } catch(e) {
        return <p className={`${theme.textColor}`}>Loading...</p>
    }

    if(id === undefined) return <p>Loading</p>
    return (
        <Template>
            <DetailsCard dat={data}></DetailsCard>
        </Template>
    )
}

export default ViewDetails;