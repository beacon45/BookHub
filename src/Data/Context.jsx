import React,{useEffect,useState,useContext,useCallback} from 'react';
const url="https://openlibrary.org/search.json?title=";
const AppContext=React.createContext();


const AppProvider=({children})=>{
    const [searchTearm,setSearchTerm]=useState("the lost world");
    const [loading,setLoading]=useState(true);
    const [books, setBooks] = useState([]);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks= useCallback(async()=>{
        setLoading(true);
        try {
            const res=await fetch(`${url}${searchTearm}`);
            const data=await res.json();
            console.log(data);
            const {docs}=data;
            
            if(docs){
                const newBooks = docs.slice(0,20).map((bookSingle)=>{
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });
                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                }
                else{
                    setResultTitle("No Search result Found");
                }
            }
            else{
                setBooks([]);
                setResultTitle("No Search Result Found");
            }
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },[searchTearm]);

    useEffect(()=>{
        fetchBooks();
    },[searchTearm,fetchBooks]);

    return(
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export default AppProvider;