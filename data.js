const users =[
    {
        name:"test--1"
    },
    {
        name:"test--2"
    },
    {
        name:"test--3"
    },
    {
        name:"test--4"
    },
    {
        name:"test--5"
    },
    {
        name:"test--6"
    }
];

function getAllUsers(){
    return users;
}

function getFirstUser(){
    return users[0];
}
function getUserByIndex(index){
    return users[index]
}

module.exports={
    users,
    getAllUsers,
    getFirstUser,
    getUserByIndex
}

