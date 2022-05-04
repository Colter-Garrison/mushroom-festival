// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    console.log('clicking add mushroom button');
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const name = friendInputEl.value;
    const newFriend = { name, satisfaction: 1 };
    friendData.push(newFriend);
    friendInputEl.textContent = ' ';
    displayFriends();
    console.log(friendData);
    // create a new friend object
    // push it into the friends state array, passed in as an argument
    // reset the input
    // display all the friends (use a function here)
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = ' ';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const friendElList = renderFriend(friend);
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        friendElList.addEventListener('click', () => {
            if (mushroomCount === 0) {
                alert('You have no mushrooms!');
            } else if (mushroomCount > 0 && friend.satisfaction < 3) {
                friend.satisfaction++;
                mushroomCount--;

                displayFriends();
                displayMushrooms();
            }  
            console.log(friendData);
        });
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        friendsEl.append(friendElList);
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state

        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = ' ';
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroom = renderMushroom(i);
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();
