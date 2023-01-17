import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RegisterationService } from '../registeration.service';
import  {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-managersuccess',
  templateUrl: './managersuccess.component.html',
  styleUrls: ['./managersuccess.component.css']
})
export class ManagersuccessComponent implements OnInit {
  products:Product[];
  product : Product=new Product();
  productName:String;
searchProductName : string = '';
  constructor(private router:Router,private service:RegisterationService) { }

  ngOnInit(): void {
   this.getProducts();
   
  }
  private getProducts()
  {
    this.service.getAllProductsForManager().subscribe(data => 
      {
        this.products=data;
      })
  }


  gotoAddProduct()
  {
    this.router.navigate(['/add']);
  }

  logout()
  {
    this.router.navigate(['']);
  }
  
  // gotoUpdate()
  // {
  //   this.router.navigate(['/update-product/:id']);
  // }

  gotoUpdateEmployee(id:number)
  {
    this.router.navigate(['update-product',id]);
  }

  gotoDelete(id:number)
  {
    this.service.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getProducts();
    });
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

}
