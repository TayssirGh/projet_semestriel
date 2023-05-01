import { Component } from '@angular/core';
import { CreateService } from 'src/app/services/create/create.service';

@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrls: ['./form-startup.component.scss'],
  providers : [CreateService]
})
export class FormStartupComponent {
  constructor(private service: CreateService){}
  createStartup(startup:{name: String ,description :String ,industry:String, imageUrl:String }){
    this.service.createStartup(startup).subscribe(( response )=> {
    console.log(response);
     }),
     ( error )=> { console.log(error);}



     }














}
