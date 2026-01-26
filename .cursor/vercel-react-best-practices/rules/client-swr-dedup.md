---
title: Use Data Fetching Libraries for Automatic Deduplication
impact: MEDIUM-HIGH
impactDescription: automatic deduplication
tags: client, tanstack-query, swr, deduplication, data-fetching
---

## Use Data Fetching Libraries for Automatic Deduplication

Data fetching libraries like TanStack Query or SWR enable request deduplication, caching, and revalidation across component instances.

> **Project Note:** This project uses **TanStack Query** (not SWR). Place query hooks in `src/hooks/query` and mutation hooks in `src/hooks/mutation`.

**Incorrect (no deduplication, each instance fetches):**

```tsx
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);
}
```

**Correct with TanStack Query (this project's approach):**

```tsx
import { useQuery } from "@tanstack/react-query";

function UserList() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((r) => r.json()),
  });
}
```

**For mutations with TanStack Query:**

```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

function UpdateButton() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
  return <button onClick={() => mutate()}>Update</button>;
}
```

**Alternative with SWR (if your project uses it):**

```tsx
import useSWR from "swr";

function UserList() {
  const { data: users } = useSWR("/api/users", fetcher);
}
```

Reference: [https://tanstack.com/query](https://tanstack.com/query) | [https://swr.vercel.app](https://swr.vercel.app)
