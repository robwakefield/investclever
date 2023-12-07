// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { NextRequest, NextResponse } from 'next/server';

if (typeof window !== 'undefined') {
  posthog.init("phc_oM4JyWhHRgC638FkxTQKBiDe2XiBnVJfu7qzi5EIVeO", {
    api_host: 'https://app.posthog.com',
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export function PostHogPageview(): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <></>;
}

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
