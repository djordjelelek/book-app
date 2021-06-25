import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotes',
})
export class QuotesPipe implements PipeTransform {
  transform(quote: String): String {
    return `"${quote}"`;
  }
}
