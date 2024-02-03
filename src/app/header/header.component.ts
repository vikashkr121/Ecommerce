import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType: string='default';
  sellerName:string=''
  constructor(private route:Router){}

  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        console.warn(val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("In seller area")
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller')
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }else{
          console.warn("Outside seller area")
          this.menuType='default';
        }
      }
    });
    }
    logout(){
      localStorage.removeItem('seller');
      this.route.navigate(['/'])
  }

}
