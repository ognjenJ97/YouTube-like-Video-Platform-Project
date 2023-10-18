import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "src/app/profile/profile.component";
import { ProfileVideosComponent } from "./profile-videos/profile-videos.component";
import { ProfileAboutmeComponent } from "./profile-aboutme/profile-aboutme.component";
import { ProfileSubscribersComponent } from "./profile-subscribers/profile-subscribers.component";

const routes: Routes = [
  {
      path: '',
      component: ProfileComponent,
      children: [
        { path: '', redirectTo: 'videos', pathMatch: 'full' },
        { path: 'videos', component: ProfileVideosComponent },
        { path: 'aboutme', component: ProfileAboutmeComponent },
        { path: 'subscribers', component: ProfileSubscribersComponent },
        {
          path: '**',
          redirectTo: 'videos'
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {

}