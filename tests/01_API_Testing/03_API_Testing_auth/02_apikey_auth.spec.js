import { test, expect } from '@playwright/test';
import { apiKeyHeader } from '../../../utils/apikey';

test.describe('API Key Authentication with Postman Echo', () => {

  const BASE_URL = process.env.ECHO_BASE_URL;
  const HEADER_NAME = process.env.API_KEY_HEADER;

    // ---------- Positive Case: API Key in Header ----------
    test('[API Key Auth - Header] Postman Echo with API key in header', async ({ request }) => {
        
        // 1) Build headers containing the API key (env or explicit)
    const headers = apiKeyHeader({ extra: { Accept: 'application/json' } });

    // 2) Send request
    const res = await request.get(`${BASE_URL}/get`, { headers });

    // 3) Validate success
    expect(res.ok()).toBeTruthy();
    const body = await res.json();

    // Postman Echo echoes incoming headers
    const echoedKey = body.headers?.[HEADER_NAME];
    expect(echoedKey, `Expected header ${HEADER_NAME} to be echoed`).toBe(process.env.API_KEY);
    expect(body.url).toContain('/get');

    });

}); 