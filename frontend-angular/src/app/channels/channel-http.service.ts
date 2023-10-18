import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ChannelService } from './channel.service';
import { UserDto } from './channels.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
  export class ChannelsHttpService {

    private baseUrl = 'http://localhost:8080/api';

    constructor(    private router: Router, private http: HttpClient, private channelService: ChannelService) {}
  
    fetchUsers() {
      const pageNo = this.channelService.getPageNo().toString();
      const params = new HttpParams().set('pageNo', pageNo);

      this.channelService.setLoading(true);
      this.channelService.setError(false);
  
      return this.http.get<any>('http://localhost:8080/api/users', { params, observe: 'response' }).pipe(
        map((response) => {

          this.channelService.setLoading(false);
          this.channelService.setError(false);
          console.log('odgovor iz http', response);

          const totalPages = +response.headers.get('total-pages');
          this.channelService.setTotalPage(totalPages);

          const oldList = this.channelService.getChannels();
          const updatedList = [...oldList, ...response.body];
          this.channelService.setChannels(updatedList);
          // this.channelService.emitChannels();
          return response;
        }),
        catchError((error) => {
          this.channelService.setLoading(false);
          this.channelService.setError(true);
          console.log('odgovor los iz http', error);
          return throwError('Error occurred. Please try again');
        })
      ).subscribe();
    }

    fetchSingleUser(id: number) {
      this.http.get<any>(`http://localhost:8080/api/users/${id}`).pipe(
        map((response) => {
          console.log('odgovor iz http', response);
          this.channelService.setSingleUser(response);
        }), catchError ((error) => {
          console.log('odgovor los iz http', error);
          return throwError('Error occurred. Please try again');
        })
      ).subscribe()
    }

    fetchSingleUserLogIn(id: number) {
      this.http.get<any>(`http://localhost:8080/api/users/${id}`).pipe(
        map((response) => {
          console.log('odgovor iz http', response);
          this.channelService.setSingleUserLogIn(response);
        }), catchError ((error) => {
          console.log('odgovor los iz http', error);
          return throwError('Error occurred. Please try again');
        })
      ).subscribe()
    }


    editUser (updatedUser: UserDto) {
      var params = {
        id: updatedUser.id,
        username: updatedUser.username,
        password: updatedUser.password,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        channelDescription: updatedUser.channelDescription,
        registrationDate: updatedUser.registrationDate,
        picture: updatedUser.picture,
        role: updatedUser.role,
        blocked: updatedUser.blocked,
        subscribers: updatedUser.subscribers,
        subscriptions: updatedUser.subscriptions,
        videos: updatedUser.videos,
    };

    this.http.put(`http://localhost:8080/api/users/${updatedUser.id}`, params)
    .subscribe(
        (response) => {
            console.log(response);
            this.router.navigate(['/profile/' + updatedUser.id]);
        },
        (error) => {
            alert('Neuspešna editovanje videa.');
            console.error(error);
        }
    )
    }


    subscribe(userId: number, channelId: number) {
      this.http.post(`http://localhost:8080/api/users/${userId}/subscribe/${channelId}`, null)
      .subscribe(
        (response) => {
            console.log(response);
            this.fetchSingleUser(channelId);
            this.fetchSingleUserLogIn(userId);
        },
        (error) => {
            alert('Neuspešna subskrajbovanje.');
            console.error(error);
        }
    )
    }


    unsubscribe(userId: number, channelId: number) {
      this.http.post(`http://localhost:8080/api/users/${userId}/unsubscribe/${channelId}`, null)
      .subscribe(
        (response) => {
            console.log(response);
            this.fetchSingleUser(channelId);
            this.fetchSingleUserLogIn(userId);
        },
        (error) => {
            alert('Neuspešna subskrajbovanje.');
            console.error(error);
        }
    )
    }


    
















  }