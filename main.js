const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
}

const coolPlaces = [
    {
        name: 'Northern California',
        imgURL:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_NC_T1_RedwoodNP_Manley-sized.jpg',
        description: 'Northern California, often abbreviated NorCal, is the northern portion of the U.S. state of California.',
        id: 'noCal'
    },
    {
        name: 'Jordan',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1eq7dTuR1N-FBTK3SukoK0qFZzIVvT6aLoU-5NkApCDzZp-EXA',
        description: 'Jordan is a sovereign Arab state in western Asia, on the East Bank of the Jordan River.',
        id: 'jordan'
    },
    {
        name: 'Abu Dhabi',
        imgURL: 'https://www.khaleejtimes.com/storyimage/KT/20180131/ARTICLE/180139817/AR/0/AR-180139817.jpg&NCS_modified=&imageversion=1by1&exif=.jpg',
        description: 'Abu Dhabi is the capital and the second most populous city of the United Arab Emirates',
        id: 'abuDhabi'
    },
    {
        name: 'Tanzania',
        imgURL: 'https://gorillasofuganda.com/wp-content/uploads/2013/06/Tanzania_Safari_Of_Tanzania.jpg',
        description: 'Tanzania officially the United Republic of Tanzania, is a sovereign state in eastern Africa within the African Great Lakes region.',
        id: 'tanzania'
    },
    {
        name: 'South Korea',
        imgURL: 'https://www.studyabroad.com/sites/default/files/images/1222.south-korea-study-abroad-in-south-korea.jpg',
        description: 'South Korea, officially the Republic of Korea (abbreviated ROK), is a sovereign state in East Asia constituting the southern part of the Korean Peninsula.',
        id: 'southKorea'
    },
    {
        name: 'Florida',
        imgURL: 'http://www.nln.org/images/default-source/default-album/o-welcome-to-florida-facebook.jpg?sfvrsn=0',
        description: 'Florida is the southernmost contiguous state in the United States.',
        id: 'florida'
    }
];


const cardPrint = (placesArray) => {
    let domString = '';
    placesArray.forEach((place) => {
        domString += `<div class="card">`;
        domString +=    `<h4>${place.name}</h4>`;
        domString +=    `<img src="${place.imgURL}">`;
        domString +=    `<textarea class="input" rows="10" cols="38">${place.description}</textarea>`;
        domString +=    `<button class="card-btn" id="${place.id}">Submit</button>`;
        domString += `</div>`
        printToDom(domString, "card-holder");
    });
}

cardPrint(coolPlaces);

let inputBox = document.getElementsByClassName("input");
const allMyButtons = document.getElementsByClassName("card-btn");

const diaryStringMaker = (place, input) => {
    let diaryEntry = `<div class="diary-card">`;
    diaryEntry +=        `<h3>${place.innerHTML}</h3>`;
    diaryEntry +=         `<p>${input}</p>`;
    diaryEntry +=        `<button>Edit</button>`;
    diaryEntry +=        `<button>Delete</button>`;
    diaryEntry +=    `</div>`;
    printToDom(diaryEntry, "diary-entry");
};

for (let i = 0; i < allMyButtons.length; i++){
    allMyButtons[i].addEventListener('click', (e) => {
        let userInput = '';
        let location = '';
        if (e.target.id === 'noCal'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        } else if (e.target.id === 'jordan'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        } else if (e.target.id === 'abuDhabi'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        } else if (e.target.id === 'tanzania'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        } else if (e.target.id === 'southKorea'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        } else if (e.target.id === 'florida'){
            userInput = e.target.parentNode.children[2].innerHTML;
            location = e.target.parentNode.children[0];
            diaryStringMaker(location, userInput);
        }
    })
}
