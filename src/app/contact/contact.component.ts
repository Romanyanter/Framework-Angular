import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  soler1: boolean = true;
  soler2: boolean = true;
  soler3: boolean = true;
  soler4: boolean = true;
  write() {
    this.soler1 = false;
  }
  write2() {
    this.soler2 = false;
  }
  write3() {
    this.soler3 = false;
  }
  write4() {
    this.soler4 = false;
  }
  
}

