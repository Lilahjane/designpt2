import { Routes } from '@angular/router';
import { Cookbook } from './cookbook/cookbook/cookbook';
import { RecipeDetails } from './cookbook/recipe-details/recipe-details';
import { App } from './app';
import { Landingpage } from './layout/landingpage/landingpage';
import { Crochetdict } from './crochet/crochetdict/crochetdict';
import { CrochetPatternView } from './crochet/crochet-pattern-view/crochet-pattern-view';


export const routes: Routes = [
        {
        path: '',
        component: Landingpage
    },
        {
        path: 'recipes',
        component: Cookbook
    },
    
    {
        path: 'recipe-details/:id',
        component: RecipeDetails,
    },

    {
        path: 'crochet',
        component: Crochetdict
    },
    {   path: 'crochet/:title', 
        component: CrochetPatternView 
    }
];

