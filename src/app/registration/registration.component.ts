import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { FireserviceService } from '../fireservice.service';
import { Users } from '../model/Users';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  imgSrc = "/assets/images/previewimage.png";
  selectedImage: any = null;
  isSubmitted: boolean;
  items: Users[];
  constructor(private storage: AngularFireStorage, private service: FireserviceService, private router: Router, private activatedRoute: ActivatedRoute) {
    
  }
  formTemplate = new FormGroup({
    about: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/images/previewimage.png';
      this.selectedImage = null;
    }
  }
  get formControls() {
    return this.formTemplate['controls'];
  }
  onSubmit(formValue) {
    this.isSubmitted = true;

    if (this.formTemplate.valid) {
      
      var filePath = 'Profile/' + formValue.fname + '/' + formValue.fname + 'profile';
            const fileRef = this.storage.ref(filePath);

            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
              finalize(() => {
                fileRef.getDownloadURL().subscribe((url => {
                  formValue['imageUrl'] = url;
                  this.service.registerUser(formValue, url);
                  alert("SuccessFully Registered :)");
                  this.router.navigateByUrl('/menu');
                  this.resetForm();
                }))
              })).subscribe();

    }

  }

  resetForm() {
    this.formTemplate.reset();
    
    this.formTemplate.setValue({
      imageUrl: '',
      about: '',
      fname: '',
      lname:'',
      dob:''

    })
    this.imgSrc = "/assets/images/previewimage.png";
    this.isSubmitted = false;
    this.selectedImage = null;
  }
  btnClick= function () {
    this.router.navigateByUrl('/menu');
};
}



