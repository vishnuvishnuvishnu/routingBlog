import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log("value",value)
    return value * 200;
  }

}
