import { useState , useEffect } from "react";

function Quote() {

    const [isLoading, setIsLoading] = useState(true);
    const [randomQuote, setRandomQuote] = useState(null);
    const [value, setValue] = useState([]);

    async function fetchRandomQuote(){

        const url = "https://type.fit/api/quotes"

        setIsLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setValue(data.results[0])
    };

    useEffect(() => {
        fetchRandomQuote()
    }, [])


return (
    <div>

    </div>

);


}





export default Quote;