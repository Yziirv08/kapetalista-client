import { Component } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
  memberships = [];
  showModal = false;
  showModalEdit = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
