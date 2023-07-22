import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function AllProduct() {

    const [Data,setData]= useState([])
    const [load , setLoad] =useState(false)

    useEffect(()=>{
        setLoad(true)
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setLoad(false)
            setData(res.data)})

    },[])




  return (
    <section className='loading'>
        {load?<ClipLoader
        color={"#311D3B"}
        loading={load}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> :
         <div className='wrapper col-12'>

         {
             Data.map((val,index)=>{
                 val.num = 1;
                 
                 return(
                     <ProductCard key={index} {...val}/>
                 )
         
             })
         }
         
         
         
         
         </div>  }
    </section>
    
  
  
  

  )
}

export default AllProduct



