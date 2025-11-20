import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardCard, isDevice, DeviceItem } from '../../../../shared/models/interfaces';
import { DeviceComponent } from '../device/device';
import { SensorComponent } from '../sensor/sensor';
import { ActiveHighlightDirective } from '../../../../shared/directives/active-highlight.directive';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, DeviceComponent, SensorComponent, ActiveHighlightDirective, ToggleSwitchModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  @Input() card!: DashboardCard;

  isDevice = isDevice;

  get hasActiveDevices(): boolean {
    return this.card.items.some(item => isDevice(item) && item.state);
  }

  get showGroupToggle(): boolean {
    const devices = this.card.items.filter(isDevice);
    return devices.length >= 2;
  }

  get groupState(): boolean {
    return this.hasActiveDevices;
  }

  set groupState(value: boolean) {
    this.toggleGroup(value);
  }

  toggleGroup(state: boolean) {
    this.card.items.forEach(item => {
      if (isDevice(item)) {
        (item as DeviceItem).state = state;
      }
    });
  }
}
