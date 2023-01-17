import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { RegisterationService } from '../registeration.service';
@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  id:number;
  product:Product=new Product();
  constructor(private router:Router,private service:RegisterationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe(data=>
      {
        this.product=data;
      },
      error=> console.log(error)
      );
    
  }


  goToProductList()
  {
    this.router.navigate(['/success']);
  }
  onSubmit()
  {
   this.service.updateProduct(this.id,this.product).subscribe(data =>
    {
      alert("Updated Product Successfully");
      this.goToProductList();
    },
    error => console.log(error));
  }

}
