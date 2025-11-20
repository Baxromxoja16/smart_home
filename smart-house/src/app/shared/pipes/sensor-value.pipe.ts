import { Pipe, PipeTransform } from '@angular/core';
import { SensorValue } from '../models/interfaces';

@Pipe({
    name: 'sensorValue',
    standalone: true
})
export class SensorValuePipe implements PipeTransform {
    transform(value: SensorValue): string {
        if (!value) {
            return '';
        }
        return `${value.amount} ${value.unit}`;
    }
}
