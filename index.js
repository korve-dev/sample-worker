export default {
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }
    return new Response(
      `Hello from a Korve preview! This app runs scale-to-zero.\nHost: ${url.hostname}\nTime: ${new Date().toISOString()}\n`,
      { headers: { "content-type": "text/plain" } },
    );
  },
};
