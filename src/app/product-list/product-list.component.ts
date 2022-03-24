import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  
  // message = "I'm read only!";
  // canEdit = false;
 
  // onEditClick() {
  //   this.canEdit = !this.canEdit;
  //   if (this.canEdit) {
  //     this.message = 'You can edit me!';
  //   } else {
  //     this.message = "I'm read only!";
  //   }
  // }
  

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
