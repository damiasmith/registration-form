import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/'
      }
    }
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(RegistrationComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      }
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'registration'`, () => {
    expect(component.title).toEqual('registration');
  });

  it('form invalid when empty', () => {
    component.registerForm.controls.firstName.setValue('');
    component.registerForm.controls.lastName.setValue('');
    component.registerForm.controls.email.setValue('');
    component.registerForm.controls.title.setValue('');
    component.registerForm.controls.password.setValue('');
    component.registerForm.controls.confirmPassword.setValue('');
    component.registerForm.controls.acceptTerms.setValue(false);
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('title field validity', () => {
    const title = component.registerForm.controls.title;
    expect(title.valid).toBeFalsy();

    title.setValue('');
    expect(title.hasError('required')).toBeTruthy();
  });

  it('firstNameame field validity', () => {
    const firstName = component.registerForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();
  });

  it('lastName field validity', () => {
    const lastName = component.registerForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();

    lastName.setValue('');
    expect(lastName.hasError('required')).toBeTruthy();
  });

  it('email field validity', () => {
    const email = component.registerForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('password field validity', () => {
    const password = component.registerForm.controls.password;
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

  });

  it('confirmPassword field validity', () => {
    const confirmPassword = component.registerForm.controls.confirmPassword;
    expect(confirmPassword.valid).toBeFalsy();

    confirmPassword.setValue('');
    expect(confirmPassword.hasError('required')).toBeTruthy();

  });

  it('acceptTerms field validity', () => {
    const acceptTerms = component.registerForm.controls.acceptTerms;
    expect(acceptTerms.valid).toBeFalsy();

    acceptTerms.setValue(false);
    expect(acceptTerms.hasError('required')).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('form should be valid', () => {
    component.registerForm.controls.firstName.setValue('Margot');
    component.registerForm.controls.lastName.setValue('Francois');
    component.registerForm.controls.email.setValue('mgfr@gmail.com');
    component.registerForm.controls.title.setValue('Ms');
    component.registerForm.controls.password.setValue('buffalo');
    component.registerForm.controls.confirmPassword.setValue('buffalo');
    component.registerForm.controls.acceptTerms.setValue(true);
    expect(component.registerForm.valid).toBeTruthy();
  });
});

