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
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120mm;
        width: 90mm;
      "
    >
      <div
        style="
          position: relative;
          background-color: #9dc43c;
          height: 2rem;
          width: 100%;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem;
        "
      ></div>
      <p
        style="
          position: relative;
          color: #0b7575;
          font-size: 2.5em;
          font-weight: bold;
          margin: 0;
          margin-top: 1rem;
          padding: 0;
          text-transform: uppercase;
          text-align: center;
        "
      >
        Business Meeting
      </p>
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
        "
      >
        <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/logo.64eb79482472c6.82188983.png"
          alt="logo"
          width="25%"
          height="auto"
        />
        <img
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/national_franchise.64eb7e8cd05b89.44805232.png"
          alt="logo"
          width="45%"
          height="auto"
        />
      </div>
    </div>
    <div
      style="
        position: relative;
        margin: 60px auto 0 auto;
        display: flex;
        flex-direction: row;
      "
    >
      <div
        class="noprint"
        style="
          position: relative;
          margin: 60px auto 0 auto;
          display: flex;
          flex-direction: column;
        "
      >
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

    width.addEventListener('change', e => {
      content.style.width = e.target.value + 'mm';
    });
    height.addEventListener('change', e => {
      content.style.height = e.target.value + 'mm';
    });
  </script>
</html>
`;
