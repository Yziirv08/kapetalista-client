import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './takeorder.component.html',
  styleUrls: ['./takeorder.component.css']
})

export class TakeorderComponent implements OnInit {

  orders = [];
  showModal = false;
  showModalEdit = false;
  selectedOrder = null; 

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleEditModal(){
    this.showModalEdit = !this.showModalEdit;
    this.reactiveForm.reset();
    this.selectedOrder = null;
  }

  constructor(private dataService: DataService) { }

  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.dataService.getOrders().subscribe(data => {
      this.orders = data;
    });

    this.reactiveForm = new FormGroup({
      nickname: new FormControl(null),
      order: new FormControl(null),
      quantity: new FormControl(null),
      size: new FormControl(null),
      notes: new FormControl(null),
      amount: new FormControl(null),
    });
  }

  orderDone(id: number) {
    const orderID = id;
    this.dataService.doneOrder(orderID).subscribe(response => {
      alert("Order has been marked as served.");
      window.location.reload();
    })
  }

  showEdit(order: any) {
    this.showModalEdit = true;
    this.selectedOrder = order.orderID;

    this.reactiveForm.patchValue({
      nickname: order.nickname,
      order: order.order,
      quantity: order.quantity,
      size: order.size,
      notes: order.notes,
      amount: order.amount,
    });
  }

  editOrder() {
    const formData = this.reactiveForm.value;
    this.dataService.editOrder(this.selectedOrder, formData).subscribe(
      response => {
        alert("Order has been updated successfully");
        window.location.reload();
      },
      error => {
        console.error('Error updating order:', error);
      }
    );
    this.reactiveForm.reset();
    this.selectedOrder = null;
  }

  deleteOrder(id: number) {
    const orderID = id;
    this.dataService.deleteOrder(orderID).subscribe(response => {
      alert("Deleted Succesfully");
      window.location.reload();
    })
  }

  onSubmit() {
    const formData = this.reactiveForm.value;
    const allFieldsFilled = Object.values(formData).every(value => value !== null && value !== '');

    if (allFieldsFilled) {
      this.dataService.postOrders(formData).subscribe(
        response => {
          alert('Order Added!');
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
} 
