import { useContext } from "react"
import {CartContext} from "./Context"



function ProductCard({ num,id,title , price , image ,category}) {

  const Global = useContext(CartContext)
  // console.log(Global)
  const dispatch = Global.dispatch
  const state = Global.state
  
 
  
 


 

  return (

    <section className='main-card col-9 col-sm-8 col-md-5 col-lg-3 mb-4 mt-4 ms-5'>

        <div className="pic-box col-4">
            <img src={image} alt="" />
        </div>
        <div className="data col-8">

            <h4>{category}</h4>
            <h5>{title.substr(0,15)}</h5>
            <h6>${(price).toFixed(0)}</h6>
            
            
            
            

            <button  onClick={()=>{
              
              {dispatch({type : "ADD", payload : { num ,id, title , price , image ,category} })}}} className='col-12'>ADD TO CARD</button>

        </div>


    </section>
   
  )
}

export default ProductCard
