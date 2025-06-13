export class  Option{
    id: number;
    name: string;
    questionId: number;
    isAnswer: boolean;

    isSelected: boolean = false; // To track if the option is selected by the user

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.questionId = data.questionId;
        this.isAnswer = data.isAnswer 
        this.isSelected = false; // Initialize as not selected

}
}