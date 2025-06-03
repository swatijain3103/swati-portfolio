import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';




// const routes: Routes = [
//   {
//     path: '',
//     component: ProfileComponent
//   }
// ];

// const config: ExtraOptions = {
//   useHash: true,
// };


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillsComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
