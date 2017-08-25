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
  public form: FormGroup;

  constructor(
    private _service: AuthApiService,
    private fb: FormBuilder
  ) {}

  public ngOnInit() {
    this._getEnquiryTypes();
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
      ])
    });
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
