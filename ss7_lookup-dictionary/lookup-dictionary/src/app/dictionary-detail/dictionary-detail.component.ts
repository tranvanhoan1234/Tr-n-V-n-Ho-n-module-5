import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DictionaryService} from "../service/dictionary-service";
import {IWord} from "../models/i-word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IWord = {word: "", mean: ""};

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe({
      next: (data) => {
        this.dictionary = this.dictionaryService.findWord(data.get('word'))[0];
      }
    })
  }

  ngOnInit(): void {
  }

}
