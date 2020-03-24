import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing/'

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API via GET', () => {
    const dummyNews = [{
        article: 'Newsweek'
    }];
    service.getNews().subscribe(news => {
        expect(news).toEqual(dummyNews);
    });
    const request = httpMock.expectOne(service.url);
    expect(request.request.method).toBe('GET');
    request.flush(dummyNews);
  });
});
