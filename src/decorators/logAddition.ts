
export function LogAddition(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`Adding item...`);
      originalMethod.apply(this, args);
    }
  }