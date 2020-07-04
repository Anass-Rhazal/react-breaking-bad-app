import { useEffect, useState } from "react";
import React from 'react';
const BASE_URL = 'https://www.breakingbadapi.com'



export function FetchAPi({ url,children }) {

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(BASE_URL + url)
            const data = await response.json()
            setLoading(false)
            setResults(data)
        };

        fetchData();

    }, [url])

    
    return <>
    {loading ?
        <p>Loading!!!!!!!!!</p> :
        children(results)
        }
       </> 

}