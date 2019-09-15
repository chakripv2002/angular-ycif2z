import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
items = [{"name":"name1"},{"name":"name2"},{"name":"name3"},{"name":"name4"},{"name":"name5"},{"name":"name6"},{"name":"name7"},{"name":"name8"},{"name":"name9"},{"name":"name10"}];
  constructor() { }

  ngOnInit() {
    return this.items;
  }

}