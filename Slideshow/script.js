

let index=0;


next.addEventListener('click', () => {
    index++;
    if (index >= show.children.length) {
      index = 0;
    }
    for (let i = 0; i < show.children.length; i++) {
      show.children[i].classList.remove('active');
    }
    show.children[index].classList.add('active');
  });
  back.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = show.children.length-1;
    }
    for (let i = 0; i < show.children.length; i++) {
      show.children[i].classList.remove('active');
    }
    show.children[index].classList.add('active');
  });