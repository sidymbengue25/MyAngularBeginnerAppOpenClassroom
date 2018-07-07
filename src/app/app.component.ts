import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts=[
  {
    title:'Mon premier post',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repellendus eum deleniti asperiores assumenda voluptatem harum ea dolore recusandae aliquam commodi distinctio, consequatur. Earum, impedit exercitationem rem cumque tempora aut. ',
    loveIts:0,
    created_at: new Date()
  },
  {
    title:'Mon deuxiéme post',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repellendus eum deleniti asperiores assumenda voluptatem harum ea dolore recusandae aliquam commodi distinctio, consequatur. Earum, impedit exercitationem rem cumque tempora aut. ',
    loveIts:0,
    created_at: new Date()
  },
  {
    title:'Encore un post',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repellendus eum deleniti asperiores assumenda voluptatem harum ea dolore recusandae aliquam commodi distinctio, consequatur. Earum, impedit exercitationem rem cumque tempora aut. ',
    loveIts:0,
    created_at: new Date()
  }
  ]
}
