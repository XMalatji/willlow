import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { UserService } from './shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './comps/sidebar/sidebar.component';
import { TeacherComponent } from './comps/teacher/teacher.component';
import { TeachersService } from './services/teachers.service';
import { TeachersViewComponent } from './comps/teachers-view/teachers-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AModalComponent } from '@app/shared/a-modal/a-modal.component';
import { ClassCompComponent } from './comps/class-comp/class-comp.component';

import { CalendarModule } from 'angular-calendar';
import { AddstudentComponent } from './comps/student/addstudent/addstudent.component';
import { SubnavComponent } from './comps/subnav/subnav.component';
import { StudentsComponent } from './comps/student/students/students.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './comps/calendar/calendar.component';


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent, HeaderComponent, FooterComponent,
     HomeComponent, LoginComponent, SidebarComponent, TeacherComponent,CalendarComponent,
      TeachersViewComponent, AModalComponent, ClassCompComponent, AddstudentComponent, SubnavComponent, StudentsComponent
    ],
  providers: [  UserService, TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
