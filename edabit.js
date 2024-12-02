const done = [
  '6AnQqiEjkJdZrWhPS', // irrelevant
  'wAdE9te55cowBLcPs', // irrelevant
  'j7yQbF3J3rToHsDBP', // irrelevant
  '3CaszbdZYGN4otQD8', // irrelevant
  'qMr6wYGr6NaXAPQGF', // irrelevant
  'NKknKNfeaJxLDfJuZ', // irrelevant
  '9TWhGHCeytQEBCbc9', // irrelevant
  'pKSS2rNDiXh4MoNpe', // irrelevant
  'fh9i7k936rvfjnCYR', // irrelevant
  'GwvwXHWCThHZrR7xu', // irrelevant
  'bL7hSc6Zh4zZJzGmw', // irrelevant
  'ks3vMrqdnW3CQ3F4i', // irrelevant
  'nkp5xkZwbBH5Ape8b', // irrelevant
  '8q54MKnRrm89pSLmW', // irrelevant
  'NAQhEoxbofPidLxm9', // irrelevant
  'QaApgtePE6QrCZ64o', // irrelevant
  'ARr5tA458o2tC9FTN', // irrelevant
  '3LpBLgNRyaHMvNb4j', // irrelevant
  'BFnsRqe8PFvEwcRNt', // irrelevant
  '654ABGmNS5GqscE8C', // irrelevant
  'jipHTDkabftop5irE', // irrelevant
  'sWAEoTbXA4bexBPb6', // irrelevant
  'BLJ5SyhMoZD892G7w', // irrelevant
  'CzPEsTuXfE8J8vknX', // irrelevant
  'ZZ82YaHmPZRewQNYH', // irrelevant
  'pEzxi4MqHGrAi7ZdA', // irrelevant
  'z6Pxiw289JtaE2ndL', // irrelevant
  'NMdKxEradTmpNnomZ', // irrelevant
  'MQL7KSftPQzrxdJw6', // irrelevant
  'w7BYrKiiszu5eJkuc', // irrelevant
  'TihiK4mBiYsdGuR5H', // irrelevant
  'QWmvQsrSuQRmEN8ne', // irrelevant
  'wJuXYhgetMtD4Gezj', // irrelevant
  'rTDLyF5itdoubs9ka', // irrelevant
  'STfAEAE5fjNmFCsvf', // irrelevant
  'M9EfvGwTqvSZ5XbRM', // irrelevant
  'wpHyrxbSaYxLeXT6L', // irrelevant
  'pzmTaGsP6FWRNBF9y', // irrelevant
  'B9yPEStmax7Jxb9Dj', // irrelevant
  'bvPBzNq9FutDb2X6J', // irrelevant
  '9cB7BgGkeDcKwwhxX', // irrelevant
  'HBNwoHQJn5uTWJCgM', // irrelevant
  'ciuEF8N3NNegxbasd', // irrelevant
  'mN98zKeSSLnXwKz8C', // irrelevant
  '7hrjegxToTSF4zAoM', // irrelevant
  '8xAvdyphm83tzKCKt', // irrelevant
  'yks7uNNSRJFWDuj3m', // irrelevant
  'MT5SbF9Xg5Dku6bqL', // irrelevant
  'pDc7MLcGYzhCW6wRf', // irrelevant
  '5cGbZP8N9mQXzDwML', // irrelevant
  'xwNSxpGzwRh3brHQf', // irrelevant
  'FvXHdrhjLaof47Qt3', // very easy
  'kJQYTCCWSnzhXG9dn', // very easy
  '7JBTN4TbaxJQMdX9W', // very easy
  '9ApjPggCLGiPt573m', // very easy
  'SwyjHvkqwwQ2iJsoS', // very easy
  '9YPqr4rNaYy8Ynrry', // very easy
  'NkMTBCxMkt4meHpa4', // very easy
  'RxsaajpPai3CB9G9e', // very easy
  '8zbTPvexR9Aei3Csp', // very easy
  '2v2FPyt9bhkLm4st6', // very easy
  'y6dMjvNaPXXNKeBRQ', // very easy
  '9mKB2XJJ9gYgjms4Z', // very easy
  'dgf76hmQ5Yw4FATFi', // very easy
  'izss6QT59oH72uky3', // very easy
  'XKX5NHT92okxXCKW7', // very easy
  '3BqLw3Rp85Y94nAho', // very easy
  'HFBYPP8gSRn2n9qrQ', // very easy
  'rThajiu3LF7qiKpv9', // very easy
  'L395zsraDGkjQCSpC', // very easy
  'mptt94wPwNxqJJzgr', // very easy
  '5L368ypvh5ZZ2HJSL', // easy
  '9wL6dXj2tKNCe5pFz', // easy
  '3pJCxeSiKFC9gKtYt', // easy
  'zHutBxQaWvzhzGgxL', // easy
  'webH9q8JMHc6SmTpY', // easy
  'iuLDXd4mTgcCeTjhM', // easy
  'ado29iTz4EGfzY2EP', // easy
  'AhFCvDdQeA7TnKSqe', // easy
  'qWhoswdp35f8xzqGw', // easy
  'WR3Q72Jbv7Kyzu6AT', // easy
  'udRB96tKMz43nhGkS', // 👍 easy
  'rqu2efZF7N2MEYDWk', // 👍 easy
  'EEWcSX7Rz5cWzes5d', // 👍 easy
  'fzF6JqF7JjtJok9jY', // 👍 easy
  '5RiZh6yJKeGEo4P3z', // 👍👍 easy
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

done.length;
