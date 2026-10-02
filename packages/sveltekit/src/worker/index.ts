// For use in cloudflare workers and other edge environments
//
// These are essentially the same as the node server exports, but using imports from @sentry/core
// instead of @sentry/node.
//
// This is expected to be used together with something like the @sentry/cloudflare package, to initialize Sentry
// in the worker.
//
// -------------------------
// SvelteKit SDK exports:
export { handleErrorWithSentry } from '../server-common/handleError';
export { wrapLoadWithSentry, wrapServerLoadWithSentry } from '../server-common/load';
export { sentryHandle } from '../server-common/handle';
export { initCloudflareSentryHandle } from './cloudflare';
export { wrapServerRouteWithSentry } from '../server-common/serverRoute';

// Re-export some functions from Cloudflare SDK
export {
  addBreadcrumb,
  addEventProcessor,
  addIntegration,
  captureCheckIn,
  captureConsoleIntegration,
  captureEvent,
  captureException,
  captureFeedback,
  captureMessage,
  close,
  consoleIntegration,
  consoleLoggingIntegration,
  continueTrace,
  createConsolaReporter,
  createTransport,
  dedupeIntegration,
  eventFiltersIntegration,
  extraErrorDataIntegration,
  flush,
  functionToStringIntegration,
  getActiveSpan,
  getClient,
  getCurrentScope,
  getDefaultIntegrations,
  getGlobalScope,
  getIsolationScope,
  getRootSpan,
  getSpanDescendants,
  getSpanStatusFromHttpCode,
  getTraceData,
  getTraceMetaTags,
  growthbookIntegration,
  isInitialized,
  isEnabled,
  lastEventId,
  linkedErrorsIntegration,
  logger,
  metrics,
  requestDataIntegration,
  rewriteFramesIntegration,
  Scope,
  SDK_VERSION,
  SEMANTIC_ATTRIBUTE_SENTRY_OP,
  SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
  SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
  setContext,
  setConversationId,
  setCurrentClient,
  setExtra,
  setExtras,
  setHttpStatus,
  setMeasurement,
  setTag,
  setTags,
  setAttribute,
  setAttributes,
  setUser,
  spanStreamingIntegration,
  spanToBaggageHeader,
  spanToStaticSpanJSON,
  spanToJSON,
  spanToTraceHeader,
  startInactiveSpan,
  startNewTrace,
  bindScopeToEmitter,
  suppressTracing,
  startSpan,
  startSpanManual,
  trpcMiddleware,
  updateSpanName,
  withActiveSpan,
  withIsolationScope,
  withMonitor,
  withScope,
  withStaticSpan,
  // oxlint-disable-next-line typescript/no-deprecated
  withStreamedSpan,
  wrapMcpServerWithSentry,
  supabaseIntegration,
  instrumentSupabaseClient,
  instrumentOpenAiClient,
  instrumentAnthropicAiClient,
  instrumentGoogleGenAIClient,
  zodErrorsIntegration,
  featureFlagsIntegration,
  vercelAIIntegration,
  type FeatureFlagsIntegration,
} from '@sentry/cloudflare';

export {
  captureSession,
  endSession,
  httpHeadersToSpanAttributes,
  parameterize,
  profiler,
  startSession,
  winterCGHeadersToDict,
} from '@sentry/core';

/**
 * Tracks the Svelte component's initialization and mounting operation as well as
 * updates and records them as spans. These spans are only recorded on the client-side.
 * Sever-side, during SSR, this function will not record any spans.
 */
export function trackComponent(_options?: unknown): void {
  // no-op on the server side
}
