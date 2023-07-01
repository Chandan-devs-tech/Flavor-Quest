const displayComment = (commentsArray, param, param1) => {
  if (commentsArray.length > 0) {
    param.innerHTML = '';
    commentsArray.forEach((element) => {
      param.innerHTML += `<div>${element.creation_date} ${element.username}: ${element.comment}</div>`;
      param1.innerHTML = `Total comment (${commentsArray.length})`;
    });
  } else {
    param1.innerHTML = `Total comment (${commentsArray.length})`;
  }
};

export default displayComment;
