import { useEffect, useState } from 'react'

function useCurrencyInfo(curreny){

    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curreny}.json`).then((res)=>res.json())
        .then((res)=> setData(res[curreny]))
    },[curreny])
    return data
}

export default useCurrencyInfo;