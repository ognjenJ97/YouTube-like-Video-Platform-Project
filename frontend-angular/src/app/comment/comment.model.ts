import { LikeDislikeDto } from "../likeDislike/likeDislike.model";

export class CommentDto {
    public id: number;
    public content: string;
    public creationDate: string;
    public ownerId: number;
    public ownerUsername: string;
    public videoId: number;
    public videoUrl: string;
    public likedDislikedComments: LikeDislikeDto[];
  
    constructor(
      id: number,
      content: string,
      creationDate: string,
      ownerId: number,
      ownerUsername: string,
      videoId: number,
      videoUrl: string,
      likedDislikedComments: LikeDislikeDto[]
    ) {
      this.id = id;
      this.content = content;
      this.creationDate = creationDate;
      this.ownerId = ownerId;
      this.ownerUsername = ownerUsername;
      this.videoId = videoId;
      this.videoUrl = videoUrl;
      this.likedDislikedComments = likedDislikedComments;
    }
  }