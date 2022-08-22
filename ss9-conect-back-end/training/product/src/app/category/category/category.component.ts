import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    return this.categoryService.getAll().subscribe(next => {
      this.categories = next;
    }, error => {
      console.log(error);
    });
  }
}
