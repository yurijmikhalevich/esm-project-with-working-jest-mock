import { jest } from '@jest/globals';

const originalMockModule = jest.mockModule.bind(jest);
jest.mockModule = modulePath => {
  originalMockModule(modulePath, () => {
    const modulePathSplit = modulePath.split('/');
    modulePathSplit.splice(modulePathSplit.length - 1, 0, '__mocks__');
    return import(modulePathSplit.join('/')); // module factory can return a Promise
  });
};
