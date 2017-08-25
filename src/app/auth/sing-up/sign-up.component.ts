'use strict';

import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../auth-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public enquiry_types = [];
  public currentType: string = '';

  public signUpForm: FormGroup;
  public enquiry_type: string = '';
  public inputOther: string = '';
  public inputName: string = '';
  public inputEmail: string = '';
  public inputSubject: string = '';
  public inputDescription: string = '';

  constructor(
    private _service: AuthApiService,
    private _fb: FormBuilder
  ) {}

  public ngOnInit() {
    this._getEnquiryTypes();
    this._createForm();
  }

  private _createForm() {
    this.signUpForm = this._fb.group({
      enquiry_type: '',
      inputOther: '',
      inputName: ['', Validators.required ],
      inputEmail: ['', Validators.required ],
      inputSubject: ['', Validators.required ],
      inputDescription: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1000)]) ],
    });
  }

  public signUp(userInfo) {
    this.enquiry_types = userInfo.enquiry_type;
    this.inputOther = userInfo.inputOther;
    this.inputName = userInfo.inputName;
    this.inputEmail = userInfo.inputEmail;
    this.inputSubject = userInfo.inputSubject;
    this.inputDescription = userInfo.inputDescription;
  }

  private _getEnquiryTypes() {
    this._service.getEnquiryTypes()
      .then(res => this.enquiry_types = res.data)
      .catch(this._serverError);
  }

  private _serverError(err: any) {
    console.log('sever error:', err);
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
