import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeesComponent } from './pages/fees/fees.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SubjectsOfferedComponent } from './pages/subjects-offered/subjects-offered.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'homepage', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'fees', component: FeesComponent },
    { path: 'subjects-offered', component: SubjectsOfferedComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'contact-us', component: ContactUsComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
