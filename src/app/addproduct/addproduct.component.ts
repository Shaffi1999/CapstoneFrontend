import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 product:Product=new Product();
  constructor(private service:RegisterationService,private router:Router) { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.service.addProduct(this.product).subscribe(data => 
      {
        console.log(data);
        alert("Product Added Succesfully");
        this.goToProductList();
      },
     (error) => console.log(error));
      
  }

  goToProductList()
  {
    this.router.navigate(['/success']);
  }
  onSubmit()
  {
    console.log(this.product);
    this.saveProduct();
  }

}
