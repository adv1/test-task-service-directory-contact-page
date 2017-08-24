'use strict';

import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../shared/directory.service';

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public enquiry_types = [];
  public currentType: string = '';

  constructor(private _service: DirectoryService) {}

  public ngOnInit() {
    this.getEnquiryTypes();
  }

  public getEnquiryTypes() {
    this._service.getEnquiryTypes()
      .subscribe(res => this.enquiry_types.push(...res.data));
  }
}
