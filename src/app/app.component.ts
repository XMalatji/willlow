import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { filter } from 'rxjs/operators/filter';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  selectorAuth,
  routerTransition
} from '@app/core';
import { environment as env } from '@env/environment';

import { NIGHT_MODE_THEME, selectorSettings } from './settings';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/willow-logo.png');
  navigation = [
    { link: 'teachersView', label: 'Teachers' },
    { link: 'students', label: 'Students' },
    { link: 'classes', label: 'Classes' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  
  sideMenuAdmin = [
    { link: 'curriculum', icon:'card_travel', label: '  Manage Curriculums' },
    { link: 'classes', icon:'class', label: '  Manage Class' },
    { link: 'teachers', icon:'face', label: '  Manage Teachers' },
    { link: 'students', icon:'accessibility', label: '  Manage Students' },
    { link: 'reports', icon:'person pin', label: '  Generate Reports' }
  ];

  sideMenuTeacher = [
    { link: 'classes', icon:'card_travel', label: 'Grade Class' },
    { link: 'classes', icon:'class', label: '  Reports' },
    { link: 'teachers', icon:'face', label: '  Create Event' },
    { link: 'students', icon:'accessibility', label: '  Manage Students' }
  ];

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private router: Router,
    private titleService: Title,
    public userService:UserService
  ) {}

  ngOnInit(): void {


    this.store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(settings => {
        const { theme, autoNightMode } = settings;
        const hours = new Date().getHours();
        const effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
          ? NIGHT_MODE_THEME
          : theme
        ).toLowerCase();
        this.componentCssClass = effectiveTheme;
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        classList.remove(...toRemove);
        classList.add(effectiveTheme);
      });

    // this.store
    //   .select(selectorAuth)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(auth => (this.userService.isAuthenticated = auth.isAuthenticated));
    // this.router.events
    //   .pipe(
    //     takeUntil(this.unsubscribe$),
    //     filter(event => event instanceof ActivationEnd)
    //   )
    //   .subscribe((event: ActivationEnd) => {
    //     let lastChild = event.snapshot;
    //     while (lastChild.children.length) {
    //       lastChild = lastChild.children[0];
    //     }
    //     const { title } = lastChild.data;
    //     this.titleService.setTitle(
    //       title ? `${title} - ${env.appName}` : env.appName
    //     );
    //   });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());

    
  }

  profile(){
    this.router.navigate(['profile']);
  }
  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['home'])
  }
}
