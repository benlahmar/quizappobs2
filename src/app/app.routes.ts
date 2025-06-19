import { Routes } from '@angular/router';
import { QuizComponent } from './features/components/quiz/quiz.component';
import { AboutComponent } from './share/components/about/about.component';
import { ListThemeComponent } from './features/components/list-theme/list-theme.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/themes',
        pathMatch:'full'

    },
    {
        path:'themes',
        loadComponent:()=>import('./features/components/list-theme/list-theme.component').then(m=>m.ListThemeComponent)
    },
    {
        path:'quiz/:quizId',
        loadComponent:()=>import('./features/components/quiz/quiz.component').then(m=>m.QuizComponent)
    
    },
    {
        path:'about',
        component:AboutComponent
    }
];
