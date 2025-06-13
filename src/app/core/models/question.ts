import { Option } from "./option";

export class Question {
    id: number;
    name: string;
    questionTypeId:number;
    options: Option[];
   

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;

        this.options =  [];
        data.options.forEach((o: Option) => {
            this.options.push(new Option(o));
        });
    }

    isselected(): boolean {
        return this.options.some(option => option.isSelected);
    }

    isCorrect(): boolean {
        return this.options.every(option => option.isSelected === option.isAnswer);
    }
}