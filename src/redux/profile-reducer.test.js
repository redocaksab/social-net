import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ]
};

it('new post should be added', () => {
    let action = addPostActionCreator("Sasha");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('expect message', () => {

    let action = addPostActionCreator("Sasha");
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("Sasha");
});
it('length after deleting post', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
  });
