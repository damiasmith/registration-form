import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NewsComponent } from './news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

describe('NewsComponent', () => {
  let apiService: ApiService;
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    apiService = TestBed.get(ApiService);
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create service', () => {
    expect(apiService).toBeTruthy();
  });

  it('should return a collection of articles', () => {
    const articleResponse = [
      { color: 'green' }
    ];
    let response;
    spyOn(apiService, 'getNews').and.returnValue(of(articleResponse));

    apiService.getNews().subscribe(res => {
        response = res;
      });

    expect(response).toEqual(articleResponse);
  });
});
