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
    - To change, you can alter `gcTime` for something other than 1000 * 60 * 5 milliseconds.
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
```ts
import { useQuery } from '@tanstack/react-query'

function App() {
  const info = useQuery({ queryKey: ['todos'], queryFn: fetchTodoList })
}
```
- The unique key provided is used internally for refetching, caching, and sharing queries through the application.
- The query result returned by `useQuery` contains all the information about the query that is needed for templating or any other data usage.
```ts
const result = useQuery({ queryKey: ['todos'], queryFn: fetchTodoList })
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
```ts
function Todos() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```
- or, if you don't prefer booleans
```ts
function Todos() {
  const { status, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  })

  if (status === 'pending') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  // also status === 'success', but "else" logic works, too
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
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
```ts
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
```ts
// An individual todo
useQuery({ queryKey: ['todo', 5], ... })

// An individual todo in a "preview" format
useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

// A list of todos that are "done"
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```

### Query Keys are hashed deterministically!!!
- No matter the order of keys in objects, the following queries are considered equally.
```ts
useQuery({ queryKey: ['todos', { status, page }], ... })
useQuery({ queryKey: ['todos', { page, status }], ...})
useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```
- The following query keys are not equal, since array order matters.
```ts
useQuery({ queryKey: ['todos', status, page], ... })
useQuery({ queryKey: ['todos', page, status], ...})
useQuery({ queryKey: ['todos', undefined, page, status], ...})
```

### If your query function depends on variables, include it in your query key.
- Since query keys described the data they are fetching, they should include any variations in your query function that change.
```ts
function Todos({ todoId }) {
  const result = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoById(todoId),
  })
}
```
- Query Keys act as dependencies for your function.
- Adding dependent variables to your query key will ensure that queries are cached independently, and are re-fetched automatically anytime a variable changes.

## Query Functions
- A query function is any function that returns a promise. That promise should either resolve the data or throw an error.
- The following are all valid query configurations:
```ts
useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })
useQuery({ queryKey: ['todos', todoId], queryFn: () => fetchTodoById(todoId) })
useQuery({
  queryKey: ['todos', todoId],
  queryFn: async () => {
    const data = await fetchTodoById(todoId)
    return data
  },
})
useQuery({
  queryKey: ['todos', todoId],
  queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
})
```

#### Handling and Throwing Errors
- For TanStack query to determine a query errored, the query function must throw or return a rejected Promise. 
- Any error that is thrown in the query function will be persisted in the error state of the query.
```ts
const { error } = useQuery({
  queryKey: ['todos', todoId],
  queryFn: async () => {
    if (somethingGoesWrong) {
      throw new Error('Oh no!')
    }
    if (somethingElseGoesWrong) {
      return Promise.reject(new Error('Oh no!'))
    }

    return data
  },
})
```

#### Using With `fetch` and other clients that do not throw by default.
- With most utilities like `axios` and `graphql-request` automatically throw errors for unsuccessful HTTP calls, some utilities like `fetch` don't. In that case, throw them on your own.
```ts
useQuery({
  queryKey: ['todos', todoId],
  queryFn: async () => {
    const response = await fetch('/todos/' + todoId)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
})
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
```ts
import { queryOptions } from '@tanstack/react-query'

function groupOptions(id: number) {
  return queryOptions({
    queryKey: ['groups', id],
    queryFn: () => fetchGroups(id),
    staleTime: 5 * 1000,
  })
}

// usage:

useQuery(groupOptions(1))
useSuspenseQuery(groupOptions(5))
useQueries({
  queries: [groupOptions(1), groupOptions(2)],
})
queryClient.prefetchQuery(groupOptions(23))
queryClient.setQueryData(groupOptions(42).queryKey, newGroups)
```
- For infinite queries, a separate `infiniteQueryOptions` helper is available.
- You can still override some options at a component level. A very common and useful pattern is to create per-component `select` functions.
```ts
// Type inference still works, so query.data will be the return type of select instead of queryFn

const query = useQuery({
  ...groupOptions(1),
  select: (data) => data.groupName,
})
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
```ts
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
```ts
function App({ users }) {
  const userQueries = useQueries({
    queries: users.map((user) => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => fetchUserById(user.id),
      }
    }),
  })
}
```

## Dependent Queries
- Dependent (or Serial) queries depend on the previous ones before they can execute. 
- To do this, you can use the `enabled` option to tell a query when it is ready to run.
```ts
// Get the user
const { data: user } = useQuery({
  queryKey: ['user', email],
  queryFn: getUserByEmail,
})

const userId = user?.id

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ['projects', userId],
  queryFn: getProjectsByUser,
  // The query will not execute until the userId exists
  enabled: !!userId,
})
```

### `useQueries` dependent Query
- `useQueries` can depend on a previous Query as well:
```ts
// Get the users ids
const { data: userIds } = useQuery({
  queryKey: ['users'],
  queryFn: getUsersData,
  select: (users) => users.map((user) => user.id),
})

// Then get the users messages
const usersMessages = useQueries({
  queries: userIds
    ? userIds.map((id) => {
        return {
          queryKey: ['messages', id],
          queryFn: () => getMessagesByUsers(id),
        }
      })
    : [], // if users is undefined, an empty array will be returned
})
```

### A note about performance:
- Dependent queries produce a request waterfall, which can hurt performance. It is best to flatten the waterfall if possible.

## Background Fetching Indicators
- A query's `status === 'pending'` is enough to show the hard-loading state for the query.
- Sometimes, you may want to show an additional indicator that the query if refetching in the background.
- You can do this with the `isFetching` boolean, regardless of the status variable.
```ts
function Todos() {
  const {
    status,
    data: todos,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  return status === 'pending' ? (
    <span>Loading...</span>
  ) : status === 'error' ? (
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
  )
}
```

### Displaying the Global Background Fetching Loading State
- You can configure a global loading indicator when any queries are fetching (including in the background).
- You use the `useIsFetching` hook.
```ts
import { useIsFetching } from '@tanstack/react-query'

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null
}
```

