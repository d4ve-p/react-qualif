import SearchBar from "@/components/search_bar";
import Template from "@/components/template";

function Search({children} : {children: any}) {
    return (
        <Template>
            <SearchBar></SearchBar>
            {children}
        </Template>
    )
}

export default Search;