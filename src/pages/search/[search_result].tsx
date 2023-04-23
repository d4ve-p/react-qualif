import { useQuery } from "@apollo/client";
import Search from ".";
import { FIND_CHARACTER_BY_NAME } from "../api/query/CharacterQuery";
import { Router, useRouter } from "next/router";
import SearchCard from "@/components/cards/search_card";
import { useContext } from "react";
import { ThemeContext } from "@/lib/theme_context";

function SearchResult() {
    const router = useRouter();
    let query = router.query;
    let theme = useContext(ThemeContext);

    const {loading, error, data} = useQuery(FIND_CHARACTER_BY_NAME,{
        variables: {"characterName" : query.search_result}
    });
    
    if(loading) return <p className={`${theme.textColor}`}>Loading...</p>
    if(error) return <p className={`${theme.textColor}`}>Error</p>

    return (
        <Search>
            {
                data.Page.characters.map((e: any) => {
                    return <SearchCard key={e.id} character={e}></SearchCard>
                })
            }
        </Search>
    )
}

export default SearchResult;