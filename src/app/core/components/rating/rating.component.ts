import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  @Input() selectedValue: number;
  @Output() starEmit = new EventEmitter<number>();

  constructor() {
  }

  countStar(star): void {
    this.selectedValue = star;
    this.starEmit.emit(star);
  }

}
