import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { Heading, Text } from "@/components/ui";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="bg-bg-primary text-text-primary flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <Heading as="h1" variant="hero" className="mb-4">
            404
          </Heading>
          <Heading as="h2" variant="section-lg" className="mb-4">
            Page not found
          </Heading>
          <Text className="mb-10 max-w-md opacity-70">
            The page you are looking for doesn&apos;t exist or has been moved.
          </Text>
          <Link
            href="/"
            className="bg-purple-primary hover:bg-purple-accent inline-flex items-center gap-4 rounded-xl px-10 py-[1.875rem] text-base font-bold uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to homepage
            <ArrowRight className="h-2 w-2" />
          </Link>
        </main>
      </body>
    </html>
  );
}
