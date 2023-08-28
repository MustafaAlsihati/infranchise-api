import { Router } from 'express';

const router = Router();

router.post('/form/business', (req, res) => {
  try {
    // todo: create webhook logic and send email for business card
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/form/exhibitor', (req, res) => {
  try {
    // todo: create webhook logic and send email for exhibitor card
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/form/visitor', (req, res) => {
  try {
    // todo: create webhook logic and send email for visitor card
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
