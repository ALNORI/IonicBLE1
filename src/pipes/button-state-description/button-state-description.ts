import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonStateDescription',
})
export class ButtonStateDescriptionPipe implements PipeTransform {
  /**
   * Translate the button state into a description
   */
  transform(buttonState: number, ...args) {

    let description;

    // TODO get code from SensorTag for multiple buttons
    if (buttonState === 0) {
      description = 'Released';
    } else if (buttonState === 1) {
      description = 'NOT pressed';
    } else {
      description = 'Button State is Unknown';
    }

    return description;
  }
}
