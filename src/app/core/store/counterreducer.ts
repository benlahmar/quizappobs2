import { createReducer, on } from "@ngrx/store";
import { initState } from "./appstore";
import { decrementer, incrementer, reset,setcounter } from "./actions";

export const counterReducer=createReducer(
    initState,
    on(incrementer, (state)=>({...state,counter:state.counter+1})),
    on(decrementer, (state)=>({...state,counter:state.counter-1})),
    on(reset, (state)=>({...state,counter:0})),
    on(setcounter, (state,{value})=>({...state,counter:value}))
)

