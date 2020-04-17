import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { startWith, map } from "rxjs/operators";

//Autocomplete
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   //Autocomplete
   myControl = new FormControl();
   options: string[] = ['Johor','Kedah', 'Kelantan', 'Kuala Lumpur',
   'Melaka', 'Negeri Sembilan', 'Penang', 
   'Perlis', 'Perak', 'Pahang','Selangor', 
   'Sabah', 'Sarawak','Terengganu'];
   filteredOptions: Observable<string[]>;
 
   private _filter(value: string): string[] {
     const filterValue = value.toLowerCase();
 
     return this.options.filter(option => option.toLowerCase().includes(filterValue));
   }

  constructor(private _formBuilder: FormBuilder) {  }

  //password
  hide = true;

  //Stepper
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  //Stepper
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);


  //Form Field
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter username';
    }

    return this.email.hasError('name') ? 'Not a valid name' : '';
  }

  ngOnInit() {
    //Stepper
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      email: ['', Validators.email]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required, Validators.minLength(8), 
      Validators.pattern('[a-zA-Z/\d/]~!@#$%^&*()-=_+'),]
    });
    
    //AutoComplete
    this.filteredOptions = this.myControl.valueChanges
       .pipe(
         startWith(''),
         map(value => this._filter(value))
       ); 
  }

  
}
