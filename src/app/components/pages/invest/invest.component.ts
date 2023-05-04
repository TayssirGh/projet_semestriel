import { Component, OnInit } from '@angular/core';
import { GetterService } from 'src/app/services/getter/getter.service';

import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  providers : [GetterService]
})
export class InvestComponent implements OnInit{
  posts : any;
  constructor(private service: GetterService, private dialogRef: MatDialog){}
  ngOnInit(): void {
    this.service.getCardInfo().subscribe((response) => {
      this.posts = response ;
    })

  }
 public  addPost(post):void {
  this.posts.push(post);

 }
 openDialog(){
  this.dialogRef.open(PopupComponent);
 }


}
