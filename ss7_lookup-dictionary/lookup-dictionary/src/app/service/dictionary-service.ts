import {Injectable} from '@angular/core';
import {IWord} from "../models/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'friend', mean: 'bạn'},
    {word: 'dog', mean: 'chó'},
    {word: 'cat', mean: 'mèo'}]

  constructor() {
  }

  translate(): IWord[] {
    return this.words;
  }

  findWord(word: string): object {
    return this.words.filter(data => data.word === word);
  }
}
