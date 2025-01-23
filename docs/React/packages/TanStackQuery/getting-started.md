# TanStackQuery

- TanStackQuery is a powerful asynchronous state management for the following languages/frameworks:
  - Typescript
  - Javascript
  - React
  - Solid
  - Vue
  - Svelte
  - Angular
- TanStackQuery is declarative and automatic.
  - TanStackQuery handles caching, background updates, and stale data out of the box with zero configurations.
- TanStackQuery is simple and familiar.
  - If you can work with promises or async/await, you already know how to use TanStackQuery.
- TanStackQuery is extensible:
  - It is configured down to each observer instance with knobs and options to fit every use-case.

## Overview

- TanStackQuery makes fetching, caching, synchronizing, and updating the server state a breeze.

### Motivation

- React does not come with an opinionated way of fetching or updating data from your components, so developers are forced to make their own way.
- While traditional state management libraries are great for working with the client state, they are not great with working with async or server state. This is due to server states being completely different:
  - Is persisted remotely in a location you do not control or own.
  - Required asynchronous APIs for updating and fetching.
  - Implies shared ownership and can be changed by other people without your knowledge.
  - Can potentially become "out of date" with your application if you're not careful.
- Once the server state is grasped, more challenges arise:
  - Caching... (possibly the hardest thing to do in programming)
  - Deduping multiple requests for the same data into a single request
  - Updating "out of date" data in the background
  - Knowing when data is "out of date"
  - Reflecting updates to data as quickly as possible
  - Performance optimizations like pagination and lazy loading data
  - Managing memory and garbage collection of server state
  - Memorizing query results with structural sharing
- TanStackQuery works out of the box, with zero configuration needed.

### Code Example

See `examples/React/ReactQuery/basic-example`.

## Installation

#### NPM:

```bash
npm i @tanstack/react-query
```

#### PNPM

```bash
pnpm add @tanstack/react-query
```

#### Yarn

```bash
yarn add @tanstack/react-query
```

#### Bun

```bash
bun add @tanstack/react-query
```

#### CDN:

```html
<script type="module">
  import React from "https://esm.sh/react@18.2.0";
  import ReactDOM from "https://esm.sh/react-dom@18.2.0";
  import { QueryClient } from "https://esm.sh/@tanstack/react-query";
</script>
```

### Recommendations

- It is recommended to install the ESLint Plugin Query to help catch bugs and inconsistencies:

#### NPM:

```bash
npm i -D @tanstack/eslint-plugin-query
```

#### PNPM

```bash
pnpm add -D @tanstack/eslint-plugin-query
```

#### Yarn

```bash
yarn add -D @tanstack/eslint-plugin-query
```

#### Bun

```bash
bun add -D @tanstack/eslint-plugin-query
```

## Quick Start

- The following example shows the three core concepts of TanStackQuery:
  - Queries
  - Mutations
  - Query Invalidation

```typescript
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getTodos, postTodo } from "../my-api";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
```

## Devtools

- TanStackQuery comes with dedicated DevTools

### Installing the Dev Tools

#### NPM:

```bash
npm i -D @tanstack/react-query-devtools
```

#### PNPM

```bash
pnpm add -D @tanstack/react-query-devtools
```

#### Yarn

```bash
yarn add -D @tanstack/react-query-devtools
```

#### Bun

```bash
bun add -D @tanstack/react-query-devtools
```

- You can import the devtools using:

```typescript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
```

- By default, they are only loaded when `process.env.NODE_ENV === 'development'`

### Floating Mode

- Floating Mode will mount the devtools as a fixed, floating element in your app and provide a toggle in the corner of the screen.
- The toggle state is stored and loaded in localstorage.
- To enable, add this to the React app as close to the root as possible.

```ts
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### Embedded Mode

- Embedded move will show them as a fixed element in the application, so you use the panel in your own development tools.
- To enable, add this to the React app as close to the root as possible.

```ts
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <button onClick={() => setIsOpen(!isOpen)}>{`${
        isOpen ? "Close" : "Open"
      } the devtools panel`}</button>
      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
    </QueryClientProvider>
  );
}
```

### Devtools in Production

- Devtools are excluded in Production Builds. However, it may be beneficial to lazy load them.

```typescript
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Example } from "./Example";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default App;
```

- Calling `window.toggleDevtools()` will download the devtools bundle and show them.

## GraphQL

- Because TanStackQuery's fetching mechanism are built on Promises, you can use it with GraphQL!

## React Native

- Devtools do not work with React Native (Which is why MarketingCloud probably doesn't use it).
- Devtools only work with React DOM.
- TanStackQuery will work out-of-the-box with React Native.

### Online Status Management

- TanStackQuery supports auto refetch on reconnect in a web browser. To add the behavior, you need to use TanStackQuery `onlineManager`

```typescript
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});
```

or

```ts
import { onlineManager } from "@tanstack/react-query";
import * as Network from "expo-network";

onlineManager.setEventListener((setOnline) => {
  return Network.addNetworkStateListener((state) => {
    setOnline(state.isConnected);
  });
});
```

### Refetch on App Focus

- Instead of listeners, React native provides focus information through the `AppState` module.
- You can use the `AppState` "change" event to trigger an update when the app state changes to active.

```ts
import { useEffect } from "react";
import { AppState, Platform } from "react-native";
import type { AppStateStatus } from "react-native";
import { focusManager } from "@tanstack/react-query";

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener("change", onAppStateChange);

  return () => subscription.remove();
}, []);
```

### Refresh on Screen Focus

- In some situations, you may want to refetch the query when the screen is focused again.
- The following custom hook will call the refetch function once the screen is focused again.

```ts
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );
}
```

- The first refetch is skipped because the useFocusEffect calls the callback on mount in additional to screen focus.

### Disable Queries on Out Of Focus Screens

- If you don't want certain queries to remain "live" when the screen is out of focus, you can use the `subscribed` prop on useQuery.
- It allows you to control when a query stays subscribed to updates.

```ts
import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import { Text } from 'react-native'

function MyComponent() {
  const isFocused = useIsFocused()

  const { dataUpdatedAt } = useQuery({
    queryKey: ['key'],
    queryFn: () => fetch(...),
    subscribed: isFocused,
  })

  return <Text>DataUpdatedAt: {dataUpdatedAt}</Text>
}
```
