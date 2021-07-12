export function logAction(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    let functionName = propertyKey;

    await console.log(
      `+++ [Page] ${target.constructor.name} [action] ${functionName} [args] ${args}`
    );

    const result = await originalMethod.apply(this, args);

    return result;
  };

  return descriptor;
}

class AnotherImportantClass {
  @logAction
  sampleFunction(text: string) {
    console.log("Log from sampleFunction: " + text);
  }
}

new AnotherImportantClass().sampleFunction("hello");
