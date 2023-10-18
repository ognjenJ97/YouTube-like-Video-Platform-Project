import { Component, Input, OnInit } from '@angular/core';
import { CommentVideoDto } from '../../video.model';
import { CommentService } from 'src/app/comment/comment.service';
import { LikeDislikeDto } from 'src/app/likeDislike/likeDislike.model';
import { LikeDislikeService } from 'src/app/likeDislike/likeDIslike.service';

@Component({
  selector: 'app-video-one-comments',
  templateUrl: './video-one-comments.component.html',
  styleUrls: ['./video-one-comments.component.css']
})
export class VideoOneCommentsComponent implements OnInit {

  constructor(private commentService: CommentService, private likeDislikeService: LikeDislikeService) {}

  @Input() videoOwnerId: number;
  @Input() comment: CommentVideoDto;
  firstLetter: string;
  likeCount: number;
  dislikeCount: number;
  commentId: number;
  ownerId: number;
  userId: number;
  commentLiked: boolean;
  commentDisliked: boolean;

  ngOnInit() {
      this.firstLetter = this.comment.ownerUsername.charAt(0).toUpperCase();
      this.commentId = this.comment.id;
      this.ownerId  = this.comment.ownerId;
      this.userId = +localStorage.getItem('userId');

      this.likeCount = this.comment.likedDislikedComments.reduce((count, item) => {
        return item.like ? count + 1 : count;
      }, 0);
      this.dislikeCount = this.comment.likedDislikedComments.reduce((count, item) => {
        return !item.like ? count + 1 : count;
      }, 0);

      const userLikedDisliked = this.comment.likedDislikedComments.find(item => +item.userId == +this.userId);
      console.log('ovo je lajk : ')
      console.log(userLikedDisliked)


      this.commentLiked = false;
      this.commentDisliked = false;

      if(userLikedDisliked) {
        if(userLikedDisliked.like) {
          return this.commentLiked = true;
        }
        return this.commentDisliked = true;
      }


  }
  
  onDelete() {
    this.commentService.deleteComment(this.commentId);
  }

  isCommentOwner() {
    const userId = localStorage.getItem('userId');
    if (userId && +userId === this.ownerId) {
      return true;
    }
    return false;
  }

  isVideoOwner() {
    const userId = localStorage.getItem('userId');
      if(userId && +userId === this.videoOwnerId) {
        return true;
      }
      return false;
  }


  handleAddLike(likeValue) {
    if (!this.userId) {
      alert("Please log in");
      return;
  }
  const userLikedDisliked = this.comment.likedDislikedComments.find(item => +item.userId == +this.userId);

  if(userLikedDisliked && userLikedDisliked.like === likeValue) {
    this.likeDislikeService.deleteLike(userLikedDisliked.id);
    return;
  }

  if (userLikedDisliked && userLikedDisliked.like !== likeValue) {
    this.likeDislikeService.deleteLike(userLikedDisliked.id);
  }

  this.likeDislikeService.addLike(this.userId, null, this.comment.id, likeValue)
  }

}
