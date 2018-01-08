import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dellaaPipe'
})
export class DellaaPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
