import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from "../fireservice.service";
import { Users } from "../model/users";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private router: Router,public service :FireserviceService) { }
  count:any;
  i :number;
  day:any;
  minute:any;
  hour:any;
  second:any;
  intervalId = 0;
  message = '';
  items: Users[];

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() { 
    this.start(); 
    var now1 = (new Date());
    this.service.tryUsers().subscribe(
      result =>{
        //console.log(result);
        this.items=result;
        // this.items.forEach(element => {
        //   //if(element.dob>now1)
        //   //this.countDown(element.dob);
        //   exit;
          
        // });
        console.log(this.items);
      }
    
    )
  }

  ngOnDestroy() { this.clearTimer(); }
  start() {
    this.countDown(); 
  }

  
  
  public countDown() {
    //this.clearTimer();
    //Change the date accordingly
    
    //this.count=this.items[0].dob.getTime();
    
     
    // this.count=new Date('Aug 24, 2020 16:22:40').getTime();
    //this.count=new Date(date).toLocaleDateString("en-us");
    //console.log(this.count);
    
    
    let distance = 20; 
    this.intervalId = window.setInterval(() => {
      
       
      const seconds = 1000;
      const minutes =seconds*60;
      //console.log(this.count);
      //console.log(now);
      const hours=minutes*60;
      const days=hours*24;
      
      console.log(distance);
      
      // this.day=Math.floor(distance/(days));
      // this.hour=Math.floor((distance%(days))/(hours));
      // this.minute=Math.floor((distance%(hours))/(minutes));
      //this.second=Math.floor((distance%(minutes))/(seconds));
     
      if(distance>0){

        distance--;
        this.second=distance;
        // this.minute=Math.floor(distance/60);
        // this.second=Math.floor(distance/5);
      }else if(distance<=0){
       
           clearInterval(this.intervalId);
           this.message='Wohooooooooo its your Birthdayyyy'
         //It will be activated when its time
       }
    }, 1000);
  }
Compo(){
  //for div function
  if(this.second<=1){
    this.goTo();
    
    return true;
  }
  else {
  
  return false;
}
}
goTo(){
  this.router.navigate(['menu']);
}
  // CheckDate(date: number){
  //   var now = new Date().getTime();
  //   console.log(date)
  //   if(date == now){
      
  //     return true;
  //   }
  // }
}
