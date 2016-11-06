import { injectable } from 'inversify';
import 'reflect-metadata';
import { Service } from './Service';
import { ResolverCollection, IResolverService } from '../types';

@injectable()
export class ResolverService extends Service implements IResolverService {
  public build(): ResolverCollection {
    const values: ResolverCollection[] = this.values;
    return Object.assign({}, ...values);
  }
}
