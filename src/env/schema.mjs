import { z } from 'zod';

export const serverSchema = z.object({
  NYT_API_KEY: z.string(),
  NYT_ENDPOINT: z.string(),
});

export const clientSchema = z.object({});

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */

export const clientEnv = {};
