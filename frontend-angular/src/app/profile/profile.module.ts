import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileAboutmeComponent } from "./profile-aboutme/profile-aboutme.component";
import { ProfileSubscribersComponent } from "./profile-subscribers/profile-subscribers.component";
import { ProfileVideosComponent } from "./profile-videos/profile-videos.component";

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileAboutmeComponent,
        ProfileSubscribersComponent,
        ProfileVideosComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ProfileRoutingModule
    ],
    exports: [
    ]
})
export class ProfileModule {

}