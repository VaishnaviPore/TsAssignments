import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let Temp : string = ""
    value = value.split("")
    for (let i = 0; i< value.length/2; i++){
      Temp = value[i];  
      value[i] = value[value.length - i - 1];  
      value[value.length - i - 1] = Temp;  
    }
    value = value.join("")
    return value;
  }

}
