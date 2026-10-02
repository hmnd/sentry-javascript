import type * as SentryCore from '@sentry/core';
import type * as SentryCoreServer from '@sentry/core/server';
import { describe, expectTypeOf, it } from 'vitest';
import type * as ServerSdk from '../../src/server';
import type * as WorkerSdk from '../../src/worker';

// Add a name here only if it must not be exported from the worker entry.
type IntentionallyNotInWorker = never;

type CoreExportName = keyof typeof SentryCore | keyof typeof SentryCoreServer;
type ServerCoreExportName = Extract<keyof typeof ServerSdk, CoreExportName>;
type MissingFromWorker = Exclude<ServerCoreExportName, keyof typeof WorkerSdk | IntentionallyNotInWorker>;

describe('worker entry point exports', () => {
  it('exports every @sentry/core API that the server entry point exports', () => {
    const missingFromWorker: Record<MissingFromWorker, never> = {};
    expectTypeOf(missingFromWorker).toEqualTypeOf<Record<never, never>>();
  });
});
