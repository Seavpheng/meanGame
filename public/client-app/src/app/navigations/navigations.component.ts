import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.css']
})
export class NavigationsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    
  }

  onHomeClick(){
    this._router.navigate(['']);
  }
  onGameClick(){
    this._router.navigate(['games']);
  }

  onRegisterClick(){
    this._router.navigate(['register']);
  }
}
