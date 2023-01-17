import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { RegisterationService } from '../registeration.service';
import { Product } from '../product';
@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
cartitems :Cart[];
price:Number;
product:Product=new Product();
userId=localStorage.getItem("userData");
  constructor(private service:RegisterationService,private route:Router) { }

  ngOnInit(): void {
    this.cartItems();
    this.service.calculateTotalPrice(Number(this.userId)).subscribe(
      (data) =>
      {
        this.price=data,
        console.log(data)
      } ,
     (error) => console.log(error)
      );
  }

  cartItems()
  {
    this.service.getItemsByUserId(Number(this.userId)).subscribe(
      (data) => {
        this.cartitems=data,
        console.log(data)
      }
        ,
      (error)=>console.log(error)
    );
  }

  totalPrice()
  {
      this.service.calculateTotalPrice(Number(this.userId)).subscribe(
        (data) =>
        {
          this.price=data,
          console.log(data)
        } ,
       (error) => console.log(error)
        );
      
    
  }
  deleteItem(id:Number,pid:Number,quantity:Number)
  {
    console.log(pid)
    console.log(quantity)
    this.service.deleteItem(id).subscribe(
      
      (data) => 
      {
        
        console.log(data);
        this.cartItems();
       this.totalPrice();
       this.service.updateStockOnDelete( quantity, pid).subscribe(
        (data)=>console.log(data),
        (error) => console.log(error)
       )
      },

      (error) => console.log(error)
    )
  }
  goToItems()
  {
    this.route.navigate(['/loginsuccess']);
  }

  ordercomplete()
  {
    this.route.navigate(['/order']);
  }

  download()
  {
    window.print();
  }

}
