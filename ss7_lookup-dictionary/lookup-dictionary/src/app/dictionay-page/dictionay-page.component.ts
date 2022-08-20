import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {IWord} from "../mudules/i-word";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  wordForm: IWord[] = []

  constructor(private dictionaryServiceService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.translate()
  }

  translate() {
    this.wordForm = this.dictionaryServiceService.translate();
  }
}
