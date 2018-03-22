const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
}

const coolPlaces = [
    {
        name: 'Northern California',
        imgURL:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_NC_T1_RedwoodNP_Manley-sized.jpg',
        description: ,
        id: 'noCal'
    },
    {
        name: 'Jordan',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1eq7dTuR1N-FBTK3SukoK0qFZzIVvT6aLoU-5NkApCDzZp-EXA',
        description: ,
        id: 'jordan'
    },
    {
        name: 'Abu Dhabi',
        imgURL: 'https://www.khaleejtimes.com/storyimage/KT/20180131/ARTICLE/180139817/AR/0/AR-180139817.jpg&NCS_modified=&imageversion=1by1&exif=.jpg',
        description: ,
        id: 'abuDhabi'
    },
    {
        name: 'Tanzania',
        imgURL: 'https://gorillasofuganda.com/wp-content/uploads/2013/06/Tanzania_Safari_Of_Tanzania.jpg',
        description: ,
        id: 'tanzania'
    },
    {
        name: 'South Korea',
        imgURL: 'https://www.studyabroad.com/sites/default/files/images/1222.south-korea-study-abroad-in-south-korea.jpg',
        description: ,
        id: 'southKorea'
    },
    {
        name: 'Florida',
        imgURL: 'http://www.nln.org/images/default-source/default-album/o-welcome-to-florida-facebook.jpg?sfvrsn=0',
        description: ,
        id: 'florida'
    }
];