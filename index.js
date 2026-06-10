export default {
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }
    console.log(`serving ${new URL(request.url).pathname}`);
    return new Response(
      `Hello from Korve! This app runs scale-to-zero.\nHost: ${url.hostname}\nTime: ${new Date().toISOString()}\n`,
      { headers: { "content-type": "text/plain" } },
    );
  },
};
