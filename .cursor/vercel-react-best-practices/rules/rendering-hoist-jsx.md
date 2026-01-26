---
title: Hoist Static JSX Elements
impact: LOW
impactDescription: avoids re-creation
tags: rendering, jsx, static, optimization
---

## Hoist Static JSX Elements

Extract static JSX outside components to avoid re-creation.

**Incorrect (recreates JSX element every render):**

```tsx
function Container({ loading }: { loading: boolean }) {
  // JSX element is recreated on every render
  const loadingSkeleton = <div className="animate-pulse h-20 bg-gray-200" />;

  return <div>{loading && loadingSkeleton}</div>;
}
```

**Correct (hoists JSX outside component to reuse same element):**

```tsx
// Hoisted to module scope - created once, reused across renders
const loadingSkeleton = <div className="animate-pulse h-20 bg-gray-200" />;

function Container({ loading }: { loading: boolean }) {
  return <div>{loading && loadingSkeleton}</div>;
}
```

This is especially helpful for large and static SVG nodes, which can be expensive to recreate on every render.

**Note:** If your project has [React Compiler](https://react.dev/learn/react-compiler) enabled, the compiler automatically hoists static JSX elements and optimizes component re-renders, making manual hoisting unnecessary.
