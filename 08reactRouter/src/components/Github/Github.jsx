import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const[data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/user/arpit3114')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

    return (
    <div className='text-center m-4 text-4xl bg-pink-500 text-white  flex justify-center p-20'>Github: {data.followers}
    <img src={data.avatar_url} alt="" width={100}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const res =  await fetch('https://api.github.com/user/arpit3114')
    return res.json()
}