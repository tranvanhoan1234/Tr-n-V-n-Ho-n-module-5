import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveCategory(product).subscribe(() => {
      console.log(product);
      this.productForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
