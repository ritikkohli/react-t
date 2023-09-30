'use client'
// import Image from 'next/image';
import axios  from 'axios';
import { useState, useEffect } from 'react';


export default function Home() {
  const [user, setuser] = useState([]);

  let load = async ()=>{
    let data = await axios.get('https://jsonplaceholder.typicode.com/users');
    setuser(data.data);
    console.log(user);
  }

  useEffect(() => {
    load();
  }, [])
  

  return (
    <>
      <h1 className='text-4xl'>HOME</h1>
      <button className='rounded px-4 py-2 bg-green-600 text-white font-bold' onClick={load}>Get</button>
      <div className='p-8 mt-5 bg-slate-100'>
        <ul>
          {
            user.map(function(e){
              return <li>{e.username} -- <a href={`${e.id}`}>explore</a></li>
            })
          }
        </ul>
      </div>
    </>
    )
}
