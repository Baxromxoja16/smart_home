import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceItem } from '../../../../shared/models/interfaces';
import { ActiveHighlightDirective } from '../../../../shared/directives/active-highlight.directive';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, ActiveHighlightDirective, FormsModule, ToggleSwitchModule],
  templateUrl: './device.html',
  styleUrls: ['./device.scss']
})
export class DeviceComponent {
  @Input() device!: DeviceItem;

  toggleState() {
    this.device.state = !this.device.state;
  }
}
