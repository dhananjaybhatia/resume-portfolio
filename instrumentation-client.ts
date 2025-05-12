"use client";


import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2cd76dc1768aa7340392bcd44a0ac666@o4509302051504128.ingest.us.sentry.io/4509302055305216",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],

  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
