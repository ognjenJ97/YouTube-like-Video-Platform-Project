import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommentVideoDto, VideoDto } from '../video.model';
import { VideosService } from '../video.service/video.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VideosHttpService } from '../video.service/video-http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentService } from 'src/app/comment/comment.service';
import { LikeDislikeService } from 'src/app/likeDislike/likeDIslike.service';

@Component({
  selector: 'app-video-one',
  templateUrl: './video-one.component.html',
  styleUrls: ['./video-one.component.css']
})
export class VideoOneComponent implements OnInit{

  video: VideoDto;
  id: number;
  
  firstName: string;
  firstLetter: string;
  likeCount: number;
  dislikeCount: number;
  allowRating: boolean;
  comments: CommentVideoDto[];
  allowComments: boolean;
  videoOwnerId: number;
  userId: number;
  videoLiked: boolean;
  videoDisliked: boolean;

  isAdmin: boolean = false;
  isOwner: boolean = false;

  newComment: string = '';

  constructor(private likeDislikeService: LikeDislikeService, private commentService: CommentService ,private videosService: VideosService, private sanitizer: DomSanitizer, private videoHttpService: VideosHttpService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {


    this.videosService.clearVideos();
    this.videosService.clearPageNo();
    this.videosService.cleartTitle();
    this.videosService.clearSort();
    this.videoHttpService.fetchVideos();


    this.route.params.subscribe(async (params: Params) => {
      this.id = +params['id'];
      this.videosService.setId(this.id);
      this.videoHttpService.fetchSingleVideo();
      this.videoHttpService.newView(this.id);
    });
  
    this.videosService.getVideoChange().subscribe((updatedVideo: VideoDto) => {
      this.video = updatedVideo;

      this.firstName = this.video.ownerUsername;
      this.firstLetter = this.firstName.charAt(0).toUpperCase();
      this.allowRating = this.video.showRatings;
      this.videoOwnerId = this.video.ownerId;
      this.userId = +localStorage.getItem('userId');
      this.allowComments = this.video.allowComments;

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


      this.likeCount = this.video.likedDislikedVideos.reduce((count, item) => {
        return item.like ? count + 1 : count;
      }, 0);
      this.dislikeCount = this.video.likedDislikedVideos.reduce((count, item) => {
        return !item.like ? count + 1 : count;
      }, 0);

      
      const userLikedDisliked = this.video.likedDislikedVideos.find(item => +item.userId == +this.userId);
      console.log('ovo je lajk : ')
      console.log(userLikedDisliked)


      this.videoLiked = false;
      this.videoDisliked = false;

      if(userLikedDisliked) {
        if(userLikedDisliked.like) {
          return this.videoLiked = true;
        }
        return this.videoDisliked = true;
      }

      this.comments = this.video.comments.sort((a, b) => {
        const dateA = new Date(a.creationDate);
        const dateB = new Date(b.creationDate);
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });







    });



  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt');
  }


  onAddComment() {
    const content = this.newComment;
    const ownerId = localStorage.getItem('userId');
    const videoId = this.id;

    if (!ownerId) {
      alert("Please log in.");
      return;
  }

    if(!content) {
        alert("Please fill comment field.");
        return;
      }

    this.commentService.addComment(content, +ownerId, videoId);
    this.newComment = '';
  }


  handleAddLike(likeValue) {
    if (!this.userId) {
      alert("Please log in");
      return;
  }
  const userLikedDisliked = this.video.likedDislikedVideos.find(item => +item.userId == +this.userId);

  if(userLikedDisliked && userLikedDisliked.like === likeValue) {
    this.likeDislikeService.deleteLike(userLikedDisliked.id);
    return;
  }

  if (userLikedDisliked && userLikedDisliked.like !== likeValue) {
    this.likeDislikeService.deleteLike(userLikedDisliked.id);
  }

  this.likeDislikeService.addLike(this.userId, this.id, null, likeValue)
  }


  }



