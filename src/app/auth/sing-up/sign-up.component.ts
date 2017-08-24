'use strict';

import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public enquiry_types = [];
  public currentType: string = '';

  constructor(private _service: AuthApiService) {}

  public ngOnInit() {
    this._getEnquiryTypes();
  }

  private _getEnquiryTypes() {
    this._service.getEnquiryTypes()
      .subscribe(res => this.enquiry_types = res.data);
  }
}
