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
import { CurriculumComponent } from './comps/curriculum/curriculum.component';
import {FormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './comps/calendar/calendar.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { ForgotpasswordComponent } from './comps/forgotpassword/forgotpassword.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './shared/data.interceptor';
import { LookupDataService } from './lookup-data.service';
import {MomentModule} from 'angular2-moment/moment.module';
import { ClassService } from './services/class.service';
import { CurriculumViewComponent } from './comps/curriculum/view/view.component';
import { ViewComponent } from './comps/class-comp/view/view.component';



@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    MomentModule,
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
     HomeComponent, LoginComponent, SidebarComponent, TeacherComponent,
      TeachersViewComponent, AModalComponent, ClassCompComponent, CalendarComponent, 
      AddstudentComponent, CurriculumViewComponent,
       SubnavComponent, StudentsComponent, CurriculumComponent, ProfileComponent, ForgotpasswordComponent, ViewComponent
    ],
  providers: [  AuthguardGuard, UserService, TeachersService, LookupDataService, ClassService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
