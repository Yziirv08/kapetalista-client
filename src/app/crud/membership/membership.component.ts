import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  memberships = [];
  showModal = false;
  showModalEdit = false;
  currentMembershipID = null;
  minDate: string; 


  toggleModal(){
    this.showModal = !this.showModal;
  }

  toggleEditModal(){
    this.showModalEdit = !this.showModalEdit;
    this.reactiveForm.reset();
    this.currentMembershipID = null;
  }

  constructor(private dataService: DataService) { }
  
  reactiveForm: FormGroup;
  ngOnInit(): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;

    this.dataService.getMembership().subscribe(data => {
      this.memberships = data;
    });

    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      contact: new FormControl(null),
      email: new FormControl(null),
      date: new FormControl(null)
    }); 
  }

  showEdit(membership: any) {
    this.showModalEdit = true;
    this.currentMembershipID = membership.membershipID;

    this.reactiveForm.patchValue({
      name: membership.name,
      contact: membership.contact,
      email: membership.email,
      date: membership.date
    });
  }

  deleteMembership(id: number) {
    const membershipID = id;
    this.dataService.deleteMembership(membershipID).subscribe(response => {
      alert("Deleted Succesfully");
      window.location.reload();
    })
  }

  onSubmit() {
    const formData = this.reactiveForm.value;
    const allFieldsFilled = Object.values(formData).every(value => value !== null && value !== '');
    
    if(!formData.email.includes("@")){
      alert('Please use valid email address');
      return;
    }

    if (allFieldsFilled) {
      this.dataService.postMembership(formData).subscribe(
        response => {
          alert('Membership Added!');
          window.location.reload();
        },
        error => {
          console.error('Error submitting order:', error);
        }
      );
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }

  submitEditMembership(){
    const formData = this.reactiveForm.value;
    if(!formData.email.includes("@")){
      alert('Please use valid email address');
      return
    }
    
    this.dataService.editMembership(this.currentMembershipID, formData).subscribe(
      response => {
        alert("Membership has been updated successfully");
        window.location.reload();
      },
      error => {
        console.error('Error updating membership:', error);
      }
    );
    this.reactiveForm.reset();
  }
  
}
