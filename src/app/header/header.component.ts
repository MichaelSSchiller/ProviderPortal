import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  userName:string;
  password:string;

  constructor(private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   
  }
 
  LoadRoute():void {
    this.activeRoute.params.subscribe(params => {
      this.router.navigate(["/headerdummy"]);
    });
  }

  Submit() {
    var userNameValidate = (!isNullOrUndefined(this.userName)) && (this.userName !== "") ? true : false;
    var passwordValidate = (!isNullOrUndefined(this.password)) && (this.password !== "") ? true : false;
    
    if (!userNameValidate) {
      alert("Please enter a user name");
    } else if (!passwordValidate) {
      alert("Please enter a password");
    } else if (userNameValidate && passwordValidate ) {
      $('#submit').attr("data-dismiss","modal");
      alert("Logged in sucssefully");
      this.LoadRoute();
    } 
  }
}
