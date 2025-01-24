# TanStackQuery Guides and Concepts

## Important Defaults

- Out of box, TanStack Query is configured with aggressive but sane defaults.
- The following is good to keep in mind when debugging/learning.
  - Query instances via `useQuery` or `useInfiniteQuery` by default consider cached data as stale.
    - To change, you con configure globally or per query using the `staleTime` option.
  - Stale queries are re-fetched automatically in the background when
    - New instances of the query mount
    - The window is refocused.
    - The network is reconnected.
    - The query is optionally configured with a refresh interval.
    - To change, you can use the following options:
      - `refetchOnMount`
      - `refetchOnWindowFocus`
      - `refetchOnReconnect`
      - `refetchInterval`
  - Query results have that have no more active instances of `useQuery`, `useInfiniteQuery`, or query observers are labeled as "inactive" and remain in the cache in case they are used again at a later time.
  - By default, "inactive" queries are garbage collected after 5 minutes.
    - To change, you can alter `gcTime` for something other than 1000 _ 60 _ 5 milliseconds.
  - Queries that fail are silently retried 3 times with exponential backoff delay before being captured an sent to the UI.
    - To change: you can alter `retry` and `retryDelay` options for queries to something other than the defaults.
  - Query results by default are structurally shared to detect if data has actually changed and if not, the data reference remains unchanged to better help with value stabilization with regards to useMemo and useCallback.
    - 99.9% of the time, this isn't an issue.

## Queries

### Query Basics

- A query is a declarative dependency on an asynchronous source of data that is tied to a unique key.
- Queries can be used with any promise based method (including GET and POST api calls) to fetch data from a server. If the method modifies the data, it is recommended to use Mutations instead.
- To subscribe to a query in a component or custom hook, use the `useQuery` hook with at least,
  - A unique key for the query
  - A function that returns a promise that:
    - Resolves the data, or
    - Throws an error.

```tsx
import { useQuery } from "@tanstack/react-query";

function App() {
  const info = useQuery({ queryKey: ["todos"], queryFn: fetchTodoList });
}
```

- The unique key provided is used internally for refetching, caching, and sharing queries through the application.
- The query result returned by `useQuery` contains all the information about the query that is needed for templating or any other data usage.

```tsx
const result = useQuery({ queryKey: ["todos"], queryFn: fetchTodoList });
```

- The result object contains a few different states:
  - `isPending` or `status == 'pending'` - The query has no data yet.
  - `isError` or `status == 'error'` - The query encountered an error.
  - `isSuccess` or `status == 'success'` - The query was successful and data is available.
- Beyond the states, more information is available depending on the states:
  - `error` - If the query errored, the error is available on the `error` property.
  - `data` - If the query is successful, the data is available on the `data` property.
  - `isFetching` - In any state, if the query is fetching at any time (including background refetching) `isFetching` will be true.
- For most queries, it is usually sufficient to check for the `isPending` state, then the `isError` state, then finally assume that the data is available and render the successful state.

```tsx
function Todos() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

- or, if you don't prefer booleans

```tsx
function Todos() {
  const { status, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  // also status === 'success', but "else" logic works, too
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

#### Fetch Status

- In addition to the status field, you will also get an additional `fetchStatus` property with the following options
  - `fetchStatus == 'pending'` - The query is currently fetching.
  - `fetchStatus == 'pausing'` - The query wanted to fetch, but is paused. (See Network Mode)
  - `fetchStatus == 'idle'` - The query isn't doing anything.

#### Why two different states?

- Background re-fetches and stale-while-revalidate logic make all combinations for status and fetchStatus possible.
- A query can be in a `pending` state without fetching any data. Keep in mind:
  - The `status` gives information about the data (Is there any?)
  - The `fetchStatus` gives information about the `queryFn` (Is it running?)

## Query Keys

- At its core, TanStack query manages query caching based on the several query keys.
- At the top level they are an array, but can be as simple as an Array with a single string and as complex as an array of many strings and other nested objects.
- As long as the query key is serializable and unique, it can be used!

### Simple Query Keys

- The simplest form of a key is an array with constant values, which is useful for
  - Generic List/Index resources
  - Non-Hierarchical resources

```tsx
// A list of todos
useQuery({ queryKey: ['todos'], ... })

// Something else, whatever!
useQuery({ queryKey: ['something', 'special'], ... })
```

### Array Key with Variables

- When a query needs to describe its data, you can use an array with a string and any serializable objects to describe it.
- This is useful for
  - Hierarchical or nested resources
    - It is common to pass an id, index, or other primitive to uniquely identify the item.
  - Queries with additional parameters/
    - It is common to pass an object of additional options.

```tsx
// An individual todo
useQuery({ queryKey: ['todo', 5], ... })

// An individual todo in a "preview" format
useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

// A list of todos that are "done"
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```

### Query Keys are hashed deterministically!!!

- No matter the order of keys in objects, the following queries are considered equally.

```tsx
useQuery({ queryKey: ['todos', { status, page }], ... })
useQuery({ queryKey: ['todos', { page, status }], ...})
useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```

- The following query keys are not equal, since array order matters.

```tsx
useQuery({ queryKey: ['todos', status, page], ... })
useQuery({ queryKey: ['todos', page, status], ...})
useQuery({ queryKey: ['todos', undefined, page, status], ...})
```

### If your query function depends on variables, include it in your query key.

- Since query keys described the data they are fetching, they should include any variations in your query function that change.

```tsx
function Todos({ todoId }) {
  const result = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => fetchTodoById(todoId),
  });
}
```

- Query Keys act as dependencies for your function.
- Adding dependent variables to your query key will ensure that queries are cached independently, and are re-fetched automatically anytime a variable changes.

## Query Functions

- A query function is any function that returns a promise. That promise should either resolve the data or throw an error.
- The following are all valid query configurations:

```tsx
useQuery({ queryKey: ["todos"], queryFn: fetchAllTodos });
useQuery({ queryKey: ["todos", todoId], queryFn: () => fetchTodoById(todoId) });
useQuery({
  queryKey: ["todos", todoId],
  queryFn: async () => {
    const data = await fetchTodoById(todoId);
    return data;
  },
});
useQuery({
  queryKey: ["todos", todoId],
  queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
});
```

#### Handling and Throwing Errors

- For TanStack query to determine a query errored, the query function must throw or return a rejected Promise.
- Any error that is thrown in the query function will be persisted in the error state of the query.

```tsx
const { error } = useQuery({
  queryKey: ["todos", todoId],
  queryFn: async () => {
    if (somethingGoesWrong) {
      throw new Error("Oh no!");
    }
    if (somethingElseGoesWrong) {
      return Promise.reject(new Error("Oh no!"));
    }

    return data;
  },
});
```

#### Using With `fetch` and other clients that do not throw by default.

- With most utilities like `axios` and `graphql-request` automatically throw errors for unsuccessful HTTP calls, some utilities like `fetch` don't. In that case, throw them on your own.

```tsx
useQuery({
  queryKey: ["todos", todoId],
  queryFn: async () => {
    const response = await fetch("/todos/" + todoId);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});
```

#### Query Function Variables

- Query keys are passed into your query function as part of the QueryFunctionContext.
- With not always needed, it makes it possible to extract your query functions if needed:

```
function Todos({ status, page }) {
  const result = useQuery({
    queryKey: ['todos', { status, page }],
    queryFn: fetchTodoList,
  })
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey
  return new Promise()
}
```

#### QueryFunctionContext

- The QueryFunctionContext is the object passed to every query function. It consists of
  - `queryKey: QueryKey` - Query Keys
  - `signal?: Abort Signal
    - [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
  - `meta: Record<string, unknown> | undefined`
    - An optional field that you can fill in additional information about your query.
- Infinite Queries get some additional information passed:
  - `pageParam: tPageParam`
    - The page parameter used to fetch the current page.

## Query Options

- One of the best ways to share `queryKey` and `queryFn` between multiple places is to use the `queryOptions` helper.
- At runtime, the helper just returns whatever you pass info it.

```tsx
import { queryOptions } from "@tanstack/react-query";

function groupOptions(id: number) {
  return queryOptions({
    queryKey: ["groups", id],
    queryFn: () => fetchGroups(id),
    staleTime: 5 * 1000,
  });
}

// usage:

useQuery(groupOptions(1));
useSuspenseQuery(groupOptions(5));
useQueries({
  queries: [groupOptions(1), groupOptions(2)],
});
queryClient.prefetchQuery(groupOptions(23));
queryClient.setQueryData(groupOptions(42).queryKey, newGroups);
```

- For infinite queries, a separate `infiniteQueryOptions` helper is available.
- You can still override some options at a component level. A very common and useful pattern is to create per-component `select` functions.

```tsx
// Type inference still works, so query.data will be the return type of select instead of queryFn

const query = useQuery({
  ...groupOptions(1),
  select: (data) => data.groupName,
});
```

## Network Mode

- There are three different network modes to distinguish how Queries and Mutations should behave if there is no network connection.
- They can be set for each individually or globally.
- The default network mode is `online`.

### Network Mode: online (Default)

- In this mode, queries and mutations will now fire unless you have a network connection.
- If a fetch is initiated, it was always stay in the state it is in if the fetch cannot be made because there is no network connection.
- A `fetchStatus` is exposed additionally. It is either:
  - `fetching` - The `queryFn` is really exciting - a request is in-flight.
  - `paused` - The query is not executing - it is `paused` until you have a connection again.
  - `idle` - The query is not fetching and not paused.
- The flags `isFetching` and `isPaused` are derived from this state and exposed for convenience.
- If you are online and then go offline while the fetch is occurring, the retry mechanism will be paused. It will resume once you regain internet connection.
- If the query was cancelled, it will not resume once internet connection is established.

#### Network Mode: always

- TanStack Query will always ignore the online/offline state. This is better for an environment where you don't need internet connection for the queries to work.
- Queries will never be paused if there is no internet connection
- Retries will not be paused
- `refetchOnConnect` defaults to false in this mode.

#### Network Mode: offlineFirst

- This is the middle ground between the three modes.
- The query will be run once, but all retires will be paused.

## Parallel Queries

Parallel Queries
: Queries that are executed in parallel, or at the same time to maximize fetching concurrency.

### Manual Parallel Queries

- When the number of parallel queries does not change, there is no extra effort needed. Just use any number of `useQuery` or `useInfiniteQuery` hooks side-by-side!

```tsx
function App () {
  // The following queries will execute in parallel
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const teamsQuery = useQuery({ queryKey: ['teams'], queryFn: fetchTeams })
  const projectsQuery = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })
  ...
}
```

- This does not work in suspense mode!

### Dynamic Parallel Queries use `useQueries`

- If the number of queries changes depending on the render, you can use the `useQueries` hook.
- `useQueries` accepts an options object with a query key where the value is an array of query objects. It returns the array of query results.

```tsx
function App({ users }) {
  const userQueries = useQueries({
    queries: users.map((user) => {
      return {
        queryKey: ["user", user.id],
        queryFn: () => fetchUserById(user.id),
      };
    }),
  });
}
```

## Dependent Queries

- Dependent (or Serial) queries depend on the previous ones before they can execute.
- To do this, you can use the `enabled` option to tell a query when it is ready to run.

```tsx
// Get the user
const { data: user } = useQuery({
  queryKey: ["user", email],
  queryFn: getUserByEmail,
});

const userId = user?.id;

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ["projects", userId],
  queryFn: getProjectsByUser,
  // The query will not execute until the userId exists
  enabled: !!userId,
});
```

### `useQueries` dependent Query

- `useQueries` can depend on a previous Query as well:

```tsx
// Get the users ids
const { data: userIds } = useQuery({
  queryKey: ["users"],
  queryFn: getUsersData,
  select: (users) => users.map((user) => user.id),
});

// Then get the users messages
const usersMessages = useQueries({
  queries: userIds
    ? userIds.map((id) => {
        return {
          queryKey: ["messages", id],
          queryFn: () => getMessagesByUsers(id),
        };
      })
    : [], // if users is undefined, an empty array will be returned
});
```

### A note about performance:

- Dependent queries produce a request waterfall, which can hurt performance. It is best to flatten the waterfall if possible.

## Background Fetching Indicators

- A query's `status === 'pending'` is enough to show the hard-loading state for the query.
- Sometimes, you may want to show an additional indicator that the query if refetching in the background.
- You can do this with the `isFetching` boolean, regardless of the status variable.

```tsx
function Todos() {
  const {
    status,
    data: todos,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return status === "pending" ? (
    <span>Loading...</span>
  ) : status === "error" ? (
    <span>Error: {error.message}</span>
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <div>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </>
  );
}
```

### Displaying the Global Background Fetching Loading State

- You can configure a global loading indicator when any queries are fetching (including in the background).
- You use the `useIsFetching` hook.

```tsx
import { useIsFetching } from "@tanstack/react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}
```

## Window Focus Refetching

- If a user leaves your application and the data goes stale, TanStack Query automatically refreshes the data when the user returns.
- This can be disabled globally by doing:

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

- This can be disabled per query by doing:

```tsx
useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
  refetchOnWindowFocus: false,
});
```

### Custom Window Focus Event
- In rare circumstances, you may want to manage your own window focus events that trigger TanStackQuery to revalidate.
- The `focusManager.setEventListener` is provided tht allows you to add a callback that should be fired when a window is focused. 
- The following is the default handler:
```tsx
focusManager.setEventListener((handleFocus) => {
  // Listen to visibility change
  if (typeof window !== 'undefined' && window.addEventListener) {
    const visibilityChangeHandler = () => {
      handleFocus(document.visibilityState === 'visible')
    }
    window.addEventListener('visibilityChange', visibilityChangeHandler, false)
    return () => {
      // Be sure to unsubscribe if a new handler is set
      window.removeEventListener('visibilityChange', visibilityChangeHandler)
    }
  }
})
```

### Managing Focus in React Native
- Instead of event listeners on window, React Native provides focus information in the `AppState` module. 
- You can use the `AppState` "change" event to trigger an update when the app state changes back to active.
```tsx
import { AppState } from 'react-native'
import { focusManager } from '@tanstack/react-query'

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener('change', onAppStateChange)

  return () => subscription.remove()
}, [])
```

### Managing Focus State
```tsx
import { focusManager } from '@tanstack/react-query'

// Override the default focus state
focusManager.setFocused(true)

// Fallback to the default focus check
focusManager.setFocused(undefined)
```

## Disabling and Pausing Queries
- If you ever want to disable a query from running automatically, you can use the `enabled = false` option. 
- The enabled option can also take a callback as an option.
- When enabled is false:
  - If the query has cached data, then the query will be initialized in the `status === 'success'` or `isSuccess` state.
  - If the query does not have cached data, then the query will start in the `status === 'pending'` and `fetchStatus === 'idle'` state.
  - The query will not automatically fetch on mount.
  - The query will not automatically refetch in the background.
  - The query will ignore query client `invalidateQueries` and `refetchQueries` calls that would normally result in the query refetching.
  - `refetch` returned from `useQuery` can be used to manually trigger the query to fetch. However, it will not work with `skipToken`.
```tsx
function Todos() {
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
    enabled: false,
  })

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {data ? (
        <>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : (
        <span>Not ready ...</span>
      )}

      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>
  )
}
```

### Lazy Queries
- The enabled option can be used to permanently disable a query, but it can also enable / disable it at a later time.
- An example of this would be when you want form to fire off the first request when the user enters a filter value.
```tsx
function Todos() {
  const [filter, setFilter] = React.useState('')

  const { data } = useQuery({
    queryKey: ['todos', filter],
    queryFn: () => fetchTodos(filter),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
  })

  return (
    <div>
      // 🚀 applying the filter will enable and execute the query
      <FiltersForm onApply={setFilter} />
      {data && <TodosTable data={data} />}
    </div>
  )
}
```

### isLoading (Previously: `isInitialLoading`)
- Lazy queries will have `status: 'pending'` right from the start because there is no data yet. This means that you cannot use this flag to show a loading spinner.
- If you are disabling or using lazy queries, you can use the `isLoading` flag instead. 
- The `isLoading` flag is derived from `isPending && isFetching`

## Query Retries
- When a `useQuery` fails and throws an error, the query will be automatically retried if it has not reached the maximum number of consecutive retries.
- You can configure retries on a global or individual query level.
  - Setting `retry = false` disables retries.
  - Setting `retry = 6` will retry six times before showing the final error thrown by the function.
  - Setting `retry = true` will infinitely retry failing requests.
  - Setting `retry = (failureCount, error) => ...` allows for custom logic.
```tsx
import { useQuery } from '@tanstack/react-query'

// Make a specific query retry a certain number of times
const result = useQuery({
  queryKey: ['todos', 1],
  queryFn: fetchTodoListPage,
  retry: 10, // Will retry failed requests 10 times before displaying an error
})
```

### Retry Delay
- By default, retries in TanStack Query do not happen immediately after a request fails. 
- The default `retryDelay` is set to double each attempt (starting at `1000`ms), but doesn't exceed 30 seconds.
```tsx
// Configure for all queries
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
})

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}
```

## Paginated / Lagged Queries
- Paginated data works by including the page information in the query key.
```tsx
const result = useQuery({
  queryKey: ['projects', page],
  queryFn: fetchProjects,
})
```
- If this example is run, you'll notice that the UI jumps in and out.
- To get around this, TanStack query uses something called PlaceHolder Data.

### Better Paginated Queries with `placeholderData`
- By setting `placeholderData` to `(previousData) => previousData` or `keepPreviousData` function exported from TanStack Query, you can do a few new things.
  - The data from the last fetch will still be available while the new data is being fetched, even though the query key is changed.
  - When the new data arrives, it is seamlessly swapped out with the old data.
  - `isPlaceholderData` is made available to know what data the query is currently providing you.
```tsx
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React from 'react'

function Todos() {
  const [page, setPage] = React.useState(0)

  const fetchProjects = (page = 0) =>
    fetch('/api/projects?page=' + page).then((res) => res.json())

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['projects', page],
      queryFn: () => fetchProjects(page),
      placeholderData: keepPreviousData,
    })

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPlaceholderData && data.hasMore) {
            setPage((old) => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPlaceholderData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  )
}
```

### Lagging Infinite Query results with `placeholderData`
- The `placeholderData` option also works with `useInfiniteQuery` hook.

## Infinite Queries
- Rendering lists that can additively "load more" data onto an existing set or "infinitely scroll" is a common UI pattern.
- In this use case, you can use `useInfiniteQuery`.
- There are a few things different about `useInfiniteQuery`
  - `data` is not an object containing infinite query data.
  - `data.pages` array contains the fetched pages.
  - `data.pageParams` array contains the page params used to fetch the pages.
  - The `fetchNextPage` and `fetchPreviousPage` functions are available.
  - The `initialPageParam` option is available to specify the initial page param.
  - The `getNextPageParam` and `getPreviousPageParam` options are available for determining if there is more data to load and the info to fetch it.
  - A `hasNextPage` boolean is available.
  - A `hasPreviousPage` boolean is available.
  - The `isFetchingNextPage` and `isFetchingPreviousPage` booleans are now available.
- Example: There is an API that returns pages of 3 projects at a time based on a cursor index.
```tsx
fetch('/api/projects?cursor=0')
// { data: [...], nextCursor: 3}
fetch('/api/projects?cursor=3')
// { data: [...], nextCursor: 6}
fetch('/api/projects?cursor=6')
// { data: [...], nextCursor: 9}
fetch('/api/projects?cursor=9')
// { data: [...] }
```
- In this case, you can make a "Load More" UI by:
  - Waiting for `useInfiniteQuery` to request the first group of data by default.
  - Returning the information for the next query in `getNextPageParam`
  - Calling `fetchNextPage` function
```tsx
import { useInfiniteQuery } from '@tanstack/react-query'

function Projects() {
  const fetchProjects = async ({ pageParam }) => {
    const res = await fetch('/api/projects?cursor=' + pageParam)
    return res.json()
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  return status === 'pending' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.data.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}
```
- Calling `fetchNextPage` while an ongoing fetch is in progress risks overwritten data happening in the background. 
- At all times, there can only be a single fetch for an Infinite Query at a time.
- If you want to enable simultaneous fetching, you can do `{ cancelRefetch: false }` option within `fetchNextPage`.

### What happens when an infinite query needs to be re-fetched?
- Each group is re-fetched sequentially. 

### What if I want to implement a bi-directional infinite list?
- Bi-Direction infinite lists can be implemented using `getPreviousPageParam`, `fetchPreviousPage`, `hasPreviousPage` and `isFetchingPreviousPage`.
```tsx
useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
})
```

### What if I want to show the pages in reverse order?
- You can use the select option:
```tsx
useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  select: (data) => ({
    pages: [...data.pages].reverse(),
    pageParams: [...data.pageParams].reverse(),
  }),
})
```

### What if I want to manually update the infinite query?
#### Manually removing first page:
```tsx
queryClient.setQueryData(['projects'], (data) => ({
  pages: data.pages.slice(1),
  pageParams: data.pageParams.slice(1),
}))
```

#### Manually removing a single value from an individual page:
```tsx
const newPagesArray =
  oldPagesArray?.pages.map((page) =>
    page.filter((val) => val.id !== updatedId),
  ) ?? []

queryClient.setQueryData(['projects'], (data) => ({
  pages: newPagesArray,
  pageParams: data.pageParams,
}))
```

#### Keep only the first page:
```tsx
queryClient.setQueryData(['projects'], (data) => ({
  pages: data.pages.slice(0, 1),
  pageParams: data.pageParams.slice(0, 1),
}))
```

### What if I want limit the number of pages?
- In some cases, you may want to limit the pages stored in query data to improve the performance and UX.
  - When the user can load a large number of pages (memory usage)
  - When you have to refetch an infinite query that contains dozens of pages (network usage: all the pages are sequentially fetched)
- The solution is to use a "Limited Infinite Query".
- Set the `maxPages` option in conjunction with the `getNextPageParam` and `getPreviousPageParam` to allow fetching pages when needed in both directions.
```tsx
useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
  maxPages: 3,
})
```

### What if my API doesn't return a cursor?
- You can use the `pageParam` as a cursor. Because `getNextPageParam` and `getPreviousPageParam` also get the `pageParam` of the current page, you can use it to calculate the next / previous page param.
```tsx
return useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages, lastPageParam) => {
    if (lastPage.length === 0) {
      return undefined
    }
    return lastPageParam + 1
  },
  getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
    if (firstPageParam <= 1) {
      return undefined
    }
    return firstPageParam - 1
  },
})
```

## Initial Query Data
- There are many ways to supply initial data for a query to the cache before needing it:
  - Declaratively: Provide `initialData` to a query to pre-populate it's cache if empty.
  - Imperatively:
    - Prefetch the data using `queryClient.prefetchQuery`
    - Manually place the data into the cache using `queryClient.setQueryData`.

### Using `initialData` to pre-populate a query
- When you already have the data prepared in your app, you can provide it directly to the query.
- If this is the case, you can use `config.initialData` option to set the initial data for the query and skip the loading state. 
```tsx
const result = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/todos'),
  initialData: initialTodos,
})
```

### `stateTime` and `initialDataUpdatedAt`
- By default, `initialData` is treated as totally fresh, as if it was just fetched. This means that it will affect how it is interpreted by the `staleTime` option.
  - If the query observer is configured with `initialData`, and no `staleTime` (Default 0), the query will immediately refetch when it mounts.
```tsx
// Will show initialTodos immediately, but also immediately refetch todos after mount
const result = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/todos'),
  initialData: initialTodos,
})
```
  - If you configure your query observer with `initialData` and a `staleTime` of 1000ms, the data will be considered fresh for that amount of time.
```tsx
// Show initialTodos immediately, but won't refetch until another interaction event is encountered after 1000 ms
const result = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/todos'),
  initialData: initialTodos,
  staleTime: 1000,
})
```
  - If the `initialData` isn't fresh, use can use the `initialDataUpdatedAt` option. You can pass a numeric Javascript timestamp in ms of when the data was last updated.
```tsx
// Show initialTodos immediately, but won't refetch until another interaction event is encountered after 1000 ms
const result = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/todos'),
  initialData: initialTodos,
  staleTime: 60 * 1000, // 1 minute
  // This could be 10 seconds ago or 10 minutes ago
  initialDataUpdatedAt: initialTodosUpdatedTimestamp, // eg. 1608412420052
})
```

### Initial Data Function
- If the process for accessing a query's initial data is intensive or not something you want to do on every render, you can pass the function as an `initialData` value. 
- The function will only be executed once when the query is initialized.
```tsx
const result = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/todos'),
  initialData: () => getExpensiveTodos(),
})
```

### Initial Data from Cache
- You can also provide initial data for a query from the cached result of another. This is great for adding the result of an individual item from a list.
```tsx
const result = useQuery({
  queryKey: ['todo', todoId],
  queryFn: () => fetch('/todos'),
  initialData: () => {
    // Use a todo from the 'todos' query as the initial data for this todo query
    return queryClient.getQueryData(['todos'])?.find((d) => d.id === todoId)
  },
})
```

### Initial Data from the cache with `initialDataUpdatedAt`
- Getting initial data from the cache means the source query is likely old.
- It is suggested that you pass the source query's `dataUpdatedAt` to `initialDataUpdatedAt` to allow it be re-fetched if needed.
```tsx
const result = useQuery({
  queryKey: ['todos', todoId],
  queryFn: () => fetch(`/todos/${todoId}`),
  initialData: () =>
    queryClient.getQueryData(['todos'])?.find((d) => d.id === todoId),
  initialDataUpdatedAt: () =>
    queryClient.getQueryState(['todos'])?.dataUpdatedAt,
})
```

### Conditional Initial Data from Cache
- If the cached source information is old, you may not want it at all.
- You can use the `queryClient.getQueryState` method instead to get more information about the source query, including a `state.dataUpdatedAt` timestamp you can use to decide if the query is "fresh" enough.
```
const result = useQuery({
  queryKey: ['todo', todoId],
  queryFn: () => fetch(`/todos/${todoId}`),
  initialData: () => {
    // Get the query state
    const state = queryClient.getQueryState(['todos'])

    // If the query exists and has data that is no older than 10 seconds...
    if (state && Date.now() - state.dataUpdatedAt <= 10 * 1000) {
      // return the individual todo
      return state.data.find((d) => d.id === todoId)
    }

    // Otherwise, return undefined and let it fetch from a hard loading state!
  },
})
```

## Placeholder Query Data
- Place holder data allows the query to already behave as if it has data, similarly to `initialData`, but the data is not persisted to the cache.
- This can be used when you have enough partial or fake data to render the query successfully while the rest of the data is fetching in the background.
- There are a few different ways to supply placeholder data:
  - Declaratively - Provide `placeholderData` to the query to populate the cache if empty.
  - Imperatively - Prefetch or fetch the data using `queryClient` and the `placeholderData` option.
  - Since there is data being displayed, `status` will be in a success state. Instead, you can use the `isPlaceholderData` to check.

### Placeholder Data as a Value
```tsx
function Todos() {
  const result = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/todos'),
    placeholderData: placeholderTodos,
  })
}
```

### Placeholder Data Memoize
- If accessing a query's placeholder data is intensive, you can memoize the value:
```tsx
function Todos() {
  const placeholderData = useMemo(() => generateFakeTodos(), [])
  const result = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/todos'),
    placeholderData,
  })
}
```

### Placeholder Data as a Function
- `placeholderData` can be a function, where you could get access to a previous query.
- For example, when changing to todo 2 instead of todo 1, we can leave todo 1's data displayed.
```tsx
const result = useQuery({
  queryKey: ['todos', id],
  queryFn: () => fetch(`/todos/${id}`),
  placeholderData: (previousData, previousQuery) => previousData,
})
```

### Placeholder Data From Cache
- In some cases, you can provide placeholder data from the cache of another query.
```tsx
function Todo({ blogPostId }) {
  const queryClient = useQueryClient()
  const result = useQuery({
    queryKey: ['blogPost', blogPostId],
    queryFn: () => fetch(`/blogPosts/${blogPostId}`),
    placeholderData: () => {
      // Use the smaller/preview version of the blogPost from the 'blogPosts'
      // query as the placeholder data for this blogPost query
      return queryClient
        .getQueryData(['blogPosts'])
        ?.find((d) => d.id === blogPostId)
    },
  })
}
```

## Mutations
- Mutations do create, update, and delete operations, along with performing server side-effects.
- For these purposes, you can use the `useMutation` hook.
```tsx
function App() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('/todos', newTodo)
    },
  })

  return (
    <div>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
```
- A Mutation can having the following states:
  - `isIdle` or `status == 'idle'` - The mutation is currently idle or in a fresh/reset state.
  - `isPending` or `status === 'pending'` - The mutation is currently running
  - `isError` or `status === 'error'` - The mutation encountered an error
  - `isSuccess` or `status === 'success'` - The mutation was successful and mutation data is available
- There is also information available depending on the state:
  - `error` - If the mutation is in an `error` state, the error is available via the `error` property.
  - `data` - If the mutation is in a `success` state, the data is available via the `data` property.
- In the example above, a single variable or object is passed to the mutation.
- With the mutations onSuccess option, the `invalidateQueries` method and the `setQueryData` method, mutations can become extremely powerful.
- The mutate is an asynchronous function, so you need to wrap the `mutate` in another function.
```tsx
// This will not work in React 16 and earlier
const CreateTodo = () => {
  const mutation = useMutation({
    mutationFn: (event) => {
      event.preventDefault()
      return fetch('/api', new FormData(event.target))
    },
  })

  return <form onSubmit={mutation.mutate}>...</form>
}

// This will work
const CreateTodo = () => {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch('/api', formData)
    },
  })
  const onSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(new FormData(event.target))
  }

  return <form onSubmit={onSubmit}>...</form>
}
```

### Resetting Mutation State
- If you need to clear the `error` and `data` of a mutation, you can use the `reset` function.
```tsx
const CreateTodo = () => {
  const [title, setTitle] = useState('')
  const mutation = useMutation({ mutationFn: createTodo })

  const onCreateTodo = (e) => {
    e.preventDefault()
    mutation.mutate({ title })
  }

  return (
    <form onSubmit={onCreateTodo}>
      {mutation.error && (
        <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
      )}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button type="submit">Create Todo</button>
    </form>
  )
}
```

### Mutation Side Effects
- `useMutation` comes with some helper options to allow quick and easy side-effects.
- This can be used for invalidating and refetching queries after mutations or even optimistic updates.
```tsx
useMutation({
  mutationFn: addTodo,
  onMutate: (variables) => {
    // A mutation is about to happen!

    // Optionally return a context containing data to use when for example rolling back
    return { id: 1 }
  },
  onError: (error, variables, context) => {
    // An error happened!
    console.log(`rolling back optimistic update with id ${context.id}`)
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // Error or success... doesn't matter!
  },
})
```
- If you are returning a promise in any of the callback functions, they will wait for the previous one to finish.
```tsx
useMutation({
  mutationFn: addTodo,
  onSuccess: async () => {
    console.log("I'm first!")
  },
  onSettled: async () => {
    console.log("I'm second!")
  },
})
```
- You can also trigger additional callbacks using the `onSuccess`, `onError`, and `onSettled`. These callbacks will not run if the component unmounts before the mutation finishes.
```tsx
useMutation({
  mutationFn: addTodo,
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
})

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
})
```

#### Consecutive Mutations
- There is a difference between the `onSuccess`, `onError`, and `onSettled` callbacks when mutations are consecutive. 
- When passed to the mutate function, the will be fired up once and only if the component is mounted. 
- The `useMutation` function will execute for each mutate call.
```tsx
useMutation({
  mutationFn: addTodo,
  onSuccess: (data, variables, context) => {
    // Will be called 3 times
  },
})

const todos = ['Todo 1', 'Todo 2', 'Todo 3']
todos.forEach((todo) => {
  mutate(todo, {
    onSuccess: (data, variables, context) => {
      // Will execute only once, for the last mutation (Todo 3),
      // regardless which mutation resolves first
    },
  })
})
```

### Promises
- Use `mutateAsync` instead of `mutate` to get a promise will resolve on success or throw an error.
- This can be used to compose side effects.
```tsx
const mutation = useMutation({ mutationFn: addTodo })

try {
  const todo = await mutation.mutateAsync(todo)
  console.log(todo)
} catch (error) {
  console.error(error)
} finally {
  console.log('done')
}
```

### Retry
- By default, mutations are not retried, but is possible with the `retry` function.
```tsx
const mutation = useMutation({
  mutationFn: addTodo,
  retry: 3,
})
```

### Persist Mutations
- Mutations can be persisted to storage if needed and resumed later on. 
```tsx
const queryClient = new QueryClient()

// Define the "addTodo" mutation
queryClient.setMutationDefaults(['addTodo'], {
  mutationFn: addTodo,
  onMutate: async (variables) => {
    // Cancel current queries for the todos list
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // Create optimistic todo
    const optimisticTodo = { id: uuid(), title: variables.title }

    // Add optimistic todo to todos list
    queryClient.setQueryData(['todos'], (old) => [...old, optimisticTodo])

    // Return context with the optimistic todo
    return { optimisticTodo }
  },
  onSuccess: (result, variables, context) => {
    // Replace optimistic todo in the todos list with the result
    queryClient.setQueryData(['todos'], (old) =>
      old.map((todo) =>
        todo.id === context.optimisticTodo.id ? result : todo,
      ),
    )
  },
  onError: (error, variables, context) => {
    // Remove optimistic todo from the todos list
    queryClient.setQueryData(['todos'], (old) =>
      old.filter((todo) => todo.id !== context.optimisticTodo.id),
    )
  },
  retry: 3,
})

// Start mutation in some component:
const mutation = useMutation({ mutationKey: ['addTodo'] })
mutation.mutate({ title: 'title' })

// If the mutation has been paused because the device is for example offline,
// Then the paused mutation can be dehydrated when the application quits:
const state = dehydrate(queryClient)

// The mutation can then be hydrated again when the application is started:
hydrate(queryClient, state)

// Resume the paused mutations:
queryClient.resumePausedMutations()
```

#### Persisting Offline Mutations
- You can persist offline mutations using the `persistQueryClient` plugin. 
```tsx
const persister = createSyncStoragePersister({
  storage: window.localStorage,
})
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

// we need a default mutation function so that paused mutations can resume after a page reload
queryClient.setMutationDefaults(['todos'], {
  mutationFn: ({ id, data }) => {
    return api.updateTodo(id, data)
  },
})

export default function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful
        queryClient.resumePausedMutations()
      }}
    >
      <RestOfTheApp />
    </PersistQueryClientProvider>
  )
}
```

### Mutation Scopes
- By default, mutations run in parallel. Even if you run `.mutate()` of the same mutation multiple times. 
- Mutations can be given a scope with an id to avoid it.
- All mutations with the same `scope.id` will run in serial, which means they will start in a paused state if there is already a mutation in progress.
```tsx
const mutation = useMutation({
  mutationFn: addTodo,
  scope: {
    id: 'todo',
  },
})
```

## Query Invalidation
- Waiting for queries to become stale doesn't always work, especially if the user does an action that changes the data. 
- `QueryClient` has an `invalidateQueries` method that lets you intelligently mark queries as stale and fetch them.
```tsx
// Invalidate every query in the cache
queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ['todos'] })
```
- When a query is invalidated, two things can happen:
  - It is marked as stale and overrides the `staleTime` configurations being used in `useQuery` or related hooks.
  - The query currently being rendered via `useQuery` or related hooks, it will be re-fetched in the background.

### Query Matching with `invalidateQueries`
- When using APIs like `invalidateQueries` and `removeQueries`, you can match queries using their prefix, or get specific and match the exact query. 
```tsx
import { useQuery, useQueryClient } from '@tanstack/react-query'

// Get QueryClient from the context
const queryClient = useQueryClient()

queryClient.invalidateQueries({ queryKey: ['todos'] })

// Both queries below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
const todoListQuery = useQuery({
  queryKey: ['todos', { page: 1 }],
  queryFn: fetchTodoList,
})
```
- You can also invalidate queries with specific variables by passing a specific query to the `invalidateQueries` method.
```tsx
queryClient.invalidateQueries({
  queryKey: ['todos', { type: 'done' }],
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { type: 'done' }],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
```
- If you want to only invalidate `todos` queries that don't have any more variables or sub-keys, you can pass an `exact: true` option to the `invalidateQueries` method:
```tsx
queryClient.invalidateQueries({
  queryKey: ['todos'],
  exact: true,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { type: 'done' }],
  queryFn: fetchTodoList,
})
```
- If you want more granularity, you can pass a predicate function to the `invalidateQueries` method. 
```tsx
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 20 }],
  queryFn: fetchTodoList,
})

// The query below will be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 10 }],
  queryFn: fetchTodoList,
})

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery({
  queryKey: ['todos', { version: 5 }],
  queryFn: fetchTodoList,
})
```

## Invalidations from Mutations
- When a mutation succeeds in your application, you may need to invalidate other queries and possibly refetch them to account for the new changes. 
- Assume a todo is mutated:
```tsx
const mutation = useMutation({ mutationFn: postTodo })
```
- When a successful `postTodo` mutation happens, all todo queries should be invalidated:
```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()

// When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
const mutation = useMutation({
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    queryClient.invalidateQueries({ queryKey: ['reminders'] })
  },
})
```

## Updates from Mutation Responses
- When doing mutations that update objects on the server, it is common for the new object to be returned in response.
- - Instead of refetching any queries for that item, we can use the object returned by the mutation and update the query immediately using the Object Client's `setQueryData` method:
```tsx
const queryClient = useQueryClient()

const mutation = useMutation({
  mutationFn: editTodo,
  onSuccess: (data) => {
    queryClient.setQueryData(['todo', { id: 5 }], data)
  },
})

mutation.mutate({
  id: 5,
  name: 'Do the laundry',
})

// The query below will be updated with the response from the
// successful mutation
const { status, data, error } = useQuery({
  queryKey: ['todo', { id: 5 }],
  queryFn: fetchTodoById,
})
```
- You can even use the `onSuccess` logic and make a custom hook:
```tsx
const useMutateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editTodo,
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['todo', { id: variables.id }], data)
    },
  })
}
```

### Immutability
- Updates via `setQueryData` must be performed in an immutable way.
```tsx
queryClient.setQueryData(['posts', { id }], (oldData) => {
  if (oldData) {
    // ❌ do not try this
    oldData.title = 'my new post title'
  }
  return oldData
})

queryClient.setQueryData(
  ['posts', { id }],
  // ✅ this is the way
  (oldData) =>
    oldData
      ? {
          ...oldData,
          title: 'my new post title',
        }
      : oldData,
)
```

## Optimistic Updates
- There are two ways to optimistically update your UI before a mutation is complete.
- You can use the `onMutate` option to update the cache directly, or leverage the returned variables to update your UI.

### Via the UI
```tsx
const addTodoMutation = useMutation({
  mutationFn: (newTodo: string) => axios.post('/api/data', { text: newTodo }),
  // make sure to _return_ the Promise from the query invalidation
  // so that the mutation stays in `pending` state until the refetch is finished
  onSettled: async () => {
    return await queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})

const { isPending, submittedAt, variables, mutate, isError } = addTodoMutation
```
- This will give you access to the `addTodoMutation.variables`, which contains the added todo. 
- You can then add the item to the list while it is pending:
```tsx
<ul>
  {todoQuery.items.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
  ))}
  {isPending && <li style={{ opacity: 0.5 }}>{variables}</li>}
</ul>
```
- If the mutation errors out, the object will disappear. If you still want it to be shown, you can check the `isError` state. 
- `variables` are not cleared if the mutation fails, so they can still be accessed.
```tsx
{
  isError && (
    <li style={{ color: 'red' }}>
      {variables}
      <button onClick={() => mutate(variables)}>Retry</button>
    </li>
  )
}
```

### If the mutation and the query do not live in the same component.
- The approach still works if the mutation and query do not live in the same component.
- You can get access to all other mutations in other components using the dedicated `useMutationState` hook, which should be combined to the `mutationKey`:
```tsx
// somewhere in your app
const { mutate } = useMutation({
  mutationFn: (newTodo: string) => axios.post('/api/data', { text: newTodo }),
  onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  mutationKey: ['addTodo'],
})

// access variables somewhere else
const variables = useMutationState<string>({
  filters: { mutationKey: ['addTodo'], status: 'pending' },
  select: (mutation) => mutation.state.variables,
})
```
- `variables` will be an array, because there can be multiple mutations at the same time. 

### Via the Cache
- If a mutation fails and you cannot refetch your query, you can roll back your update.
- `useMutation`'s `onMutate` handler options allows you to return a value that will be passed onto both `onError` and `onSettled` handlers as the last argument. 

#### Updating a list of todos when adding a new todo
```tsx
const queryClient = useQueryClient()

useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing re-fetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(['todos'])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

#### Updating a single Todo
```tsx
useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos', newTodo.id] })

    // Snapshot the previous value
    const previousTodo = queryClient.getQueryData(['todos', newTodo.id])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos', newTodo.id], newTodo)

    // Return a context with the previous and new todo
    return { previousTodo, newTodo }
  },
  // If the mutation fails, use the context we returned above
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(
      ['todos', context.newTodo.id],
      context.previousTodo,
    )
  },
  // Always refetch after error or success:
  onSettled: (newTodo) => {
    queryClient.invalidateQueries({ queryKey: ['todos', newTodo.id] })
  },
})
```
- You can also use an `onSettled` function in place of a separate `onError` and `onSuccess` handlers:
```tsx
useMutation({
  mutationFn: updateTodo,
  // ...
  onSettled: (newTodo, error, variables, context) => {
    if (error) {
      // do something
    }
  },
})
```
### When to use what
- If you only have one place where the optimistic result should be shown, use the `variables` approach. 
- If you have multiple places where the update needs to be known, the manipulating the cache will take care of this for you automatically.

## Query Cancellation
- Each query has an `AbortSignal` instance. When a query becomes out-of-date or inactive, the `signal` will become aborted.
- You can respond to a cancelled query if desired. 

### Default Behavior
- Queries that unmount or become unused before their promises are resolved are not cancelled. 
- After it resolves, the data will become available in the cache. 
- If you mount the component again, the data will be available.
- If you consume the `AbortSignal`, the promise is cancelled and the query is cancelled. The state will revert to the previous state.

#### Using `fetch`
```tsx
const query = useQuery({
  queryKey: ['todos'],
  queryFn: async ({ signal }) => {
    const todosResponse = await fetch('/todos', {
      // Pass the signal to one fetch
      signal,
    })
    const todos = await todosResponse.json()

    const todoDetails = todos.map(async ({ details }) => {
      const response = await fetch(details, {
        // Or pass it to several
        signal,
      })
      return response.json()
    })

    return Promise.all(todoDetails)
  },
})
```

#### Using `axios` v0.22.0+
```tsx
import axios from 'axios'

const query = useQuery({
  queryKey: ['todos'],
  queryFn: ({ signal }) =>
    axios.get('/todos', {
      // Pass the signal to `axios`
      signal,
    }),
})
```

#### Using `axios` with version lower than `v0.22.0`
```tsx
import axios from 'axios'

const query = useQuery({
  queryKey: ['todos'],
  queryFn: ({ signal }) => {
    // Create a new CancelToken source for this request
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const promise = axios.get('/todos', {
      // Pass the source token to your request
      cancelToken: source.token,
    })

    // Cancel the request if TanStack Query signals to abort
    signal?.addEventListener('abort', () => {
      source.cancel('Query was cancelled by TanStack Query')
    })

    return promise
  },
})
```

### Manual Cancellation
- If you want to cancel a request manually, you can call `queryClient.cancelQueries({queryKey})`
```tsx
const query = useQuery({
  queryKey: ['todos'],
  queryFn: async ({ signal }) => {
    const resp = await fetch('/todos', { signal })
    return resp.json()
  },
})

const queryClient = useQueryClient()

return (
  <button
    onClick={(e) => {
      e.preventDefault()
      queryClient.cancelQueries({ queryKey: ['todos'] })
    }}
  >
    Cancel
  </button>
)
```

### Limitations
- When using suspense mode, cancellation does not work.

## Testing
- Writing tests for TanStack query can be done using the [React Hooks Testing Library](https://react-hooks-testing-library.com/)
- To install:
```bash
npm install @testing-library/react-hooks react-test-renderer --save-dev
```

### Our First Test
- Once installed, here is a simple test:
```tsx
export function useCustomHook() {
  return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' })
}
```
- Using React 17 or earlier:
```tsx
const queryClient = new QueryClient()
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper })

await waitFor(() => result.current.isSuccess)

expect(result.current.data).toEqual('Hello')
```
- Using React 18 or later:
```tsx
import { renderHook, waitFor } from "@testing-library/react";

...

const { result } = renderHook(() => useCustomHook(), { wrapper });

await waitFor(() => expect(result.current.isSuccess).toBe(true));
```
- By providing a custom wrapper, the test remains isolated from the other tests.

### Turn off Retries
- Best way to turn off retries during tests is in the `QueryClientProvider`
```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
})
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
```

### Setting gcTime to Infinity with Jest
- Set the gcTime to infinity to prevent `Jest did not exit one second after the test run completed`.

### Testing Network Calls
- [Nock](https://www.npmjs.com/package/nock) can be used to test if TanStack is making the correct network requests.
- For this hook:
```tsx
function useFetchData() {
  return useQuery({
    queryKey: ['fetchData'],
    queryFn: () => request('/api/data'),
  })
}
```
- We can write this test:
```tsx
const queryClient = new QueryClient()
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const expectation = nock('http://example.com').get('/api/data').reply(200, {
  answer: 42,
})

const { result, waitFor } = renderHook(() => useFetchData(), { wrapper })

await waitFor(() => {
  return result.current.isSuccess
})

expect(result.current.data).toEqual({ answer: 42 })
```