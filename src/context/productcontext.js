import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productsReducer"
const AppContext = createContext();
const API = "https:/api.pujakaitem.com/api/products"

const initialState = {
    isLoading : false,
    isError: false,
    product: [],
    featureProducts: [],
}

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({type:"SET_API_DATA", payload: product})
        }catch(err){
            dispatch({type:"API_ERROR"})
        }
    }
    useEffect(() => {
        getProducts(API);
    },[])
    return <AppContext.Provider value={{...state}} >{children}</AppContext.Provider>
};
const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};