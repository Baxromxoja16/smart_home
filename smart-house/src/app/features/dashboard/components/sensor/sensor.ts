import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorItem } from '../../../../shared/models/interfaces';
import { SensorValuePipe } from '../../../../shared/pipes/sensor-value.pipe';

@Component({
  selector: 'app-sensor',
  standalone: true,
  imports: [CommonModule, SensorValuePipe],
  templateUrl: './sensor.html',
  styleUrls: ['./sensor.scss']
})
export class SensorComponent {
  @Input() sensor!: SensorItem;
}
