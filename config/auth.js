export const JWT_SECRET = "HelloSecret@123";

export const jwtOptions = {
  keys: JWT_SECRET,
  verify: {
    aud: 'urn:audience:myapi',
    iss: 'urn:issuer:myapi',
    sub: false,
    nbf: true,
    exp: true,
    maxAgeSec: 14400,
    timeSkewSec: 15
  }
};