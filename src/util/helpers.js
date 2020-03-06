// Here are some simple helper functions to get you started.
// These will make it simpler to get environment variables or
// check the environment within your components or elsewhere.

export const getEnvVar = name => process.env[name];

export const getEnv = () => getEnvVar('NODE_ENV');
export const isEnv = env => env === getEnv();

export const isDevEnv = isEnv('development');
export const isTestEnv = isEnv('test');
export const isProdEnv = isEnv('production');
