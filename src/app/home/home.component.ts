import {Component, OnInit} from '@angular/core';
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter: number = 0;


  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    const counter: number | null = this.storageService.load("counter");

    this.counter = counter ? counter : 0;
  }

  add(number: number) {
    this.counter += number;
    this.storageService.save("counter", this.counter);
  }
}
