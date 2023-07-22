import React, { useContext } from 'react'
import { CartContext } from './Context'


function Cart() {

  const Global = useContext(CartContext)
  const state = Global.state
  const dispatch = Global.dispatch







  const total = state.reduce((total, item) => {

    return total + item.price * item.num;
  }, 0);

  return (

    <>
     <div className='col-12 total'> <i class="payment bi bi-credit-card-2-front-fill pe-2 pt-1"></i> Total Price Is : $ {(total).toFixed(0)}</div>
      <div className='wrapper col-12'>
        
        {
          state.map((val, index) => {


            return (
              <section className='main-card col-9 col-sm-8 col-md-5 col-lg-3 mb-4 mt-4 ms-5' key={index}>

                <div className="pic-box col-4">
                  <img src={val.image} alt="" />
                </div>
                <div className="data col-8">

                  <h4>{val.category}</h4>
                  <h5>{val.title.substr(0, 15)}</h5>
                  <h6>${(val.price).toFixed(0)}</h6>
                  <div className="num col-12">

                    <div className="title">Quantity :</div>
                    <div className='tedad'>
                      <button onClick={() => dispatch({ type: "INC", payload: val })}>+</button>
                      <span>{val.num}</span>
                      <button onClick={() => {
                        if (val.num > 1) {
                          dispatch({ type: "DEC", payload: val });
                        } else {
                          dispatch({ type: "REMOVE", payload: val });
                        }
                      }}>-</button>
                    </div>
                    <div className='dollar'>${(val.num * val.price).toFixed(0)}</div>
                    

                  </div>



                  <button  onClick={() =>{
                    dispatch({ type: "REMOVE", payload: val })
                  
                  } } className='col-12'>Remove </button>

                </div>


              </section>

            )
          })
        }

      </div>


     


    </>





  )
}

export default Cart
