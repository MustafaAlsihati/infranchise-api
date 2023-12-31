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
      .print-btn {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
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
          id="name"
          style="
            text-align: center;
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 5%;
          "
        >
          {{NAME}}
        </p>
        <p
          id="company_name"
          style="text-align: center; font-size: 1.6em; margin-bottom: 5%"
        >
          {{COMPANY_NAME}}
        </p>
        <p
          id="position"
          style="text-align: center; font-size: 1.4em; margin-bottom: 5%"
        >
          {{POSITION}}
        </p>
        <p id="email" style="text-align: center; font-size: 1.1em">{{EMAIL}}</p>
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
          src="https://www.jotform.com/uploads/3dimensionsme/form_files/exhibitor.64eb79b1a719e7.60720993.png"
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
        flex-direction: row;
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

    <div
      class="noprint"
      style="
        position: relative;
        margin: 20px auto 0 auto;
        display: flex;
        flex-direction: column;
      "
    >
      <div style="position: relative; display: flex; flex-direction: column">
        <button class="print-btn" onclick="onPrint()">طباعة</button>
      </div>
      <div style="position: relative; display: flex; flex-direction: column">
        <span>الإسم</span>
        <input id="name_input" type="text" />
      </div>
      <div style="height: 10px"></div>
      <div style="display: flex; flex-direction: column">
        <span>الشركة</span>
        <input id="company_input" type="text" />
      </div>
      <div style="height: 10px"></div>
      <div style="display: flex; flex-direction: column">
        <span>المنصب</span>
        <input id="position_input" type="text" />
      </div>
      <div style="height: 10px"></div>
      <div style="display: flex; flex-direction: column">
        <span>الإيميل</span>
        <input id="email_input" type="text" />
      </div>
    </div>
  </body>

  <script>
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const content = document.getElementById('content');

    const name_input = document.getElementById('name_input');
    const company_input = document.getElementById('company_input');
    const position_input = document.getElementById('position_input');
    const email_input = document.getElementById('email_input');

    const name = document.getElementById('name');
    const companyName = document.getElementById('company_name');
    const position = document.getElementById('position');
    const email = document.getElementById('email');

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

    name_input.addEventListener('change', e => {
      name.innerHTML = e.target.value;
    });
    company_input.addEventListener('change', e => {
      companyName.innerHTML = e.target.value;
    });
    position_input.addEventListener('change', e => {
      position.innerHTML = e.target.value;
    });
    email_input.addEventListener('change', e => {
      email.innerHTML = e.target.value;
    });

    function onPrint() {
      window.print();
    }
  </script>
</html>
`;
