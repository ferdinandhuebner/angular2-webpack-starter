// src/app/services/languagesService.spec.ts
import {describe, it, expect, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {LanguagesService} from './languageService';

// src/app/services/languagesService.spec.ts
describe('Service: LanguagesService', () => {
  let service;

  beforeEachProviders(() => [
    LanguagesService
  ]);

  beforeEach(inject([LanguagesService], s => {
    service = s;
  }));

  xit('should return available languages', () => {
    expect(true).toBe(false); //will fail
  });

  it('should return available languages', inject([LanguagesService], (service) => {
    let languages = service.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  }));

});
