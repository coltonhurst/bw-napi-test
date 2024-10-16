import { BitwardenClient, ClientSettings, DeviceType, LogLevel } from "@bitwarden/sdk-napi";

const organizationId = "organization-id-here";
const accessToken = "access-token-here";
const stateFile = "state-file-path-here";

const settings: ClientSettings = {
  apiUrl: "http://localhost:4000",
  identityUrl: "http://localhost:33656",
  userAgent: "Bitwarden SDK",
  deviceType: DeviceType.SDK,
};

// Build the Client
const client = new BitwardenClient(settings, LogLevel.Info);

// Authenticate using a machine account access token
await client.auth().loginAccessToken(accessToken, stateFile);

// List secrets
const secrets = await client.secrets().list(organizationId);
console.log(secrets);

// Get a specific secret
const secret = await client.secrets().get("secret-id-here");
console.log(secret);
