function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll("#app .ranked-list")
  for (let i=0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i], 10) + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node").getElementsByTagName('div')[3];
}
