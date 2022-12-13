import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import axios from 'axios'
const getCharecters = async () => {
	const res = await axios.get("https://rickandmortyapi.com/api/character");
	// console.log(res.data.results[0]);
	return res.data.results;
};

function ShowCharacters() {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
      getCharecters().then((data) =>setData(data)).catch((err) => console.log(err));
      // console.log(data);
  }, [])


  return (
    <div className='grid sm:grid-col-2 md:grid-cols-5 sm:gap-8 md:gap-16 mt-[40px]'>{
      data?.map((each, idx)=> {
        return (
          <Cart key={idx} props={each}/>
        )
      })
    }</div>
  )
}

export default ShowCharacters