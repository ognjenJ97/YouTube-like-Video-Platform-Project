import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDto } from '../channels/channels.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChannelService } from '../channels/channel.service';
import { ChannelsHttpService } from '../channels/channel-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  //podaci logovanog korisnika
  userLogIn: UserDto;
  userLogInId: number;
  subscribersLogIn: UserDto[];
  subscriptionsLogIn: UserDto[];
  userLogInAdmin: string;
  isSubscribed: boolean;
  isOwner: boolean;
  isAuth: boolean;

  //podaci vlasnika profila
  profile: UserDto;
  profileId: number;
  firstLetter: string;

  subscribers: UserDto[];
  subscriptions: UserDto[];


  constructor(private channelService: ChannelService, private channelHttpService: ChannelsHttpService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    this.channelService.clearSingleuser();
    this.channelService.clearSingleUserLogIn();

    this.route.params.subscribe(async (params: Params) => {
      this.profileId = +params['id'];
      this.channelHttpService.fetchSingleUser(this.profileId);

      this.userLogInId = +localStorage.getItem('userId');
      this.channelHttpService.fetchSingleUserLogIn(this.userLogInId);
      
      this.userLogIn = this.channelService.getSingleUserLogIn();

      if(this.profileId === this.userLogInId) {
        this.isOwner = true;
      } else {
        this.isOwner = false;
      }

      if(localStorage.getItem('jwt')) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

      console.log(this.isAuth)

    });

    this.channelService.getSingleUserChange().subscribe((updateSingleUser: UserDto) => {
      this.profile = updateSingleUser;
      this.profileId = this.profile.id;
      this.firstLetter = this.profile.username.charAt(0);
      this.userLogInId = +localStorage.getItem('userId');
      this.subscribers = this.profile.subscribers;
      this.subscriptions = this.profile.subscriptions;
      console.log('Objekat profila: ')
      console.log(this.profile)
    })

    this.channelService.getSingleUserLogInChange().subscribe((updateSingleUserLogIn: UserDto) => {
      this.userLogIn = updateSingleUserLogIn;
      this.subscribersLogIn = this.userLogIn.subscribers;
      this.subscriptionsLogIn = this.userLogIn.subscriptions;

      if(this.userLogIn.role == 'ADMIN') {
        this.userLogInAdmin = 'ADMIN';
      } else if (this.userLogIn.role == 'USER') {
        this.userLogInAdmin = 'USER';
      } else {
        this.userLogInAdmin = null;
      }

    this.isSubscribed = this.subscriptionsLogIn.some(sub => sub.id === this.profileId);
    console.log('Objekat prijavljenog korisnika: ');
    console.log(this.userLogIn)
    })


  }


  subscribe() {
    this.channelHttpService.subscribe(this.userLogInId, this.profileId)
  }

  unsubscribe() {
    this.channelHttpService.unsubscribe(this.userLogInId, this.profileId)
  }





}
