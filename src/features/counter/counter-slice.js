import {createSlice} from "@reduxjs/toolkit";
export const counterSlice=createSlice({
name:"counter",
initialState:{
value:0,
color:"#FFAB4C",
},
reducers:{
increment:(state,action)=>{state.value+=1},
decrement:(state)=>{state.value-=1}
}
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;
