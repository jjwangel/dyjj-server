module.exports.dbConfig = {
  uf_account: {
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
  uf_system: {
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
  },
  application: {
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
  },
};