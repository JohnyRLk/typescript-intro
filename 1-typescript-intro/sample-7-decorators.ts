export function decorate(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  console.log(`Decorared function ${propertyKey}`);
}

class SomeImportantClass {
  @decorate
  importantFunction(text: string) {
    console.log("Log from sampleFunction: " + text);
  }
}
new SomeImportantClass().importantFunction("hello");
