export class QuizConfig {

    allowBack: boolean;
    allowReview: boolean;
    autoMove: boolean;    
    duration: number;  //
    pageSize: number; // Number of questions per page
    requiredAll: boolean;
    richText: boolean;
    shuffleQuestions: boolean;
    shuffleOptions: boolean;
    showClock: boolean;
    showPager: boolean
    constructor(data: any) {
        this.allowBack = data.allowBack ;
        this.allowReview = data.allowReview ;
        this.autoMove = data.autoMove;
        this.duration = data.duration ; // Duration in seconds
        this.pageSize = data.pageSize ; // Default to 1 question per page
        this.requiredAll = data.requiredAll ;
        this.richText = data.richText ;
        this.shuffleQuestions = data.shuffleQuestions ;
        this.shuffleOptions = data.shuffleOptions ;
        this.showClock = data.showClock ;
        this.showPager = data.showPager ;
    }
}