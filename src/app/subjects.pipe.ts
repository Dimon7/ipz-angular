import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subjects',
  pure: false
})
export class SubjectsPipe implements PipeTransform {

  transform(items: any[], filter: String): any {

    if(filter == undefined || filter == "*"){   return items;  }

    return items.filter(value =>value.subjectName == filter);
  }

}
