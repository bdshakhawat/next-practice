import Link from 'next/link';
import React from 'react';

const Mno = () => {
    return (
        <div>
    {/* Creating a simple menu */}
            <ul>
                <li>
                    <Link href='/' >Home</Link>

                    
                </li>
                <li>
                    <Link href='/product/men' >Men's Product</Link>

                    
                </li>
                <li>
                    <Link href='/product/women' >Women's Product</Link>

                    
                </li>

                <li>
                    <Link href='/profile' >Profile</Link>

                    
                </li>
                <li>
                    <Link href='/about' >About</Link>

                    
                </li>
                <li>
                    <Link href='/fetching' >Fetching</Link>

                    
                </li>
                <li>
                    <Link href='/fetchs' >Fetchs</Link>

                    
                </li>



            </ul>
            
        </div>
    );
};

export default Mno;











// 'use client'

// import Link from 'next/link';
// import React from 'react';
// // To use the global css we need usePath
// import {usePathname} from 'next/navigation';

// const Mno = () => {
// // Initiate the usePathname to get currentPath
//     let currentPath=usePathname();

//     return (
//         <div>
//     {/* To see what the currentPath
//     is print the path name in h1 tag */}
//             <h1>{currentPath}</h1>


//             <Link 
//                 className={currentPath==='/'?'active-link':'pending-link'} 
//                 // we can write this href as an object to send link query. for this
//                 // the basic syntax:<Link href={{pathName:/product, query:{name'URL 
//                 // params from Link'>Product</Link>}}}
//                 href={"/"}
//                 // To remove or replace current history so the 
//                 // browser back arrow will not work
//                 // replace
//                 // this feature by default true and it load the next page
//                 // previously to get better user experience but we can make
//                 // it false if required.
//                 prefetch={true}
//                 >
//                 Home
//             </Link>



//             <br/>
//             <Link 
//                 className={currentPath==='/product'?'active-link':'pending-link'} 
                
//                 href={{pathname:"/product", query:{name:'book', price:'20$'}}} 
//                 replace>
                    
//                 Product
//             </Link>


//             <br/>
//             <Link 
//                 className={currentPath==='/profile' ? 'active-link' : 'pending-link'} 
//                 href={"/profile"}  
//                 replace >
//                 Profile
//             </Link>
               



//             <br/>
//             <Link 
//                 className={currentPath==='/about' ? 'active-link' : 'pending-link' } 
//                 href={"/about"}
//                 replace>
//                 About
//             </Link>
            
//         </div>
//     );
// };

// export default Mno;