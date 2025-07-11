import { Router } from '@angular/router';
import { Example } from './../@services/example';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fifth',
  imports: [FormsModule],
  templateUrl: './fifth.html',
  styleUrl: './fifth.scss'
})
export class Fifth {
name:string="";
number:string="";
email!:string;
age!:string;
constructor(private example:Example,private router:Router){}

nextPage(name:string,number:string,email:string,age:string){
this.example.name=name;
this.example.number=number;
this.example.email=email;
this.example.age=age;
this.router.navigate(['/ninth'])

}
}

