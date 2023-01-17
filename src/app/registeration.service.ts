import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  products: Product[];
  product:Product;
  
 
  constructor( private httpClient:HttpClient) {

   }

  public loginUserFromRemote(user:User):Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8081/user/login",user);
  }

  public registerUserFromRemote(user:User)
  {
    return this.httpClient.post<any>("http://localhost:8081/user/add",user);
  }

  public loginManagerFromRemote(user:User):Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8082/manager/managerlogin",user);
  }
  

  

  

  public registerManagerFromRemote(user:User)
  {
    return this.httpClient.post<any>("http://localhost:8082/manager/add",user);
  }

public getAllProductsForCustomer():Observable<any>
{
  return this.httpClient.get<any>("http://localhost:8081/user/getAllProducts");
}

public getAllProductsForManager():Observable<any>
{
  return this.httpClient.get<any>("http://localhost:8082/manager/getAllProducts");
}

public addProduct(product:Product):Observable<any>
{
  return this.httpClient.post("http://localhost:8082/manager/addProduct",product);
}

public updateProduct(id:number,product:Product):Observable<any>
{
  return this.httpClient.put("http://localhost:8082/manager/update/"+id,product);
}

public deleteProduct(id:number):Observable<any>
{
  return this.httpClient.delete("http://localhost:8082/manager/delete/"+id);
}

public getProductById(id:number):Observable<any>
{
  return this.httpClient.get<Product>("http://localhost:8082/manager/get/"+id);
}
 

public searchByName(searchProductName:string):Observable<any>{
  return this.httpClient.get<Product>("http://localhost:8083/product/search/"+searchProductName);
}

public getStockDetails(id:Number)
{
  return this.httpClient.get<any>("http://localhost:8083/product/stockcount/"+id);
}


public getUserById(id:number)
{
  return this.httpClient.get<User>("http://localhost:8081/user/get/"+id);
}

public addToCart(cart:Cart):Observable<any>
{
  
  return this.httpClient.post("http://localhost:8081/cart/addToCart",cart);
}

public getItemsByUserId(userId:number)
{
  return this.httpClient.get<any>("http://localhost:8081/cart/allitemsbyid/"+userId);
}


public calculateTotalPrice(userId:number)
{
  return this.httpClient.get<any>("http://localhost:8081/cart/totalprice/"+userId);
}

public deleteItem(cartId:Number):Observable<any>
{
  return this.httpClient.delete("http://localhost:8081/cart/deleteitem/"+cartId);
}


public updateStock(quantity:Number,pid:Number):Observable<any>
{
    return this.httpClient.get("http://localhost:8083/product/updatestock/"+quantity+"/"+pid);
}

public updateStockOnDelete(quantity:Number,pid:Number):Observable<any>
{
    return this.httpClient.get("http://localhost:8083/product/updatestockdelete/"+quantity+"/"+pid);
}


}
