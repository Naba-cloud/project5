import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from './counter-slice.js';
export const Counter=()=>{
const count=useSelector(state=>state.counter.value)
const color=useSelector(state=>state.counter.color);
const dispatch=useDispatch();

return(<>
<div style={{backgroundColor:"#142F43"}} className="container-fluid">
<h1 style={{color:"#fff"}}>A Simple Counter Using Modern Redux Toolkit</h1>
<h1 style={{color:color}}>{count}</h1>
<button className="btn btn-warning w-25 m-3 "onClick={() => dispatch(increment())}>+</button>
<button   className="btn btn-warning w-25 m-3" onClick={() => dispatch(decrement())}>-</button>

</div>
</>)
}

