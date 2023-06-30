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
      }
    //   else {
    //     console.error('Error submitting comment');
    //   }

      // const json = await response.json();
      // return json;
    } catch (error) {
      console.error('Error submitting comment', error);
    }
    }
//     else {
//     console.error('Please provide a name and comment');
//   }
};

export default setComment;