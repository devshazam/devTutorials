- Срабатыывают только такие ошибки, остальные не срабатывают



```js
'use client'
import Image from "next/image";
import React, {useState} from 'react';

export default function Home() {
  const[r, setR] = useState(false)


  if(r){

    throw new Error('dfd')
  }
  

  return (
    <h1 onClick={()=>setR(true)}>dkfdjfhfjhhj</h1>
  );
}
