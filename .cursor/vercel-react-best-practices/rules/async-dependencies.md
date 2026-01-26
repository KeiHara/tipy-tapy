---
title: Dependency-Based Parallelization
impact: CRITICAL
impactDescription: 2-10× improvement
tags: async, parallelization, dependencies
---

## Dependency-Based Parallelization

For operations with partial dependencies, start independent fetches immediately and await them at the point of use.

**Incorrect (profile waits for config unnecessarily):**

```typescript
const [user, config] = await Promise.all([fetchUser(), fetchConfig()]);
const profile = await fetchProfile(user.id);
```

**Correct (start all independent operations immediately):**

```typescript
// Start independent fetches immediately (no await yet)
const userPromise = fetchUser();
const configPromise = fetchConfig();

// Await user when needed for dependent operation
const user = await userPromise;

// Profile depends on user, but config can resolve in parallel
const [config, profile] = await Promise.all([configPromise, fetchProfile(user.id)]);
```

**For more complex dependency graphs**, consider libraries like `p-all` or `p-map` for controlled concurrency:

```typescript
import pAll from "p-all";

const results = await pAll([() => fetchUser(), () => fetchConfig()], { concurrency: 2 });
```

Reference: [p-all on npm](https://www.npmjs.com/package/p-all)
