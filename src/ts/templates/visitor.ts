export default `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{TITLE}}</title>
    <style>
      p {
        margin: 0;
        padding: 0;
      }
      @media print {
        .noprint {
          visibility: hidden;
        }
      }
    </style>
  </head>
  <body>
    <div
      id="content"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 110mm;
        width: 90mm;
      "
    >
      <div
        style="
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.25rem 0;
        "
      >
        <!-- <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/logo.64eb79482472c6.82188983.png"
          alt="logo"
          width="25%"
          height="auto"
        />
        <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/event.64eb79958a0c19.00787423.png"
          alt="event"
          width="60%"
          height="auto"
        /> -->
      </div>
      <div
        style="
          position: relative;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            text-align: center;
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10%;
          "
        >
          {{NAME}}
        </p>
        <p style="text-align: center; font-size: 1.6em; margin-bottom: 10%">
          {{COMPANY_NAME}}
        </p>
        <p style="text-align: center; font-size: 1.4em; margin-bottom: 10%">
          {{POSITION}}
        </p>
        <p style="text-align: center; font-size: 1.1em">{{EMAIL}}</p>
      </div>
      <div
        style="
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          padding: 0.25rem 0;
        "
      >
        <!-- <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/visitors.64eb7e6e22edd2.67592690.png"
          alt="exhibitor"
          width="45%"
          height="auto"
        />
        <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/date.64eb79cfaae2b5.05329451.png"
          alt="date"
          width="45%"
          height="auto"
        /> -->
      </div>
    </div>

    <div
      class="noprint"
      style="
        position: relative;
        margin: 60px auto 0 auto;
        display: flex;
        flex-direction: column;
      "
    >
      <div style="position: relative; display: flex; flex-direction: column">
        <span>العرض</span>
        <input id="width" type="number" />
      </div>
      <div style="width: 10px"></div>
      <div style="display: flex; flex-direction: column">
        <span>الطول</span>
        <input id="height" type="number" />
      </div>
    </div>
  </body>

  <script>
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const content = document.getElementById('content');

    if (width) {
      width.value = 90;
    }
    if (height) {
      height.value = 120;
    }

    width.addEventListener('change', e => {
      content.style.width = e.target.value + 'mm';
    });
    height.addEventListener('change', e => {
      content.style.height = e.target.value + 'mm';
    });
  </script>
</html>
`;
