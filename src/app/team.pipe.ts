import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'team'
})
export class TeamPipe implements PipeTransform {


    transform(items: any[], filter: String): any {

      if(filter == undefined || filter == "*"){   return items;  }

      return items.filter(value =>value.studentTeamNumber == filter);
    }


}
