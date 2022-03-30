/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

const elementForTable = document.querySelector('.container');

function createCalendar(elem, year, month) {
  let str = `<table cellspacing="0px">
    <tr>
      <th><div class="cell">пн</div></th>
      <th><div class="cell">вт</div></th>
      <th><div class="cell">ср</div></th>
      <th><div class="cell">чт</div></th>
      <th><div class="cell">пт</div></th>
      <th><div class="cell">сб</div></th>
      <th><div class="cell">вс</div></th>
    </tr>
    <tr>`;

  let voidDays = (new Date(`${month}.${1}.${year}`).getDay()) - 1;
  if (voidDays === -1) {
    str += `<td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>`;
  }
  while (voidDays > 0) {
    str += '<td></td>';
    voidDays--;
  }

  for (let i = 1; i < 32; ++i) {
    const newDay = new Date(`${month}.${i}.${year}`);

    if (newDay.getMonth() >= month) {
      voidDays = 8 - newDay.getDay();
      while (voidDays > 0 && voidDays < 7) {
        str += '<td></td>';
        voidDays--;
      }
      break;
    }
    if (newDay.getDay() === 1) {
      str += `</tr>
      <tr>`;
    }
    str += `<td>
      <div class="cell">${i}</div>
    </td>`;
    if (i === 31) {
      voidDays = 7 - newDay.getDay();
      while (voidDays > 0 && voidDays < 7) {
        str += '<td></td>';
        voidDays--;
      }
    }
  }

  str += `  </tr>
  </table>`;
  elem.innerHTML = str;
}

createCalendar(elementForTable, 2021, 10);
