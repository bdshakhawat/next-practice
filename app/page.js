// import React from 'react';

const page = () => {
  return (
    <div>
      <h1>This is Home page</h1>
       {process.env.API_KEY}
    </div>
  );
};

export default page;















// 'use client'
// import Mno from '@/compont/Mno';
// import React from 'react';
// import { useRouter } from 'next/navigation';

// const page = () => {

//   const router=useRouter();

//   const GoTo=()=>{
//     // push method will receive one paramente href url
//     router.push('/profile')
//     // router.back()
//   }

//   return (
//     <div>
//       <Mno/>
//       <h1>Home page</h1>
//       <button onClick={GoTo} >Click</button>
//     </div>
//   );
// };

// export default page;













// async function getData(){
//   const res=await fetch('https://dummyjson.com/products')
//   const json=await res.json()
//   return json['products']


// }


// const page = async() => {
//     const data=await getData()

//   return (
//     <div>
//           {
//             data.map((item,index)=>{
//               return <div key={index}>
//                           <h1>{item['title']}</h1>
//                            <p>{item['price']}</p>


//                       </div>
//           })}
      
//     </div>
//   );
// };

// export default page;

















// / import styles from "./page.module.css"
// 'use client'
// import React, { useEffect, useState } from 'react';

// const page = () => {

// let [data,setData]=useState([])

// useEffect(()=>{

//   (async()=>{
//       let res=await fetch('https://dummyjson.com/products')
//       let json=await res.json()
//       setData(json['products']);

//   })()



// },[])



//   return (
//     <div>
//       {data.map((item,index)=>{
//         return <div key={index}>
//           <h1>{item['title']}</h1>
//           <p>{item['price']}</p>


//         </div>
//       })}
      
//     </div>
//   );
// };

// export default page;

