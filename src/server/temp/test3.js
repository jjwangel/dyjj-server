const jwt = require('jsonwebtoken');

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiamlhbmppYXdlbiIsImRlcCI6ImtqYiIsImlhdCI6MTUxNzM2OTQ0MywiZXhwIjoxNTE3MzY5NTAzfQ.zd8PW-FEbTxFa31U2OdGR0lmbuY3Lf5Jqv9jxsWDGmI';

if (token === '') {
  token = jwt.sign({
      user: 'jianjiawen',
      dep: 'kjb'
    },
    'user_guid', {
      expiresIn: 60,
    }
  );
  console.log(token);
} else {
  jwt.verify(token, 'user_guid', function (err, decoded) {
    if (err) {
      console.log(err.message);
    } else {
      console.log(decoded);
    }
  });
}