import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", process.pid + "-" + Date.now());
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the completed Tri-County Tree Services home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.ok((response.headers.get("content-type") ?? "").startsWith("text/html"));
  const html = await response.text();
  assert.match(html, /Tri-County Tree Services/);
  assert.match(html, /integrity first/i);
  assert.match(html, /Certified Arborists/);
  assert.match(html, /Consultation request/);
  assert.match(html, /630 373 2554/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/);
});
