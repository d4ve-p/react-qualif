import { useQuery } from '@apollo/client'
import { CharacterObject } from '@/lib/character';
import { RANK_CHARACTER } from '@/pages/api/query/CharacterQuery';
import CharacterCard from '../cards/character_card';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '@/lib/theme_context';

function Discover() {
    let { theme } = useContext(ThemeContext);

    let random: number = useMemo(() => Math.floor((Math.random() * 100) % 40) + 1, []);
    const { loading, error, data } = useQuery(RANK_CHARACTER, {
        variables:{"page":random, "perPage": 50}
    });

    if(loading) return <p className={`${theme.textColor} font-bold text-2xl`}>Loading...</p>
    if(error) return <p className={`${theme.textColor} font-bold text-2xl`}>Error</p>

    return (
        <div>
            <p className={`${theme.textColor} font-bold text-2xl`}>Discover Characters</p>
            <br></br>
            {
                <div className="overflow-x-scroll grid grid-flow-col-dense gap-x-5">
                    {
                        data.Page.characters.map((e:any) => {
                            return <CharacterCard key={e.id} character={e}></CharacterCard>
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Discover;