//we can give any dimensional array manually to s as 1 for alive and 0 for dead

const s = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
];
const result = JSON.parse(JSON.stringify(s));
console.log('given grid is:-\n');
console.log(s);

//counting the number of living counts

const check = (arr, i, j) => {
  let a = i + 1,
    b = i - 1,
    c = j + 1,
    d = j - 1;
  let lenarr = arr.length,
    livingcount = 0;
  if (b >= 0 && d >= 0) {
    if (arr[b][d] == 1) {
      livingcount += 1;
    }
  }
  if (b >= 0) {
    if (arr[b][j] == 1) {
      livingcount += 1;
    }
  }
  if (b >= 0 && c < lenarr) {
    if (arr[b][c] == 1) {
      livingcount += 1;
    }
  }
  if (d >= 0) {
    if (arr[i][d] == 1) {
      livingcount += 1;
    }
  }
  if (c < lenarr) {
    if (arr[i][c] == 1) {
      livingcount += 1;
    }
  }
  if (a < lenarr && d >= 0) {
    if (arr[a][d] == 1) {
      livingcount += 1;
    }
  }
  if (a < lenarr) {
    if (arr[a][j] == 1) {
      livingcount += 1;
    }
  }
  if (a < lenarr && c < lenarr) {
    if (arr[a][c] == 1) {
      livingcount += 1;
    }
  }
  return setstatus(arr[i][j], livingcount, i, j);
};

//checking the status of element based on livecount from check function

const setstatus = (elements, livingcount, i, j) => {
  if (elements == 1 && (livingcount == 2 || livingcount == 3)) {
    result[i][j] = 'X';
    return;
  } else if (elements == 1 && (livingcount < 2 || livingcount > 3)) {
    result[i][j] = '-';
    return;
  }
  if (elements == 0 && livingcount == 3) {
    result[i][j] = 'X';
  }
  if (elements == 0 && (livingcount > 3 || livingcount < 3)) {
    result[i][j] = '-';
  }
};

const giveeachelement = (arr) => {
  let paramarray = arr;
  const lengtharr = s[0].length;
  let i = 0,
    j = 0;
  while (i < lengtharr) {
    j = 0;
    while (j < lengtharr) {
      check(paramarray, i, j);
      j += 1;
    }
    i += 1;
  }
};
giveeachelement(s);
console.log('value of result is');
console.log(result);
