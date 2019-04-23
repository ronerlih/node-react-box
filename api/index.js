import sorter from './sorter';
import express from 'express';
const router = express.Router();
let data = {
  items: {
    1: { title: 'Item one' },
    2: { title: 'Item two' },
  }
};

router.get('/items', (req, res) => {
  data = sorter( data );
  res.send(data);
});

export default router;
