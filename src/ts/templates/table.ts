export default function <T>(
  rows: T[],
  headers: (keyof T)[],
  card_type: 'visitor' | 'exhibitor' | 'business' | 'people',
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
        <tr>
            ${headers.map(header => {
              return `<th>${String(header)}</th>`;
            })}
          <th>Card</th>
        </tr>
        <tr>
          ${rows.map(row => {
            let _row = '<tr>';
            headers.map(column => {
              _row += `<td>${row[column]}</td>`;
            });
            _row += `<td>
                <a href="/cards/${card_type}/${row['Company']}">Click To View Card</a>
              </td>
            </tr>`;
            return _row;
          })}
        </tr>
      </table>
    </body>
  </html>
  `;
}
