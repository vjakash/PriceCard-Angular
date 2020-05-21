import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smallTask';
  common={
    higlight:"Unlimited",
    period:"/month",
    
  }
  arr=[{
    tier:"free",
    price:"0$",
    list:["Single User","5GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects",
    "Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
  },
  {
    tier:"Plus",
    price:"$9",
    list:["5 User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects",
    "Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
  },
  {
    tier:"Pro",
    price:"$49",
    list:["Unlimited User","150Gb Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects",
    "Dedicated Phone Support","Unlimited Free Subdomain","Monthly Status Reports"]
  }];
}
