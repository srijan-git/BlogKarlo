import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  // isShown: boolean = false;
  updateForm: FormGroup;
  data: any;
  updateData: any;
  message: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private activerouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.auth.getSingleData(id).subscribe((res) => {
      this.data = res.userData;
      this.updateForm = this.fb.group({
        UserID: this.data._id,
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        photoURL: this.data.photoURL,
        email: this.data.email,
        bio: this.data.bio,
        interests: this.data.interests,
        hobbies: this.data.hobbies,
      })
    })
  }
  // onFileChange(event: Event) {
  //   const evntfile = (event.target as HTMLInputElement).files.length
  //   if (evntfile > 0) {
  //     this.file = (event.target as HTMLInputElement).files[0];
  //     this.updateForm.get('photoURL').setValue(this.file, { emitModelToViewChange: false });
  //   }
  // }

  UpdateData() {
    this.message = "Updating Profile...";
    const formData = new FormData()
    formData.append('UserID', this.updateForm.get('UserID').value);
    formData.append('firstname', this.updateForm.get('firstname').value);
    formData.append('lastname', this.updateForm.get('lastname').value);
    // formData.append('photoURL', this.updateForm.get('photoURL').value);
    formData.append('bio', this.updateForm.get('bio').value);
    formData.append('interests', this.updateForm.get('interests').value);
    formData.append('hobbies', this.updateForm.get('hobbies').value);

    this.auth.updateData(formData).subscribe((res) => {
      if (res) {
        this.message = "Profile Updated Successfully.";
      }
      window.location.reload()
    })
  }

  // changeConfirmation() {
  //   this.isShown != this.isShown;
  // }


}
