import DetailsCard from "@/components/cards/details_card";
import Template from "@/components/template";
import { CharacterObject } from "@/lib/character";
import { useRouter } from "next/router";

function ViewDetails() {
    const router = useRouter();
    let id = router.query.id;
    let data: CharacterObject = JSON.parse(Object.keys(router.query)[0]);

    if(id === undefined) return <p>Loading</p>
    return (
        <Template>
            <DetailsCard dat={data}></DetailsCard>
        </Template>
    )
}

export default ViewDetails;