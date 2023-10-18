import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VideosComponent } from "./videos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VideosRoutingModule } from "./videos-routing.module";
import { ChannelsComponent } from "../channels/channels.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SingleChannelComponent } from "../channels/single-channel/single-channel.component";
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSingleComponent } from './videos-single/videos-single.component';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import { VideoOneComponent } from './video-one/video-one.component';
import { SafePipePipe } from './video-one/safe-pipe.pipe';
import { VideoOneCommentsComponent } from './video-one/video-one-comments/video-one-comments.component';
import { VideoOneVideosListComponent } from './video-one/video-one-videos-list/video-one-videos-list.component';
import { VideoOneVideoSingleComponent } from './video-one/video-one-videos-list/video-one-video-single/video-one-video-single.component';
import { VideoAddComponent } from './video-add/video-add.component';
import { VideoOneEditComponent } from './video-one/video-one-edit/video-one-edit.component';

@NgModule({
    declarations: [
        VideosComponent,
        ChannelsComponent,
        SingleChannelComponent,
        VideosListComponent,
        VideosSingleComponent,
        VideosSearchComponent,
        VideoOneComponent,
        SafePipePipe,
        VideoOneCommentsComponent,
        VideoOneVideosListComponent,
        VideoOneVideoSingleComponent,
        VideoAddComponent,
        VideoOneEditComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        VideosRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule 
    ]
})
export class VideosModule{}