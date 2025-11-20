import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceItem } from '../../../../shared/models/interfaces';
import { ActiveHighlightDirective } from '../../../../shared/directives/active-highlight.directive';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, ActiveHighlightDirective],
  templateUrl: './device.html',
  styleUrls: ['./device.scss']
})
export class DeviceComponent {
  @Input() device!: DeviceItem;
}
