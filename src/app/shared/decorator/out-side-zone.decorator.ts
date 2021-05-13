import { NgZone } from '@angular/core';

export function OutsideZone(
  targetClass: any,
  functionName: string,
  descripttor: any,
): any {
  const source = descripttor.value;

  descripttor.value = function(...data: any) {
    if (!this.ngZone) {
      throw new Error(`Class with 'OutsideZone' decorator
        should have 'ngZone' class property with 'NgZone' class.`);
    }

    return this.ngZone.runOutsideAngular(() => source.call(
      this,
      ...data,
    ));
  };

  return descripttor;
}
