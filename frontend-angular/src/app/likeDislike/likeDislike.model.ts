export class LikeDislikeDto {
    public id: number;
    public isLike: boolean;
    public creationDate: string;
    public userId: number;
    public userUsername: string;
    public videoId: number;
    public videoUrl: string;
    public commentId: number;
    public commentContent: string;
  
    constructor(
      id: number,
      isLike: boolean,
      creationDate: string,
      userId: number,
      userUsername: string,
      videoId: number,
      videoUrl: string,
      commentId: number,
      commentContent: string
    ) {
      this.id = id;
      this.isLike = isLike;
      this.creationDate = creationDate;
      this.userId = userId;
      this.userUsername = userUsername;
      this.videoId = videoId;
      this.videoUrl = videoUrl;
      this.commentId = commentId;
      this.commentContent = commentContent;
    }
  }