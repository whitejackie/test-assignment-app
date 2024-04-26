import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from "./modal/modal.component";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ModalComponent, NgIf, FormsModule]
})
export class AppComponent {
  unreversedArray: number[] = [];
  parsedArray: number[] = [];
  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }

  modalClosed(data: string | null) {
    if (data) {
      if (this.parsedArray.length) {
        this.parsedArray = [...this.parsedArray, ...this.parseInput(data)];
      } else {
        this.parsedArray = this.parseInput(data);
      }
      console.log("Parsed array: ", this.parsedArray);
      this.unreversedArray = [...this.parsedArray];
      this.reverseArray()
    }
    this.modalOpen = false;
  }

  reset() {
    this.parsedArray = [];
    this.unreversedArray = [];
  }

  reverseArray() {
    let leftIndex = 0;
    let rightIndex = this.parsedArray.length - 1;

    while (leftIndex < rightIndex) {
        // Swap elements at leftIndex and rightIndex
        const temp = this.parsedArray[leftIndex];
        this.parsedArray[leftIndex] = this.parsedArray[rightIndex];
        this.parsedArray[rightIndex] = temp;

        // Move indices towards the center
        leftIndex++;
        rightIndex--;
    }
    console.log("Reversed array: ", this.parsedArray)
  }

  parseInput(data: string): number[] {
    return data.split(',').map(item => parseInt(item.trim(), 10)).filter(item => !isNaN(item));
  }
}