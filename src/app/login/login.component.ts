import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  cpassword:string;

  firstNameValid:boolean;
  lastNameValid:boolean;
  emailValid:boolean;
  passwordValid:boolean;
  cpasswordValid:boolean;
  isFormValid:boolean;

  constructor(private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
  }

  LoadRoute():void {
    this.activeRoute.params.subscribe(params => {
      this.router.navigate(["/headerdummy"]);
    });
  }

  checkForm():void {
    
    this.isFormValid = (          //Double check validation
      this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() && 
      this.validatePW() &&
      this.validateCPW()                   
    ) ? true : false;
    
    if(this.isFormValid) {
      alert('Signed up!');
      this.LoadRoute();
    }
  }
 
  updateValid() {
    this.isFormValid = (
      this.firstNameValid &&
      this.lastNameValid &&
      this.emailValid && 
      this.passwordValid &&
      this.cpasswordValid                 
    ) ? true : false;
  }

  private validateFirstName():boolean {
    var firstName = this.firstName;
    this.firstNameValid = (!isNullOrUndefined(firstName) && firstName !== "") ? true : false;  
    
    this.updateValid();
    return this.firstNameValid;
  }

  private validateLastName():boolean {
    var lastName = this.lastName;
    this.lastNameValid = (!isNullOrUndefined(lastName) && lastName !== "") ? true : false; 
    
    this.updateValid();
    return this.lastNameValid;
  }

  private validateEmail():boolean {
    var email=this.email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.emailValid = re.test(String(email).toLowerCase()); 
    
    this.updateValid();
    return this.emailValid;
  }

  private validatePW():boolean {
    var password=this.password;
    this.passwordValid = (!isNullOrUndefined(password) && password !== "") ? true : false;

    this.updateValid();
    return this.passwordValid
  }

  private validateCPW():boolean {
    var password=this.password;
    var cpassword = this.cpassword;
    this.cpasswordValid = (password === cpassword) ? true : false;
    
    this.updateValid();
    return this.cpasswordValid
  }

  private alertCPW() {
    if (this.cpasswordValid==false) {
        alert("Confirm Password does not match");
    }
  }

}
