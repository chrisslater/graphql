import { injectable } from 'inversify';
import 'reflect-metadata';
import { Service } from './Service';
import { ResolverStore, IResolverService } from '../typings';

@injectable()
export class ResolverService extends Service implements IResolverService {
  public build(): ResolverStore {
    return Object.assign({}, ...this.values);
  }
}
