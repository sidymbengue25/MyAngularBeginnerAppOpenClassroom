import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }
  @Input() postItem;
  ngOnInit() {
  }
}
