import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter, Routes } from '@angular/router';
import { Angular15Service } from './app/angular15.service';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { HomeComponent } from './app/home/home.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { StudentComponent } from './app/student/student.component';
import { TeacherComponent } from './app/teacher/teacher.component';

const routes: Routes = [
  
  { path: "", component: HomeComponent,pathMatch:"full" },
  {path:'' , redirectTo:"Home",pathMatch:"full"},
   { path: "Home", component: HomeComponent },
   { path: "student", component: StudentComponent },
   { path: "ContactUs", component: ContactUsComponent },
   { path: "teacher", component: TeacherComponent },
   { path: "**", component: PageNotFoundComponent },
 ];

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent,{

  providers:[provideRouter(routes),Angular15Service, importProvidersFrom(HttpClientModule)]
}).catch(err => console.error(err));


