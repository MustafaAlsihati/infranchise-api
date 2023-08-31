import { Router } from 'express';
import BusinessMeetingTemplate from '../ts/templates/business_meeting';
import ExhibitorTemplate from '../ts/templates/exhibitor';
import VisitorTemplate from '../ts/templates/visitor';
import { fetchData } from '../ts/googleSheetService';
import { Business, Exhibitor, Visitor } from '../ts/types';

const router = Router();

router.get('/business', async (_, res) => {
  try {
    const data = await fetchData<Business>(
      '108sf5dRF178MMOZ4hz9CFqG3zO6Wln_ZA-b4DFJGOeA',
      'Form Responses',
    );
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/exhibitors', async (_, res) => {
  try {
    const data = await fetchData<Exhibitor>(
      '1iDfQLJgAOscULs09-Ez5pJ7QPZaLgyYgw_OtbpaF9w4',
      'Form Responses',
    );
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/visitors', async (_, res) => {
  try {
    const data = await fetchData<Visitor>(
      '1hAfMYOeabSJ1MXJl1U0Q2XgGrI1R2n7BVi_PjY_xwWE',
      'Form Responses',
    );
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/cards/business/:id', async (req, res) => {
  try {
    const data = await fetchData<Business>(
      '108sf5dRF178MMOZ4hz9CFqG3zO6Wln_ZA-b4DFJGOeA',
      'Form Responses',
    );
    const business = data.find(item => item['Submission ID'] === req.params.id);
    if (!business) {
      throw new Error('Business not found');
    }

    let html = BusinessMeetingTemplate;
    // html = html.replace('{{TITLE}}', '');
    // html = html.replace('{{NAME}}', '');
    // html = html.replace('{{COMPANY_NAME}}', '');
    // html = html.replace('{{POSITION}}', '');
    // html = html.replace('{{EMAIL}}', '');

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/cards/exhibitor/:id', async (req, res) => {
  try {
    const data = await fetchData<Exhibitor>(
      '1iDfQLJgAOscULs09-Ez5pJ7QPZaLgyYgw_OtbpaF9w4',
      'Form Responses',
    );
    const exhibitor = data.find(
      item => item['Submission ID'] === req.params.id,
    );
    if (!exhibitor) {
      throw new Error('Exhibitor not found');
    }

    let html = ExhibitorTemplate;
    // html = html.replace('{{TITLE}}', '');
    // html = html.replace('{{NAME}}', '');
    // html = html.replace('{{COMPANY_NAME}}', '');
    // html = html.replace('{{POSITION}}', '');
    // html = html.replace('{{EMAIL}}', '');

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/cards/visitor/:id', async (req, res) => {
  try {
    const data = await fetchData<Visitor>(
      '1hAfMYOeabSJ1MXJl1U0Q2XgGrI1R2n7BVi_PjY_xwWE',
      'Form Responses',
    );
    const visitor = data.find(item => item['Unique ID'] === req.params.id);
    if (!visitor) {
      throw new Error('Visitor not found');
    }

    let html = VisitorTemplate;
    // html = html.replace('{{TITLE}}', '');
    // html = html.replace('{{NAME}}', '');
    // html = html.replace('{{COMPANY_NAME}}', '');
    // html = html.replace('{{POSITION}}', '');
    // html = html.replace('{{EMAIL}}', '');

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
