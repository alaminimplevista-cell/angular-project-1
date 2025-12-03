import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  adminForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    address:new FormGroup({
      street: new FormControl(''),
      district: new FormControl(''),
      division: new FormControl(''),
      country:new FormControl('')
    })
  })
  onSubmit(){
    console.log("Form Value: ",this.adminForm.value)
  }
  // title = new FormControl<string|null>('')
  // description = new FormControl<string|null>('')



}
