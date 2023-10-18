import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { VideoAddComponent } from './videos/video-add/video-add.component';
import { VideoOneEditComponent } from './videos/video-one/video-one-edit/video-one-edit.component';
import { VideoOneComponent } from './videos/video-one/video-one.component';

const routes: Routes = [
  {path: '', redirectTo: '/videos', pathMatch: 'full'},
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then((m) => m.VideosModule)
  },
  {
    path: 'videos/:id',
    component: VideoOneComponent
  },
  {
    path: 'editVideo/:id',
    component: VideoOneEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addVideo',
    component: VideoAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: '/videos'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
