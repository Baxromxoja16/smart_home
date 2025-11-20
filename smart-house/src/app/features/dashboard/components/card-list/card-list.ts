import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card';
import { DashboardCard, DashboardTab } from '../../../../shared/models/interfaces';
import { MOCK_DATA } from '../../../../shared/models/mock-data';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.scss']
})
export class CardListComponent implements OnChanges {
  @Input() viewMode: string = 'overview';

  cards: DashboardCard[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['viewMode']) {
      this.updateCards();
    }
  }

  private updateCards() {
    const tab = MOCK_DATA.tabs.find(t => t.id === this.viewMode);
    this.cards = tab ? tab.cards : [];
  }
}
