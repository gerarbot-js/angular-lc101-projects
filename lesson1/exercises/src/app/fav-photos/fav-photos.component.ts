import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Inspiration';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://kids.kiddle.co/images/1/19/Batman_%28circa_2016%29.png';
  image3 = 'https://img.cinemablend.com/filter:scale/quill/d/2/f/8/6/b/d2f86bf4f8b02b0f542a1f3ffd2efabe09188f4c.jpg?mw=600';

  constructor() { }

  ngOnInit() {
  }

}