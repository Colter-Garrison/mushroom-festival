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
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    const name = friendInputEl.value || Math.random().toString(36).slice(2, 7);
    const newFriend = { name, satisfaction: 1 };
    friendData.push(newFriend);
    friendInputEl.textContent = ' ';
    displayFriends();
    console.log(friendData);
});

function displayFriends() {
    friendsEl.textContent = ' ';
    for (let friend of friendData) {
        const friendElList = renderFriend(friend);
        friendElList.addEventListener('click', () => {
            if (mushroomCount === 0) {
                alert('You have no mushrooms! Go forage for more!');
            } else if (mushroomCount > 0 && friend.satisfaction < 5) {
                friend.satisfaction++;
                mushroomCount--;

                displayFriends();
                displayMushrooms();
            }
            console.log(friendData);
        });
        friendsEl.append(friendElList);
    }
}

function displayMushrooms() {
    mushroomsEl.textContent = ' ';
    for (let i = 0; i < mushroomCount; i++) {
        const mushroom = renderMushroom(i);
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();