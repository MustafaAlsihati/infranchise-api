export default function <T>(
  headers: (keyof T)[],
  rows: T[],
  card_type: 'visitor' | 'exhibitor' | 'business',
  title: string,
) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            ${headers.forEach(header => {
              return `<th>${String(header)}</th>`;
            })}
          </tr>
          <th>Card</th>
        </thead>
        <tbody>
          ${rows.forEach(row => {
            let _row = '<tr>';
            headers.forEach(column => {
              _row += `<td>${row[column]}</td>`;
            });
            _row += `<td>
                <a href="/cards/${card_type}/${row['Submission ID']}">Click To View Card</a>
              </td>
            </tr>`;
            return _row;
          })}
        </tbody>
      </table>
    </body>
  </html>
  `;
}
