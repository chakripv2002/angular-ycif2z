import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cnt-list',
  templateUrl: './grid-cnt-list.component.html',
  styleUrls: ['./grid-cnt-list.component.css']
})
export class GridCntListComponent implements OnInit {
gridCntList = [{"name":"item1"},{"name":"item2"},{"name":"item3"},{"name":"item4"},{"name":"item5"},{"name":"item6"},{"name":"item7"},{"name":"item8"},{"name":"item9"},{"name":"item10"}]
  constructor() { }

  ngOnInit() {
    return this.gridCntList;
  }

}