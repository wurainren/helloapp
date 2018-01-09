import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  private products:Array<Product>;

  constructor() { }

  ngOnInit() {
    
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",1.99,2.5,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(3,"第三个商品",1.99,3.6,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(4,"第四个商品",1.99,4.5,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(5,"第五个商品",1.99,1.5,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(6,"第六个商品",1.99,3.1,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
      new Product(7,"第七个商品",1.99,5,"这是一个商品，我的商品我的商品我的商品我的商品",["电子产品","硬件设备"]),
    ]
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}