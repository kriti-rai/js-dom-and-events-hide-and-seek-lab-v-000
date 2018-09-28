function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll(".ranked-list")
  for (let i=0; i < rankedList.length; i++) {
    children = rankedList[i].children;
    for (let j=0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector("#grand-node").getElementsByTagName('div')[3];
}
