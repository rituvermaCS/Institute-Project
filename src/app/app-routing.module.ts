import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BranchlistComponent } from './branchlist/branchlist.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CheckresultComponent } from './checkresult/checkresult.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CurrencyconvertComponent } from './currencyconvert/currencyconvert.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ManagementteamComponent } from './managementteam/managementteam.component';
import { OnlinefeeComponent } from './onlinefee/onlinefee.component';
import { OtpgenerationComponent } from './otpgeneration/otpgeneration.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectedstudentsComponent } from './selectedstudents/selectedstudents.component';

// const appRoute = {path:'product', component: ProductComponent};

// const routes: Routes = [];

const routes: Routes = [
  { path: "home" , component: HomeComponent},
  { path: "about" , component: AboutComponent},
  { path: "branchlist" , component: BranchlistComponent},
  { path: "calculator" , component: CalculatorComponent},
  { path: "checkresult" , component: CheckresultComponent},
  { path: "checkstatus" , component: CheckstatusComponent},
  { path: "contact" , component: ContactComponent},
  { path: "course" , component: CourseComponent},
  { path: "currencyconvert" , component: CurrencyconvertComponent},
  { path: "gallery" , component: GalleryComponent},
  { path: "managementteam" , component: ManagementteamComponent},
  { path: "onlinefee" , component: OnlinefeeComponent},
  { path: "otpgeneration" , component: OtpgenerationComponent},
  { path: "registration" , component: RegistrationComponent},
  { path: "selectedstudents" , component: SelectedstudentsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
