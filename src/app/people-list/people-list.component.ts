import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
peopleList = [{"name":"person1"},{"name":"person2"},{"name":"person3"},{"name":"person4"},{"name":"person5"},{"name":"person6"},{"name":"person7"},{"name":"person8"},{"name":"person9"},{"name":"person10"}]
  constructor() { }

  ngOnInit() {
    return this.peopleList;
  }

}