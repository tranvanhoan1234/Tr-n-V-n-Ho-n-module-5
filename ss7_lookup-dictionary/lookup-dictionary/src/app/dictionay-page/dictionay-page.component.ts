import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary-service";
import {IWord} from "../models/i-word";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  wordForm: IWord[] = []

  constructor(private dictionaryServiceService: DictionaryService) {
  }

  ngOnInit(): void {
    this.translate()
  }

  translate() : any {
    this.wordForm = this.dictionaryServiceService.translate();
  }
}
