import {Component, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  article: Article = {};
  articles: Article [] = [{
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'

  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
