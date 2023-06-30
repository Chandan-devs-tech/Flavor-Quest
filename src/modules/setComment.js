/* eslint-disable no-console no-alert */
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

      if (response.ok) {
        console.log('Comment submitted successfully');
        console.log(commentData);
        alert('Your comment is received.');
      } else {
        alert('Please fill all the fields.');
      }
    } catch (error) {
      console.error('Error submitting comment', error);
    }
  } else if (!param2 || !param3) {
    alert('Please fill all the fields.');
    console.error('Error submitting comment');
  }
};

export default setComment;
