import { QuizConfig } from "../models/quizconfig";

export interface AppStore
{
    counter:number;
   
}

export const initState:AppStore={
    counter:0
}
