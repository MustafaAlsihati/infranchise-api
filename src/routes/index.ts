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

    business['First Name'] = business['First Name'].trim();
    business['Last Name'] = business['Last Name'].trim();
    business['Company'] = business['Company'].trim();
    business['Job Title'] = business['Job Title'].trim();
    business['Email'] = business['Email'].trim();

    const username = business['First Name'] + ' ' + business['Last Name'];

    let html = BusinessMeetingTemplate;
    html = html.replace('{{TITLE}}', username);
    html = html.replace('{{NAME}}', username);
    html = html.replace('{{COMPANY_NAME}}', business['Company']);
    html = html.replace('{{POSITION}}', business['Job Title']);
    html = html.replace('{{EMAIL}}', business['Email']);

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

    exhibitor['First Name'] = exhibitor['First Name'].trim();
    exhibitor['Last Name'] = exhibitor['Last Name'].trim();
    exhibitor['Company Name'] = exhibitor['Company Name'].trim();
    exhibitor['Brand Name'] = exhibitor['Brand Name'].trim();
    exhibitor['Email'] = exhibitor['Email'].trim();

    const username = exhibitor['First Name'] + ' ' + exhibitor['Last Name'];

    let html = ExhibitorTemplate;
    html = html.replace('{{TITLE}}', username);
    html = html.replace('{{NAME}}', username);
    html = html.replace('{{COMPANY_NAME}}', exhibitor['Company Name']);
    html = html.replace('{{POSITION}}', exhibitor['Brand Name']);
    html = html.replace('{{EMAIL}}', exhibitor['Email']);

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

    visitor['Name'] = visitor['Name'].trim();
    visitor['Company Name'] = visitor['Company Name'].trim();
    visitor['Occupation'] = visitor['Occupation'].trim();
    visitor['Email'] = visitor['Email'].trim();

    let html = VisitorTemplate;
    html = html.replace('{{TITLE}}', visitor['Name']);
    html = html.replace('{{NAME}}', visitor['Name']);
    html = html.replace('{{COMPANY_NAME}}', visitor['Company Name']);
    html = html.replace('{{POSITION}}', '');
    html = html.replace('{{EMAIL}}', visitor['Email']);

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
