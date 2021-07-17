import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerService:RegisterService;
  constructor(registerService:RegisterService) {this.registerService=registerService}
  //constructor() { }
  ngOnInit(): void {
  }

  public getUsers():void{
    console.log("test");
    this.registerService.TestGet().subscribe((data)=>console.log(`get : ${data}`));
  }

}
