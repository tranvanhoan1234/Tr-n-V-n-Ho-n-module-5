import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm:FormGroup;
  constructor(private productService:ProductService) {
    this.productForm=new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      price:new FormControl(),
      description:new FormControl(),
    })
  }

  ngOnInit(): void {
  }
submit() : void{
const product=this.productForm.value;
this.productService.saveProduct(product);
this.productForm.reset();
}
}
