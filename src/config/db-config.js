const dbconfig = {
  conn1: {
      user: 'sa',
      password: 'sasa',
      server: '127.0.0.1',
      database: 'TEST',
      options: {
          // encrypt: true // Use this if you're on Windows Azure
      },
      pool: {
          max: 10,
          min: 1,
          idleTimeoutMillis: 30000
      }
  },
  conn2: {
      user: 'sa',
      password: 'sasa',
      server: '127.0.0.1',
      database: 'CHI',
      options: {
          // encrypt: true // Use this if you're on Windows Azure
      },
      pool: {
          max: 10,
          min: 1,
          idleTimeoutMillis: 30000
      }
  }
};

module.exports.dbConfig = dbconfig;