import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '40f4b21e90894d8eb782aa46e6b06beb';

  constructor(private httpClient: HttpClient) { }


  public getNews() {

    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);

  }
}
