# Fetch Sync
Super simple synchronous fetch api.

> This package is made for fun. Please do not use any synchronous http-request api in production.

# Example

```js
const fetchSync = require("synchronous-fetch");
const url = "https://example.com";

const res = fetchSync(url);
const html = res.text();
console.log(html);
```

# ToDo
- Make it more similar to node-fetch