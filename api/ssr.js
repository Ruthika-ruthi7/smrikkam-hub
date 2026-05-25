export const config = { runtime: 'edge' };

export default async function handler(request) {
  try {
    const mod = await import('../dist/server/index.js');
    const app = mod.default ?? mod;
    if (app && typeof app.fetch === 'function') {
      return await app.fetch(request);
    }
    if (typeof app === 'function') {
      return await app(request);
    }
    return new Response('SSR handler not found', { status: 500 });
  } catch (err) {
    console.error(err);
    return new Response('Server error', { status: 500 });
  }
}
