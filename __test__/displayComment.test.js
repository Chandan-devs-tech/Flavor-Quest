import displayComment from '../src/modules/displayComment.js';

describe('displayComment', () => {
  test('should display comments with correct formatting', () => {
    // Arrangeing examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment 1' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param.innerHTML).toContain('2023-06-28 User1: Comment 1');
    expect(param.innerHTML).toContain('2023-06-29 User2: Comment 2');
    expect(param1.innerHTML).toContain('Total comment (2)');
  });

  test('should handle HTML tags in comments', () => {
    // Arrangeing examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment <strong>1</strong>' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param.innerHTML).toContain('User1: Comment <strong>1</strong>');
    expect(param1.innerHTML).toContain('Total comment (1)');
  });

  test('should handle empty comment array', () => {
    // Arrangeing examples
    const commentsArray = [];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param.innerHTML).toBe('');
    expect(param1.innerHTML).toContain('Total comment (0)');
  });

  test('should handle comments with special characters', () => {
    // Arrangeing examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment with $pecial characters!' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Another comment with #special characters?' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param.innerHTML).toContain('User1: Comment with $pecial characters!');
    expect(param.innerHTML).toContain('User2: Another comment with #special characters?');
    expect(param1.innerHTML).toContain('Total comment (2)');
  });

  test('should display correct total comment count when array length is greater than 0', () => {
    // Arrange examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment 1' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param1.innerHTML).toContain('Total comment (2)');
  });

  test('should display correct total comment count when array length is 0', () => {
    // Arrange examples
    const commentsArray = [];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param1.innerHTML).toContain('Total comment (0)');
  });

  test('should display correct total comment count when array length is 1', () => {
    // Arrange examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment 1' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param1.innerHTML).toContain('Total comment (1)');
  });

  test('should display correct total comment count when array length is greater than 10', () => {
    // Arrange examples
    const commentsArray = [
      { creation_date: '2023-06-28', username: 'User1', comment: 'Comment 1' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
      { creation_date: '2023-06-29', username: 'User2', comment: 'Comment 2' },
    ];
    const param = document.createElement('div');
    const param1 = document.createElement('div');

    // Act - calling display function
    displayComment(commentsArray, param, param1);

    // Asserting the assumptions
    expect(param1.innerHTML).toContain('Total comment (13)');
  });
});