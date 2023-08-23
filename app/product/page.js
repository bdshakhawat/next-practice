import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This is product page</h1>
        </div>
    );
};

export default page;










// 'use client'
// import React from 'react';
// import Mno from '@/compont/Mno';
// import { useSearchParams } from 'next/navigation';
// // import styles from "./product.module.css";
// // Now to catch the query link from Mno page use searchParams parameter

// // We can also catch the query ulr by importing useSearchParams
// const page = () => {

//     const params=useSearchParams();

//     return (
//         <div>
//             <Mno/>
//             <h1>This is Product Page</h1>
//             <h1>{params.get('name')}</h1>
//             <h1>{params.get('price')}</h1>
//         </div>
//     );
// };

// export default page;

