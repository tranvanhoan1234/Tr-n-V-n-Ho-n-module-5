import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  productList: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productList = this.productService.findById(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(this.productList.id),
        name: new FormControl(this.productList.name),
        price: new FormControl(this.productList.price),
        description: new FormControl(this.productList.description),
      });
    }, error => {
    });
  }

  ngOnInit() {
  }

  edit() :void{
    const product = this.productForm.value;
    this.productForm.reset();
    this.productService.editProduct(this.id, product);
    this.router.navigateByUrl('/product/list');
  }
}
