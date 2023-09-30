'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

function page({params}) {
    const [userData, setuserData] = useState([]);
    let {id} = params;
    let load = async ()=>{
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
        setuserData(data);
        console.log(userData);
      }
    
      useEffect(() => {
        load();
      }, [])

  return <>{JSON.stringify(userData)}</>
}

export default page