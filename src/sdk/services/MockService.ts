import { injectable } from 'inversify';
import 'reflect-metadata';
import { Service } from './Service';
import { IMockService, MockCollection } from '../types';

@injectable()
export class MockService extends Service implements IMockService {
  public build(): MockCollection {
    const values: MockCollection[] = this.values;
    return Object.assign({}, ...values);
  }
}
