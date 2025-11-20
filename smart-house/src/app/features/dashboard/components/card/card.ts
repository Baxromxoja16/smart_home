import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCard, isDevice } from '../../../../shared/models/interfaces';
import { DeviceComponent } from '../device/device';
import { SensorComponent } from '../sensor/sensor';
import { ActiveHighlightDirective } from '../../../../shared/directives/active-highlight.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, DeviceComponent, SensorComponent, ActiveHighlightDirective],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  @Input() card!: DashboardCard;

  isDevice = isDevice;

  get hasActiveDevices(): boolean {
    return this.card.items.some(item => isDevice(item) && item.state);
  }
}
