'use client'


import  { useEffect, useState } from 'react';

const page = () => {
    const [user,setUser]=useState([]);

    useEffect(()=>{

        (async()=>{
            const res= await fetch('https://dummyjson.com/products',{
                
            });
            const data=await res.json();
            setUser(data)


            })()

    },[])

    return (
        <div>
            <h1> This is Fetchs</h1>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
};

export default page;