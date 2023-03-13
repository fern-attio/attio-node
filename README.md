# Attio Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/attio)](https://www.npmjs.com/package/@fern-api/attio)

The Attio Node.js library provides access to the Attio API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://attio.com/developers/introduction).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-qvk6qu?file=app.ts)

```typescript
import { AttioClient } from '@fern-api/attio';

const attio = new AttioClient({
  token: 'ATTIO_TOKEN',
});

const response = await attio.workspaceMembers.get('workspace-member-id');

console.log('Received workspace member', response.data);
```

## OAuth

This SDK also supports using OAuth to generate a token.

```
import { AttioClient } from '@fern-api/attio';
import { getToken } from '@fern-api/attio/oauth';

const attio = new AttioClient({
  token: getToken("CLIENT_ID", "CLIENT_SECRET"),
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
