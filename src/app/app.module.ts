import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopRibbonComponent } from './page-header/top-ribbon/top-ribbon.component';
import { MidRibbonComponent } from './page-header/mid-ribbon/mid-ribbon.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component'; 
import { FeesComponent } from './pages/fees/fees.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubjectsOfferedComponent } from './pages/subjects-offered/subjects-offered.component';
import { HomeFeatureComponent } from './features/home-feature/home-feature.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TopRibbonComponent,
    MidRibbonComponent, 
    FooterComponent,
    HomeComponent,
    FaqsComponent,
    FeesComponent,
    TestimonialsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SubjectsOfferedComponent,
    HomeFeatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
