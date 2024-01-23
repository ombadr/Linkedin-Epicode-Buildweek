import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { mainProfileAction } from "../redux/action";
import { useParams } from "react-router-dom";

function Fetchprofilo(){
    const params=useParams()
    console.log(params.id)
    const dispatch=useDispatch()
    const profilo=useSelector(state=>state.profilo)
    useEffect(()=>{
        dispatch(mainProfileAction(params.id))
    },[params.id])
    return profilo
}

export default Fetchprofilo 



