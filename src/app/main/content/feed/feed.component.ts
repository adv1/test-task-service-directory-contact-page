'use strict';

import { Component } from '@angular/core';

@Component({
  template: `
  <div>
    <h2>{{ title }}</h2>
    <h3>Some text</h3>
    <p>
      Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      Nullam dictum felis eu pede mollis pretium.
    </p>
  </div>
  `
})
export class FeedComponent {
  title = 'Feed';
}
