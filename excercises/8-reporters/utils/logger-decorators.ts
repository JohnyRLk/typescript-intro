
import { ElementFinder } from "protractor";

import {logger} from "./logger"

export function logThisMethod(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method


    descriptor.value = async function(...args: any[]) {    
        let functionName = propertyKey;
        let methodArguments = args.map(arg=>{
            return arg instanceof ElementFinder ? arg.locator() : arg;
        }).join(', ')

        // (argument instanceof ElementFinder? argument.locator() : argument)
        // pre
        logger.debug(`###      [executing action] ${functionName} (${methodArguments})`)

        // run original annotated method and store result
        const result = await originalMethod.apply(this, args);

        // return the result of the original method 
        return result;
    };

    return descriptor;
}

export function logPageAction(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method


    descriptor.value = async function(...args: any[]) {    
        let functionName = propertyKey;
        // pre
        logger.debug(`+++ [Page] ${target.constructor.name} [action] ${functionName}`)

        // run original annotated method and store result
        const result = await originalMethod.apply(this, args);

        return result;
    };

    return descriptor;
}