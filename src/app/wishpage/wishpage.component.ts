import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from "../fireservice.service";
import { Users } from "../model/users";
@Component({
  selector: 'app-wishpage',
  templateUrl: './wishpage.component.html',
  styleUrls: ['./wishpage.component.css']
})
export class WishpageComponent implements OnInit {

  constructor(private router: Router,public service :FireserviceService) { }
  items: Users[];
  ngOnInit(): void {
    this.service.tryUsers().subscribe(
      result =>{
        
        this.items=result;
        
        console.log(this.items);
      }
    )
  }
}
