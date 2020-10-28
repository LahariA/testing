import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

// import $ from 'jquery'

  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  lah = true;
  constructor(private formBuilder: FormBuilder,private tost :ToastrManager) { }

  ngOnInit() {
  //   $(document).ready(function(){
  //     $('.launch-modal').click(function(){
  //         $('#myModal').modal({
  //             backdrop: 'static'
  //         });
  //     });
  // });

    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
   
    //   // buttons: true,
    //   dangerMode: true,
     
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     swal("Poof! Your imaginary file has been deleted!", {
    //       icon: "success",
    //     });
    //   } else {
    //   this.lah = false
    //   }
    // });
      this.registerForm = this.formBuilder.group({
          title: [''],
          firstName: [''],
          lastName: [''],
          email: [''],
          password: [''],
          confirmPassword: [''],
          gender:[''],
          tog:[''],
          alemail:[''],
          lang:[''],
          acceptTerms: [false],
          mobile:['']
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }

      // display form values on success
      this.tost.successToastr('Registered Successfully.', 'Success!');
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}