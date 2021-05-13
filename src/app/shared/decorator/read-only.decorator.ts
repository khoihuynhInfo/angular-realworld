export function readonly(
  targetClass: any,
  functionName: string,
  descripttor: any,
): any {
  descripttor.writable = false;

  return descripttor;
}
