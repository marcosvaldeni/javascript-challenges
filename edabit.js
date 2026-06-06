const done = [
  'ARr5tA458o2tC9FTN', // irrelevant
  '3LpBLgNRyaHMvNb4j', // irrelevant
  '8q54MKnRrm89pSLmW', // irrelevant
  'NAQhEoxbofPidLxm9', // irrelevant
  '3CaszbdZYGN4otQD8', // irrelevant
  'bL7hSc6Zh4zZJzGmw', // irrelevant
  'j7yQbF3J3rToHsDBP', // irrelevant
  'QaApgtePE6QrCZ64o', // irrelevant
  'wAdE9te55cowBLcPs', // irrelevant
  '6AnQqiEjkJdZrWhPS', // irrelevant
  'nhXofMMyrowMyr9Nv', // irrelevant
  'Q2j5FTFtsk7PdzrQk', // irrelevant
  'XnJ24rWW7iJkNrtsh', // irrelevant
  'MvZK536X7fyrWH8Qc', // irrelevant
  'ks3vMrqdnW3CQ3F4i', // irrelevant
  'PTiLYyb4A69KZtBCg', // irrelevant
  'fBJyQSe5Jmbm9hPAG', // irrelevant
];

const listExercises = document.querySelectorAll('[role="listitem"]');

listExercises.forEach((e) => {

  const a = e.querySelector('a');

  if (a && done.some(i => i === a.href.split('/').slice(-1)[0])) {

    let tags = e.querySelector('.tags');

    const isAlredyThere = tags.querySelector('.green');

    if (!isAlredyThere) {
      const span = document.createElement('span');
      span.textContent = 'complete';
      const div = document.createElement('div');
      div.classList.add('ui', 'green', 'label');
      div.appendChild(span);

      tags.insertBefore(div, tags.firstChild);
    }
  }
});

done[Math.round(Math.random() * done.length)];
