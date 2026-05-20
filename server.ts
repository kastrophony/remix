import { router } from "./app/router.ts";

export default {
  fetch: router.fetch,
  // @ts-ignore - wtf deno...
  onListen({ port }) {
    console.log(`Server listening on http://localhost:${port}`);
  },
} satisfies Deno.ServeDefaultExport;
