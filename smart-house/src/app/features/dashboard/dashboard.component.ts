import { Component } from '@angular/core';
import { CardList } from './components/card-list/card-list';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardList, TabsModule],
  template: `
    <p-tabs>
      <p-tablist header="Overview">
        <app-card-list [viewMode]="'overview'"></app-card-list>
      </p-tablist>
      <p-tablist header="Lights">
        <app-card-list [viewMode]="'lights'"></app-card-list>
      </p-tablist>
    </p-tabs>
  `,
})
export class DashboardComponent {}
