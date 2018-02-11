import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env/environment';

import { debug } from './meta-reducers/debug.reducer';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { studentReducer } from './../ngrx/reducers/student.reducer';
import { StudentEffects } from '../ngrx/effects/student.effects';
import { StudentService } from '@app/services/student.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

if (!environment.production) {
  metaReducers.unshift(debug);
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(
      {
        auth: authReducer,
        students:studentReducer
      },
   
     
      { metaReducers }
    ),
    EffectsModule.forRoot([AuthEffects, StudentEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    
    })
  ],
  declarations: [],
  providers: [LocalStorageService, StudentService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
