require('module-alias/register');
const http = require('http'),
      BudgetManagerAPI = require('@BudgetManagerAPI'),
      BudgetManagerServer = http.Server(BudgetManagerAPI),
      BudgetManagerPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));
