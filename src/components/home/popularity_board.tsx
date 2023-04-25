import { ThemeContext } from "@/lib/theme_context";
import { RANK_CHARACTER } from "@/pages/api/query/CharacterQuery";
import { useContext, useState } from "react";
import { useQuery } from '@apollo/client'
import PopularityCard from "../cards/popularity_card";
import Image from "next/image";

function PopularityBoard() {
    let { theme } = useContext(ThemeContext);
    const [ pageCounter, setPage ] = useState(1);

    let changePage = (x: number) => {
        return () => {
            if(pageCounter + x <= 0) return;

            setPage(pageCounter + x);
            console.log(pageCounter);
        }
    }

    const { loading, error, data } = useQuery(RANK_CHARACTER,{
        variables:{"page": pageCounter, "perPage": 10}
    });

    if(loading) return <p className={`${theme.textColor}`}>Loading...</p>
    if(error) return <p className={`${theme.textColor}`}>Error</p>
    
    let counter: number = 0;
    let spanList: string[] = ["col-span-2", "col-span-1"]
    return (
        <div>
            <p className={`${theme.textColor} font-bold text-2xl`}>Most Popular Characters</p>
            <table className="table-fixed border-spacing-2 mt-2" style={{width: "100%"}}>
                <tr>
                    <th className={`${theme.textColor} text-left`} style={{width:"20%"}}>Rank</th>
                    <th className={`${theme.textColor} text-left`} style={{width:"80%"}}>Character Name</th>
                </tr>
                {
                    data.Page.characters.map((e: any, i: number) => {
                        return (
                            <PopularityCard rank={(pageCounter-1) * 10 + i} key={e.id} character={e}></PopularityCard>
                        )
                    })
                }
            </table>
            <div className="flex items-center justify-center gap-x-8">
                <Image src={theme.leftArrow} alt="back" width={50} height={50} onClick={changePage(-1)}></Image>
                <Image src={theme.rightArrow} alt="next" width={50} height={50} onClick={changePage(1)}></Image>
            </div>
        </div>
    )

    
}

export default PopularityBoard;