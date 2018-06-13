import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marks'
})
export class MarksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('Bal', value);

    if(value == null){
      return ;
    }
    if (value > 89){
      return 'A';
    }

    if (value > 81 && value < 90){
      return 'B';
    }

    if (value > 74 && value < 82){
      return 'C';
    }

    return 'FX';

  }

}
