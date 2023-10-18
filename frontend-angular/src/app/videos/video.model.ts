import { CommentDto } from "../comment/comment.model";
import { LikeDislikeDto } from "../likeDislike/likeDislike.model";

export class CommentVideoDto {
  id: number;
  content: string;
  creationDate: string;
  ownerId: number;
  ownerUsername: string;
  likedDislikedComments: LikeDislikeVideoCommentDto[];
}

export class LikeDislikeVideoCommentDto {
  id: number;
  commentId: number;
  like: boolean;
  userId: number;
}

export class LikeDislikeVideoDto {
  id: number;
  like: boolean;
  userId: number;
}

export class VideoDto {
    public id: number;
    public title: string;
    public videoUrl: string;
    public thumbnailUrl: string;
    public description: string;
    public visibility: string;
    public allowComments: boolean;
    public showRatings: boolean;
    public blocked: boolean;
    public views: number;
    public creationDate: string;
    public ownerId: number;
    public ownerUsername: string;
    public comments: CommentVideoDto[];
    public likedDislikedVideos: LikeDislikeVideoDto[];
  
    constructor(
      id: number,
      title: string,
      videoUrl: string,
      thumbnailUrl: string,
      description: string,
      visibility: string,
      allowComments: boolean,
      showRatings: boolean,
      blocked: boolean,
      views: number,
      creationDate: string,
      ownerId: number,
      ownerUsername: string,
      comments: CommentVideoDto[],
      likedDislikedVideos: LikeDislikeVideoDto[]
    ) {
      this.id = id;
      this.title = title;
      this.videoUrl = videoUrl;
      this.thumbnailUrl = thumbnailUrl;
      this.description = description;
      this.visibility = visibility;
      this.allowComments = allowComments;
      this.showRatings = showRatings;
      this.blocked = blocked;
      this.views = views;
      this.creationDate = creationDate;
      this.ownerId = ownerId;
      this.ownerUsername = ownerUsername;
      this.comments = comments;
      this.likedDislikedVideos = likedDislikedVideos;
    }
  }