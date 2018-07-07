import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }
  @Input() postsList;
  ngOnInit() {
  }

}
