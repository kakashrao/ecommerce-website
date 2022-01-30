import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  imageNo: number = 1;
  imgNoForCheckout: number = 1;
  totalItemNo: number = 0;
  totalItemNoInCart: number = 0;
  showCart: boolean = false;
  isItemAdded: boolean = false;
  showItem: boolean = false;
  openNavBar: boolean = false;

  title = 'E-Commerce Product Page';

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
    setTimeout(() => {
      alert(
        'This is only the product page, navigation tabs will not work. Thankyou!!!'
      );
    }, 2000);
  }

  srcHeight: number = 0;
  srcWidth: number = 0;

  @HostListener('window:resize')
  getScreenSize() {
    this.srcHeight = window.innerHeight;
    this.srcWidth = window.innerWidth;
    // console.log(this.srcHeight, this.srcWidth);
  }

  showImage(i: number) {
    this.imageNo = i;
  }

  showImageForCheckout(i: number) {
    this.imgNoForCheckout = i;
  }

  arrowBtnClicked(btn: string) {
    if (this.showItem) {
      if (btn === 'prev') {
        if (this.imgNoForCheckout === 1) {
          this.imgNoForCheckout = 4;
        } else {
          this.imgNoForCheckout--;
        }
      } else {
        if (this.imgNoForCheckout === 4) {
          this.imgNoForCheckout = 1;
        } else {
          this.imgNoForCheckout++;
        }
      }
    } else {
      if (btn === 'prev') {
        if (this.imageNo === 1) {
          this.imageNo = 4;
        } else {
          this.imageNo--;
        }
      } else {
        if (this.imageNo === 4) {
          this.imageNo = 1;
        } else {
          this.imageNo++;
        }
      }
    }
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

  toggleNavbar() {
    this.openNavBar = true;
    // console.log(event);
  }

  closeNavBar() {
    this.openNavBar = false;
  }
}
