import {
  Component,
  ComponentFactoryResolver,
  Injectable, ViewContainerRef,
} from '@angular/core';

export enum EStatusApi {
  Pending,
  Success,
  Error,
}
@Injectable({ providedIn: 'root' })
export class UIAsyncService {

  constructor(
    private cfr: ComponentFactoryResolver,
  ) {}

  async loadingComponent(
    statusAPI: EStatusApi,
    vcr?: ViewContainerRef,
    succesParams?: {
      componentFillData: any,
      data: any,
    },
  ): Promise<any> {

    const { LoaderComponent } =
      await import('../../shared/common/loader/loader.component');
    const { LostInternetComponent } =
      await import('../../shared/common/lost-internet/lost-internet.component');


    const { TestCompleteComponent } =
      await import('../../shared/common/test-complete/test-complete.component.test');

    if (!vcr) {
      return;
    }
    vcr.clear();

    let component;

    const {
      componentFillData,
      data,
    } = succesParams || {};

    switch (statusAPI) {
      case EStatusApi.Pending:
        component = LoaderComponent;
        break;
      case EStatusApi.Success:
        if (succesParams) {
          component = componentFillData
          ? componentFillData
          : TestCompleteComponent;
        }
        break;
      default:
        component = LostInternetComponent;
        break;
    }

    const componentRef = vcr.createComponent<any>(
      this.cfr.resolveComponentFactory(component),
    );

    if (componentRef.componentType === componentFillData) {
      componentRef.instance.articleListData = data;
    }

    return componentRef;
  }

}

