import { First } from './first/first';
import { Secend } from './secend/secend';
import { Third } from './third/third';
import { Forth } from './forth/forth';
import { Fifth } from './fifth/fifth';
import { Sixth } from './sixth/sixth';


import { Routes } from '@angular/router';


export const routes: Routes = [

{path: 'first', component: First},
{path: 'second', component: Secend},
{path: 'third', component: Third},
{path: 'forth', component: Forth},
{path: 'fifth', component: Fifth},
{path: 'sixth', component: Sixth},



];
