import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {FormatTimePipe} from './otpgeneration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { CheckresultComponent } from './checkresult/checkresult.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { ManagementteamComponent } from './managementteam/managementteam.component';
import { BranchlistComponent } from './branchlist/branchlist.component';
import { SelectedstudentsComponent } from './selectedstudents/selectedstudents.component';
import { OnlinefeeComponent } from './onlinefee/onlinefee.component';
import { OtpgenerationComponent } from './otpgeneration/otpgeneration.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyconvertComponent } from './currencyconvert/currencyconvert.component';
import { CourselistService } from './courselist.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CourseComponent,
    GalleryComponent,
    RegistrationComponent,
    CheckresultComponent,
    CheckstatusComponent,
    ManagementteamComponent,
    BranchlistComponent,
    SelectedstudentsComponent,
    OnlinefeeComponent,
    OtpgenerationComponent,
    CalculatorComponent,
    CurrencyconvertComponent
    // FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [CourselistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
