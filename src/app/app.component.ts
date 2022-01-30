import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageNo: number = 1;
  imgNoForCheckout: number = 1;
  totalItemNo: number = 0;
  totalItemNoInCart: number = 0;
  showCart: boolean = false;
  isItemAdded: boolean = false;
  showItem: boolean = false;

  title = 'ecommerce-website';

  showImage(i: number) {
    this.imageNo = i;
  }

  showImageForCheckout(i: number) {
    this.imgNoForCheckout = i;
  }

  changeCount(action: string) {
    if (action === 'inc') {
      this.totalItemNo++;
    } else if (action === 'dec' && this.totalItemNo > 0) {
      this.totalItemNo--;
    }
    // this.isItemAdded = false;
    this.showCart = false;
  }

  showCartBox() {
    this.showCart = !this.showCart;
  }

  addToCart() {
    if (this.totalItemNo > 0) {
      this.isItemAdded = true;
      this.totalItemNoInCart = this.totalItemNo;
    } else {
      alert('Enter the quantity, please!!!');
    }
  }

  deleteItem() {
    this.isItemAdded = false;
    alert('Item has been removed from cart');
  }

  checkoutBtnClicked() {
    this.showItem = true;
  }

  closeItem() {
    this.showItem = false;
    this.imgNoForCheckout = 1;
  }
}
