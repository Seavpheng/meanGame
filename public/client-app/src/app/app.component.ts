import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';


  people: string[] = ["Phen", "Seav","Khame"];


  Students! : [{name : "Seavpheng", gpa : 56}, 
  {name : "Seavpheng 222", gpa : 100}, 
  {name : "Seavpheng 123", gpa : 100}, 
]

  onbtnClick(){
    this.title = "btton clicked";
  }


today :Date = new Date()

}



