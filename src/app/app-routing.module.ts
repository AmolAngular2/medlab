import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { MedicinesCategoryComponent } from './components/medicines-category/medicines-category.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'medicines-by-category',component:MedicinesCategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
