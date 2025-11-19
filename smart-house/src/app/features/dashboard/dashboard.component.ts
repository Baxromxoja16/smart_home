import { Component } from '@angular/core';
import { CardList } from './components/card-list/card-list';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardList, TabsModule],
  template: `
    <p-tabs value="overview">
      <p-tablist>
        <p-tab value="overview">Overview</p-tab>
        <p-tab value="lights">Lights</p-tab>
      </p-tablist>
      <p-tabpanels>
        <p-tabpanel value="overview">
          <app-card-list viewMode="overview"></app-card-list>
        </p-tabpanel>
        <p-tabpanel value="lights">
          <app-card-list viewMode="lights"></app-card-list>
        </p-tabpanel>
      </p-tabpanels>
    </p-tabs>
  `,
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent { }
