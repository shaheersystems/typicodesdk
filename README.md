# TypiCode API Wrapper

`TypiCode` is a TypeScript class that provides a wrapper around the JSONPlaceholder API, enabling structured, configurable API requests with options for API key-based authentication and customizable request timeouts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Constructor](#constructor)
  - [Methods](#methods)
- [Examples](#examples)

---

## Installation

To use this wrapper, ensure that you have a package manager compatible with Deno or Node.js.

### Using Deno registry:

`deno add jsr:@typicode-api/typicodesdk `

### Using NPM registry:

`npx jsr add @typicode-api/typicodesdk `

### Using YARN:

`yarn dlx jsr add @typicode-api/typicodesdk`

### Using PNMP:

`pnpm dlx jsr add @typicode-api/typicodesdk `

### Using BUN:

`bunx jsr add @typicode-api/typicodesdk `

## Usage

1. **Import the** `TypiCode` Class:

   ```typescript
   import { TypiCode } from "./TypiCode";
   ```

2. **Create an instance of** `TypiCode`:

   ```typescript
   const api = new TypiCode({ apiKey: "your-api-key", timeout: 30000 });
   ```

## API

### Constructor

#### `TypiCode(config: ApiConfig)`

Creates an instance of the `TypiCode` class.

| Parameter | Type        | Description                                                                                   |
| --------- | ----------- | --------------------------------------------------------------------------------------------- |
| `config`  | `ApiConfig` | Object containing API configuration options such as `apiKey` (optional) and `timeout` (in ms) |

The `config` object allows you to specify:

- **apiKey** (optional): API key for authentication (if required by the endpoint).
- **timeout** (optional): Timeout in milliseconds (default is 30,000 ms).

#### Example

```typescript
const api = new TypiCode({ timeout: 15000 });
```

### Methods

#### `getPosts(): Promise<unknown[]>`

Fetches all posts from the API.

Returns a promise that resolves with an array of posts in JSON format.

#### `getPost(id: number): Promise<unknown>`

Fetches a specific post by its ID.

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `id`      | `number` | The ID of the post |

Returns a promise that resolves with the post data in JSON format.

### Protected Method

#### `request<T>(method: "GET" | "POST" | "PUT" | "DELETE", endpoint: string, data?: unknown): Promise<T>`

This method handles HTTP requests and is used internally by the other public methods. Not intended to be called directly.

---

## Examples

1. **Get All Posts**

   ```typescript
   const api = new TypiCode({ timeout: 15000 });
   api.getPosts().then((posts) => console.log(posts));
   ```

2. **Get a Specific Post by ID**

   ```typescript
   const api = new TypiCode();
   api.getPost(1).then((post) => console.log(post));
   ```

---

## Error Handling

If an API request fails, an error is thrown with a descriptive message, indicating either a non-OK HTTP status or a failed request.
