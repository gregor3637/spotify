import 'rxjs/add/operator/map';

import {Headers, Http} from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  private searchUrl:string;
  private accessToken:string;
  private accessOptions:any;

  constructor(private http:Http) { 
    this.accessToken = 'BQCxG1DNEEI0b-kt3_5x-0KumpRbiu7Cdnb1tpko673iAl8fxZPBpofAbp7xjZWRow4S4J0mkZCMXXED6El45pN05b6K5sMSw-QuW64-rfGAiJqjNQtrc7S6pAa83bi75yuwcgjX-SEAIMH3Jn354jnawHqRsPM&refresh_token=AQDgQsXSnyBYII65YNd6XVFYFjt7msJbnD-C-UOLj84TzemQHcWlXUmMtAL74-r8Td9I-FCNMLHD4BY_qkY7luO4E-b1wxh5BF-9rXYLHo7rwipJemiRALoZRI69UEQox6s';
    this.accessOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.accessToken
      },
      mode: 'cors',
      cache: 'default'
    }
  }

  

  SearchMusic(str:string, type='artist') {
    console.log(this.accessOptions.headers)
    // this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type +'&market=US';
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=artist';
    console.log(this.searchUrl);
    // https://api.spotify.com/v1/search??query=' + str + '&type=artist
    return this.http.get(this.searchUrl, this.accessOptions)
      .map(res => res.json());
  }
}

