import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AppState } from './../ngrx-store/reducers/index';
import * as fromAuth from '../auth/actions/auth.actions';

// Modules
import { AuthRoutingModule } from './auth-routing.module';

// Containers
import { LoginComponent } from './containers/login/login.component'

// NgRx
import { reducer } from './reducers/auth.reducer';

const COMPONENTS = [LoginComponent]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])    
  ],
  providers: []
})
export class AuthModule {
  constructor(private store: Store<AppState>) {
    store.dispatch(new fromAuth.CheckAuth());
  }
}