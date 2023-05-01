import { Component, OnInit } from '@angular/core';
import { GetterService } from 'src/app/services/getter/getter.service';



@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  providers : [GetterService]
})
export class InvestComponent implements OnInit{
  posts : any;
  constructor(private service: GetterService){}
  ngOnInit(): void {
    this.service.getCardInfo().subscribe((response) => {
      this.posts = response ;
    })

  }
 public  addPost(post):void {
  this.posts.push(post);

 }


}
