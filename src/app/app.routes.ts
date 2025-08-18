import { Routes } from '@angular/router';
import { Cookbook } from './cookbook/cookbook/cookbook';
import { RecipeDetails } from './cookbook/recipe-details/recipe-details';
import { App } from './app';
import { Landingpage } from './layout/nav/landingpage/landingpage';

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
];

