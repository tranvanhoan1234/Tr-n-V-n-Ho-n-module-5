import {Component, OnInit} from '@angular/core';
import {any} from "codelyzer/util/function";
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color1 = 0;
  color2 = 0;
  color3 = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  colorPicker1(value: any) {
    this.color1 = value
  }

  colorPicker2(value: any) {
    this.color2 = value
  }

  colorPicker3(value: any) {
    this.color3 = value
  }
}
