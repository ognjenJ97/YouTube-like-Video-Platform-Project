import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../../video.model';
import { LikeDislikeService } from 'src/app/likeDislike/likeDIslike.service';
import { CommentService } from 'src/app/comment/comment.service';
import { VideosService } from '../../video.service/video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosHttpService } from '../../video.service/video-http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-one-edit',
  templateUrl: './video-one-edit.component.html',
  styleUrls: ['./video-one-edit.component.css']
})
export class VideoOneEditComponent implements OnInit {

  video: VideoDto;
  id: number;  

  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
  visibility: string;
  allowComments: boolean;
  showRatings: boolean;
  blocked: boolean;

  videoOwnerId: number;
  userId: number;

  isAdmin: boolean = false;
  isOwner: boolean = false;

  constructor(private likeDislikeService: LikeDislikeService, private commentService: CommentService ,private videosService: VideosService, private sanitizer: DomSanitizer, private videoHttpService: VideosHttpService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
      
    this.route.params.subscribe(async (params: Params) => {
      this.id = +params['id'];
      this.videosService.setId(this.id);
      this.videoHttpService.fetchSingleVideo();
    });

    this.videosService.getVideoChange().subscribe((updatedVideo: VideoDto) => {
      this.video = updatedVideo;

      this.title = this.video.title;
      this.videoUrl = this.video.videoUrl;
      this.thumbnailUrl = this.video.thumbnailUrl;
      this.description = this.video.description;
      this.visibility = this.video.visibility;
      this.allowComments = this.video.allowComments;
      this.showRatings = this.video.showRatings;
      this.blocked = this.video.blocked;
      this.videoOwnerId = this.video.ownerId;
      this.userId = +localStorage.getItem('userId');

      if(localStorage.getItem("role") === "ROLE_ADMIN") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }

      if(this.videoOwnerId === this.userId) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }
    })

  
  }


  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    const updateVideo: VideoDto = {
      id: this.video.id,
      title: form.value.title,
      videoUrl: form.value.videoUrl,
      thumbnailUrl: form.value.thumbnailUrl,
      description: form.value.description,
      visibility: form.value.visibility,
      allowComments: form.value.allowComments,
      showRatings: form.value.showRatings,
      blocked: form.value.blocked,
      views: this.video.views,  
      creationDate: this.video.creationDate, 
      ownerId: this.video.ownerId,
      ownerUsername: this.video.ownerUsername, 
      comments: this.video.comments, 
      likedDislikedVideos: this.video.likedDislikedVideos 
  };

  this.videoHttpService.editVideo(updateVideo);

  }


  onDelete() {
    const confirmed = confirm('Do you want to delete this video?');
    if (confirmed) {
        this.videoHttpService.deleteVideo(this.video.id);
    }
  }


}
