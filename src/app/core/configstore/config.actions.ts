import { createAction, props } from "@ngrx/store";

export const setquizid=createAction('[Config] SetQuizId', props<{quizid:string}>())
export const allowback2=createAction('[Config] AllowBack')
export const allowback=createAction('[Config] AllowBack', props<{allow:boolean}>())
export const allowreview=createAction('[Config] AllowReview', props<{allow:boolean}>())
export const setduration=createAction('[Config] SetDuration', props<{durre:number}>())
export const showclock=createAction('[Config] ShowClock', props<{show:boolean}>())
