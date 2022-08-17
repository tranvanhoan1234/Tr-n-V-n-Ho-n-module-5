import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-car',
  templateUrl: './name-car.component.html',
  styleUrls: ['./name-car.component.css']
})
export class NameCarComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}
