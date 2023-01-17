import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { Product } from '../product';
import { RegisterationService } from '../registeration.service';
import { User } from '../user';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
products:Product[];
productName:String;
product:Product=new Product();
searchProductName : string = '';
quant:String='';
user:User=new User;
cart:Cart=new Cart();
id:number;
stockCount:Number;
stock:Product;
cartId:number;
price:number;
userId=localStorage.getItem("userData");
  constructor(private route:Router,private service:RegisterationService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.userId)
    this.getProducts();
    this.id=this.router.snapshot.params['id'];
    this.cartId=1;
    
   this.service.getUserById(Number(this.userId)).subscribe(
    (data) => 
    {
    this.user=data;
    console.log(data);
    console.log(this.user)
    }
    ,
    (error) => console.log(error)
   );
   
 

   
   
  }
logout()
{
  alert("Logged Out Successfully");
  this.route.navigate(['']);
}
getProducts()
{
  this.service.getAllProductsForCustomer().subscribe(
    data => {
      this.products=data;
    }
  );
}



Search(){

  if(this.productName==""){

    this.getProducts();

  }

  else{

    this.products=this.products?.filter(res=>{

        return res.productName?.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());

      })

    }

}


 




gotoCart(productId:number,quant:String,price:number,productName:String)
{
  console.log(productId);
  console.log(quant);
  console.log(price);
  this.cart.productId=productId;
  this.cart.quantity=Number(quant);
  this.cart.user=this.user;
  this.cart.price=price;
  this.cart.productName=productName;

 this.service.addToCart(this.cart).subscribe(
    
    (data)=> {
      console.log(data);

    
     
     this.service.updateStock( this.cart.quantity, this.cart.productId).subscribe(
      (data)=>console.log(data),
      (error) => console.log(error)
     )
    alert("Product With Product Id  :"+this.cart.productId+ "  Added Successfully");
    this.route.navigate(['/loginsuccess'])
  }
      ,
    (error)=>
    {console.log("error")
    alert("Product Is Not Available Right Now")
}
  )

  
 
}

view()
{
  this.route.navigate(['/view-cart'])
}




}
