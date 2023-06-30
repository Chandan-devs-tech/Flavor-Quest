/* eslint-disable no-console */
/* eslint-disable no-alert */
import { involvementCommentUrl } from './apiData.js';

const setComment = async (param1, param2, param3) => {
  if (param2 && param3) {
    const commentData = {
      item_id: param1,
      username: param2,
      comment: param3,
    };

    try {
      const response = await fetch(involvementCommentUrl, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      // if (response.ok) {
      //   console.log('Comment submitted successfully');
      //   console.log(commentData);
      //   alert('Your comment is received.');
      // } else {
      //   alert('Please fill all the fields.');
      // }
    } catch (error) {
      console.error('Error submitting comment', error);
    }
  } else if (!param2 || !param3) {
    alert('Please fill all the fields.');
  }
};

const getComments = async (id) => {
  // try {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response = await fetch(`${involvementCommentUrl}?item_id=${id}`, options);

    const comments = response.json();
    console.log('This is the response', comments);
    return comments;
  // } catch (error) {
  //   console.error('Error fetching comments', error);
  // }
};

// const getComments = async (id) => {
//   const result = await fetch(`${involvementCommentUrl}?item_id=${id}`);
//   const { comment } = await result.json();
//   return comment;
// };

const displayComment = (commentsArray, param, param1) => {
  param.innerHTML = '';
  commentsArray.forEach(element => {
    param.innerHTML += `<div>${element.creation_date} ${element.username} 'Says,' ${element.comment}</div>`;
    param1.innerHTML = `Total comment (${commentsArray.length})`;
    // param1.textContent = element.comment;
  });
  // const [username, comment] = commentsArray;
  // param.textContent = comment;
  // param1.textContent = username;
}

export { setComment, getComments, displayComment };
