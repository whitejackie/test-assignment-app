import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  open: boolean = true;
  input: string = '';
  @Output() closeModal: EventEmitter<string | null> = new EventEmitter<string | null>();

  ok() {
    console.log(this.input)
    this.closeModal.emit(this.input);
    this.open = false;
  }

  close() {
    this.closeModal.emit(null);
    this.open = false;
  }
}
