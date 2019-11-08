import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromnow'
})
export class FromnowPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
