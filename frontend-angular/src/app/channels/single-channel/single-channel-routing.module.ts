import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "src/app/profile/profile.component";
import { SingleChannelVideosComponent } from "../../profile/single-channel-videos/single-channel-videos.component";
import { SingleChannelAboutMeComponent } from "../../profile/single-channel-about-me/single-channel-about-me.component";
import { SingleChannelSubscribersComponent } from "../../profile/single-channel-subscribers/single-channel-subscribers.component";

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
          { path: '', redirectTo: 'videos', pathMatch: 'full' },
          { path: 'videos', component: SingleChannelVideosComponent },
          { path: 'aboutme', component: SingleChannelAboutMeComponent },
          { path: 'subscribers', component: SingleChannelSubscribersComponent },
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {

}