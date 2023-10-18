import { VideoDto } from "../videos/video.model";

export class UserDto {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public channelDescription: string;
    public registrationDate: string;
    public picture: Uint8Array;
    public role: string;
    public blocked: boolean;
    public subscribers: UserDto[];
    public subscriptions: UserDto[];
    public videos: VideoDto[];
  
    constructor(
      id: number,
      username: string,
      password: string,
      firstName: string,
      lastName: string,
      email: string,
      channelDescription: string,
      registrationDate: string,
      picture: Uint8Array,
      role: string,
      blocked: boolean,
      subscribers: UserDto[],
      subscriptions: UserDto[],
      videos: VideoDto[]
    ) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.channelDescription = channelDescription;
      this.registrationDate = registrationDate;
      this.picture = picture;
      this.role = role;
      this.blocked = blocked;
      this.subscribers = subscribers;
      this.subscriptions = subscriptions;
      this.videos = videos;
    }
  }