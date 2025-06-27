
import express from 'express';

import transactionsRoutes from './routes/transactions.route.ts';

const app = express();

const port = 3000

app.use('/transactions', transactionsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})