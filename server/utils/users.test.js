const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Joro',
      room: 'Node.js'
    }, {
      id: '2',
      name: 'Tim',
      room: 'React'
    }, {
      id: '3',
      name: 'Peter',
      room: 'Node.js'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names given room name - node.js', () => {
    const userList = users.getUserList('Node.js');
    expect(userList).toEqual(['Joro', 'Peter']);
  });

  it('should return names given room name - react', () => {
    const userList = users.getUserList('React');
    expect(userList).toEqual(['Tim']);
  });

  it('should remove a user', () => {
    const userId = '3';
    const user = users.removeUser(userId);
    
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user with invalid id', () => {
    const userId = '99';
    const user = users.removeUser(userId);
    
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '4';
    const user = users.getUser(userId);

    expect(user).toNotExist();
  });
});
