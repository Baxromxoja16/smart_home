import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export class CardList {
  @Input() viewMode: 'overview' | 'lights' = 'overview';
}
