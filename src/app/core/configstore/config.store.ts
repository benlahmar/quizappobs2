import { QuizConfig } from "../models/quizconfig";

export interface ConfigStore{

    quizid:string,
    config:QuizConfig
}
export const initialConfig:ConfigStore=
{
    quizid:'aspnet',
    config: new QuizConfig({
    allowBack: true,
    allowReview: true,
    autoMove: false,    
    duration: 10,  
    pageSize: 1,
    requiredAll: false,
    richText: false,
    shuffleQuestions: false,
    shuffleOptions: false,
    showClock: true,
    showPager: true
   
    })

}
