import { AppDeps, createApp } from '../app';
import { InjectOptions } from 'fastify';
import { testDb } from './testDb';

export async function createTestApp(deps: Partial<AppDeps> = {}) {
  const testApp = await createApp({
    db: deps.db ?? testDb,
  });

  return {
    inject: (opts: InjectOptions) => testApp.inject(opts),
  };
}
