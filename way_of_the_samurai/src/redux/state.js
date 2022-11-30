let state = {
    profilePage: {
        postData: [
            {id: "1", post: "Hi. its my first projects", like: "20"},
            {id: "2", post: "Hi, Good game", like: "15"},
            {id: "3", post: "хи-хи", like: "1"},
            {id: "4", post: "просто да", like: "100"}
        ]
    },
    dialogsPage: {
        DialogsUserData: [
            {id: "1", name: 'Andrey'},
            {id: "2", name: 'Roman'},
            {id: "3", name: 'Misha'},
            {id: "4", name: 'Ivan'},
            {id: "5", name: 'Sveta'},
        ],
        MessageUserData: [
            {id: "1", message: ['Hello','Yoo'], messageMe:'Hey,bro'},
            {id: "2", message: ['GG WP','No'], messageMe:'WP,GG'},
            {id: "3", message: ['Work please', "Okey"], messageMe:'Okey,bro'},
            {id: "4", message: ['Like',"Yes"], messageMe:'No'},
            {id: "5", message: ['Yo','Yooooo Yoooooo Yooooo'], messageMe:'Yoo Yoo Yoo'},

        ]
    },
    sidebar: {
        friendsData: [
            {id: "1", name:"Andrey"},
            {id: "2", name:"Sveta"},
            {id: "3", name:"Roman"}
        ]
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: "5",
        post:postMessage,
        like:"15"
    }
    state.profilePage.postData.push(newPost)
}

export default state;