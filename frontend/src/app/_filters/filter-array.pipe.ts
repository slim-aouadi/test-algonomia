import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(eventList: any, searchValue: string): any {
    if (!eventList) {
      return null;
    }
    if (!eventList && !searchValue) {
      return eventList;
    }
    searchValue = searchValue.toString().toLowerCase();
    return eventList.filter((data: any) => {
      return data.name.toLowerCase().includes(searchValue);
    });
  }
}
