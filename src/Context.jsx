import { createContext, useReducer } from "react"


export const CartContext = createContext()

export const Context = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const para1 = state.filter((item) => action.payload.id === item.id)


                if (para1.length > 0) {
                    return state

                } else {
                    return [...state, action.payload]


                }

            case "REMOVE":
                const para2 = state.filter(
                    (item) => item.id !== action.payload.id
                );

                return para2



            case "INC":
                const inc = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, num: item.num + 1 };
                    } else {
                        return item;
                    }
                });
                return inc;


            case "DEC":
                const dec = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, num: item.num - 1 };
                    } else {
                        return item;
                    }
                });
                return dec;






            default:
                return state


        }
    }

    const [state, dispatch] = useReducer(reducer, [])

    const shayan = { state, dispatch }



    return <CartContext.Provider value={shayan}>{children}</CartContext.Provider>

}

