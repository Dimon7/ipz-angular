import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacher'
})
export class TeacherPipe implements PipeTransform {

  transform(items: any[], filter: String): any {

    if(filter == undefined || filter == "*"){   return items;  }

    return items.filter(value =>value.teacherUserName == filter);
  }

}
