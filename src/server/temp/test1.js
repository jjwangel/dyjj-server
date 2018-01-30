const log4js = require('log4js');

const log_config = require('../../config/log-config');

//加载配置文件
log4js.configure(log_config);

const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');

errorLogger.error('eeeee');
resLogger.info('aaaaaa');