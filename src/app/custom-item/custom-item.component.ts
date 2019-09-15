import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.css']
})
export class CustomItemComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit() {
  }

}