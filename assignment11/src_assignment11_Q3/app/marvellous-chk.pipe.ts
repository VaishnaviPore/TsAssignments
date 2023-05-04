import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let no: number = 0
    let message: string = ""
    if (args[0] == 'Even') {
      if(value % 2 == 0)
        return "It is Even number"
      return "It is not Even number"
    }
    if (args[0] == 'Odd') {
      if(value % 2 != 0)
        return "It is Odd number"
      return "It is not Odd number"
    }
    if (args[0] == 'Perfect') {
      let temp: number = 0
      for (let i = 2; i < value; i++) {
        if (value % i === 0){
          temp = temp + i
        }
        if(temp == value && temp != 0)
          return "It is Perfect number"
        return "It is not Perfect number"
      }
    }

    if (args[0] == 'Prime') {
      for (let i = 2; i < value; i++) {
        if (value % i === 0)
          return "It is not Prime number"
        return "It is Prime number"
      }
    }

  }
}