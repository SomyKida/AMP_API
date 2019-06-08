import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pickerId'
})
export class Picker implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    console.log(args)
    return value;
  }

}
