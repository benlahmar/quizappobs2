import { createReducer, on } from "@ngrx/store";
import { initialConfig } from "./config.store";
import { allowback, allowback2, allowreview, setduration, setquizid, showclock } from "./config.actions";

export const configReducer=createReducer(
    initialConfig,
    on(setquizid, (state,{quizid})=>({
        ...state,
        quizid:quizid
    })),

    on(allowback2,(state)=>({...state, config:{
        ...state.config,
        allowBack:!state.config.allowBack
    }})),

    on(allowback, (state, {allow})=>({
        ...state,config:{
                ...state.config, 
                allowBack:allow
            }

    })),
    on(allowreview, (state, {allow})=>({
        ...state,config:{
                ...state.config, 
                allowReview:allow
            }

    })),
    on(showclock, (state, {show})=>({
        ...state,config:{
                ...state.config, 
                showClock:show
            }

    })),
    on(setduration, (state, {durre})=>({
        ...state,config:{
                ...state.config, 
                duration:durre
            }

    }))
)