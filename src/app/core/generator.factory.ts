import { InjectionToken } from '@angular/core';

import { GeneratorService } from './services/generator';

export const generatedString5 = new InjectionToken<string>('generatedString5');

export function GeneratorFactory(n: number): any {
    return (data: GeneratorService): string => data.generate(n);
}
