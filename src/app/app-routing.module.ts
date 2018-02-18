import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { HomeComponent } from './comps/home/home.component';
import { TeacherComponent } from '@app/comps/teacher/teacher.component';
import { TeachersViewComponent } from '@app/comps/teachers-view/teachers-view.component';
import { ClassCompComponent } from '@app/comps/class-comp/class-comp.component';
//import { AddstudentComponent } from '@app/comps/student/addstudent/addstudent.component';
import { StudentsComponent } from '@app/comps/student/students/students.component';
import { CurriculumComponent } from '@app/comps/curriculum/curriculum.component';  
import { ProfileComponent } from '@app/comps/profile/profile.component';
import { ForgotpasswordComponent } from '@app/comps/forgotpassword/forgotpassword.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { LoginComponent } from '@app/comps/login/login.component';
import { StudentslistComponent } from './comps/studentslist/studentslist.component';
import { AddstudentComponent } from '@app/comps/student/addstudent/addstudent.component';
import { AddteacherComponent } from '@app/comps/addteacher/addteacher.component';
import { CurriculumlistComponent } from '@app/curriculumlist/curriculumlist.component';
import { TeachersDashboardComponent } from '@app/comps/teachers-dashboard/teachers-dashboard.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'teachers-dashboard',
    component: TeachersDashboardComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'curriculumlist',
    component: CurriculumlistComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'addteacher',
    component: AddteacherComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'addstudent',
    component: AddstudentComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
       canActivate: [AuthguardGuard],
    data: {
      title: 'Profile'
    }
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: {
      title: 'Students'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'classes',
    component:ClassCompComponent,
    data: {
      title: 'Classes'
    }
  },
  {
    path: 'teachers',
    component:TeacherComponent,
    data: {
      title: 'Teachers'
    }
  },

  {
    path: 'teachersView',
    component:TeachersViewComponent,
    data: {
      title: 'Teachers'
    }
  },
  {
    path: 'curriculum',
    component:CurriculumComponent,
    data: {
      title: 'Teachers'
    }
  },
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent,
    data: {
      title: 'Teachers'
    }
  },
  {
    path: 'studentslist',
    component:StudentslistComponent,
    data: {
      title: 'Teachers'
    }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
