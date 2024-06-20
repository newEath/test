const calendarEl = document.getElementById('calendar');
const date = new Date();
let currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let cnt = 1;

// カレンダーのHTML構造を生成
let calendarHtml = '<h1>' + currentYear + '/' + (currentMonth+1) + '</h1>' ;
calendarHtml += '<table><thead><tr>';
for (let i = 0; i < 7; i++) 
{
  calendarHtml += `<th>${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</th>`;
}
calendarHtml += '</tr></thead><tbody class ="getPermission1"><tr>';

for (let i = 1; i <= daysInMonth; i++) 
{
  const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
  if (i === 1) 
  {
    calendarHtml += '<tr>';
    for (let j = 0; j < dayOfWeek; j++) 
    {
      calendarHtml += '<td></td>';
    }
  }

  calendarHtml += `<td><button id = "num[i]">${i}</button></td>`;
  //numi = cnt;
  if (dayOfWeek === 6) 
  {
    calendarHtml += '</tr>';
    if (i < daysInMonth) 
    {
      calendarHtml += '<tr>';
    }
  } 
  else if (i === daysInMonth) 
  {
    for (let j = dayOfWeek + 1; j <= 6; j++) 
    {
      calendarHtml += '<td></td>';
    }
    calendarHtml += '</tr>';
  }
  //cnt++;
}
calendarHtml += '</tbody></table>';
calendarEl.innerHTML = calendarHtml;


const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
let currentDisplayedMonth = currentMonth;

function generateCalendar(year, month) 
{
  //カレンダー生成処理（サンプルコード1の内容を関数にまとめる）
  const calendarEl = document.getElementById('calendar');
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // カレンダーのHTML構造を生成
  let calendarHtml = '<h1>' + year + '/' + (month+1) + '</h1>' ;
  calendarHtml += '<table><thead><tr>';
  for (let i = 0; i < 7; i++) 
  {
    calendarHtml += `<th>${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</th>`;
  }
  calendarHtml += '</tr></thead><tbody class ="getPermission2"><tr>';

  for (let i = 1; i <= daysInMonth; i++) 
  {
    const dayOfWeek = new Date(currentYear, currentDisplayedMonth, i).getDay();
    if (i === 1) 
    {
      calendarHtml += '<tr>';
      for (let j = 0; j < dayOfWeek; j++) 
      {
        calendarHtml += '<td></td>';
      }
    }
    calendarHtml += `<td><button>${i}</button></td>`;
    if (dayOfWeek === 6) 
    {
      calendarHtml += '</tr>';
      if (i < daysInMonth) 
      {
        calendarHtml += '<tr>';
      }
    }
    else if (i === daysInMonth) 
    {
      for (let j = dayOfWeek + 1; j <= 6; j++) 
      {
        calendarHtml += '<td></td>';
      }
      calendarHtml += '</tr>';
    }
  }
  calendarHtml += '</tbody></table>';
  calendarEl.innerHTML = calendarHtml;

  var getPermission =  document.querySelector('.getPermission2');
    getPermission.addEventListener('click',() =>{
      window.confirm((currentDisplayedMonth+1)+'月'+'有給申請しますか？！');
    })
    //window.confirm("これが確認ダイアログです。");
}

prevMonthBtn.addEventListener('click', () => {
  currentDisplayedMonth--;
  if (currentDisplayedMonth < 0) {
    currentDisplayedMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentDisplayedMonth);
});

nextMonthBtn.addEventListener('click', () => {
  currentDisplayedMonth++;
  if (currentDisplayedMonth > 11) 
  {
    currentDisplayedMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentDisplayedMonth);
  
});

var getPermission =  document.querySelector('.getPermission1');
getPermission.addEventListener('click',() =>{
  window.confirm((currentDisplayedMonth+1)+'月'+'有給申請しますか？！');
})