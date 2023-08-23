// Fetching from server


import React from 'react';

async function getData(){
    try{
        const res= await fetch('https://dummyjson.com/products');
        // const res1= await fetch('https://dummyjson.com/products');
        // const res2= await fetch('https://dummyjson.com/products');
// To catch the body of the response or json data
        const resBody=await res.json();
// To catch the status code of the response
        const resStatus=res.status;
// The header part of the response contains a lot of property
// based on which property we want to catch like we want to
// catch the cache-control property of header. 
        const resHeader=res.headers.get('cache-control');
        // const data2=await res2.json();
        // const data3=await res.json();

        return {resBody,resStatus,resHeader};
    
    
    }
    catch(e){
        throw new Error('Something Wrong');
    }
}



const page = async() => {

    const data=await getData();

    return (
        <div>
            <h1>Data Fetching</h1>
            <p>{JSON.stringify(data['resHeader'])}</p>
            {/* <p>Data:1{JSON.stringify(data['data1'])}</p>
            <p>Data:2{JSON.stringify(data['data2'])}</p>
            <p>Data:3{JSON.stringify(data['data3'])}</p> */}
        </div>
    );
};

export default page;