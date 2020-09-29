import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FireserviceService } from '../fireservice.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { Users } from '../model/Users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imgSrc = "/assets/images/previewimage.png";
  selectedImage: any = null;
  isSubmitted: boolean;
  bdayname: String;
  items: Users[];
  images: Array<any>;
  currentRouter = this.router.url;
  constructor(private storage: AngularFireStorage, private service: FireserviceService, private router: Router, private activatedRoute: ActivatedRoute) {
    
   }
  formTemplate = new FormGroup({
    wishes: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    from: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.LoadImages();

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
  onSubmit(formValue) {
    this.isSubmitted = true;
    this.LoadImages();

    if (this.formTemplate.valid) {
      this.service.tryUsers().subscribe(
        result => {

          this.items = result;
          this.items.forEach(element => {

            this.bdayname = element.fname;
            console.log(this.bdayname);

            console.log(this.bdayname);
            var filePath = 'BirthdayPics/' + this.bdayname + '/' + formValue.from + '_' + new Date().getTime() + '';
            const fileRef = this.storage.ref(filePath);

            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
              finalize(() => {
                fileRef.getDownloadURL().subscribe((url => {
                  formValue['imageUrl'] = url;
                  this.service.createUser(formValue, url, this.bdayname);
                  this.resetForm();
                }))
              })).subscribe();

          });

        })

    }

  }
  get formControls() {
    return this.formTemplate['controls'];
  }
  resetForm() {
    this.formTemplate.reset();
    this.bdayname = '';
    this.formTemplate.setValue({
      imageUrl: '',
      wishes: '',
      from: ''

    })
    this.imgSrc = "/assets/images/previewimage.png";
    this.isSubmitted = false;
    this.selectedImage = null;
    this.LoadImages();
  }
  LoadImages() {
    this.service.tryUsers().subscribe(
      result => {

        this.items = result;
        this.items.forEach(element => {

          this.bdayname = element.fname;
          this.service.getImages(this.bdayname).then(result => {
            this.images = result;
            console.log(this.images);
          })
        });
      })

  }
  reLoad() {
    this.router.navigate([this.currentRouter])
  }
}
