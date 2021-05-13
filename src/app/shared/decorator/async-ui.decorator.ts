import {
  EStatusApi,
  UIAsyncService
} from 'src/app/core/services/ui-async.service';

export function asyncUIWithStatus(): any {
  return  (
    target: any,
    propertyKey: string,
    descriptor: any,
  )  => {
    const source = descriptor.value;

    descriptor.value = function(...data: any) {
      const { uiAsyncService } = this;
      if (!uiAsyncService) {
        return;
      }

      const resultExcuteContext = source.call(
        this,
        ...data,
      );
      const vcr = data[0];
      const componentFillData = data[1];
      const uuiAsyncService = uiAsyncService as UIAsyncService;

      uuiAsyncService.loadingComponent(
        EStatusApi.Pending,
        vcr,
      );

      resultExcuteContext
        .then((res: any) => {
          const { body } = res;

          uuiAsyncService.loadingComponent(
            EStatusApi.Success,
            vcr,
            {
              componentFillData,
              data: body,
            },
          );
        }).catch((err: any) => {
          uuiAsyncService.loadingComponent(
            EStatusApi.Error,
            vcr,
          );
        });

      return;
    };

    return descriptor;
  };
}

