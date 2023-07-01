/* eslint-disable no-alert */

import { involvementCommentUrl } from './apiData.js';

const setComment = async (param1, param2, param3) => {
  if (param2 && param3) {
    const commentData = {
      item_id: param1,
      username: param2,
      comment: param3,
    };

    await fetch(involvementCommentUrl, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } else if (!param2 || !param3) {
    alert('Please fill all the fields.');
  }
};

const getComments = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const response = await fetch(
    `${involvementCommentUrl}?item_id=${id}`,
    options,
  );

  const comments = await response.json();
  if (comments.length > 0) {
    return comments;
  } else {return []}
  // return (comments.length > 0) ? comments : [];
};

// const displayComment = (commentsArray, param, param1) => {
//   param.innerHTML = '';
//   commentsArray.forEach((element) => {
//     param.innerHTML += `<div>${element.creation_date} ${element.username}: ${element.comment}</div>`;
//     param1.innerHTML = `Total comment (${commentsArray.length})`;
//   });
// };

export { setComment, getComments };
