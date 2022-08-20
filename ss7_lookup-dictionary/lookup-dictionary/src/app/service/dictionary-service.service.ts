import {Injectable} from '@angular/core';
import {IWord} from "../mudules/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: IWord[] = [
    {word: 'friend', mean: 'bạn'},
    {word: 'dog', mean: 'chó'},
    {word: 'cat', mean: 'mèo'}]
  constructor() {
  }
  translate(){
    return this.words;
  }
  findWord(word: string) {
    return this.words.filter(data => data.word === word);
  }
}
