const homePage = (req , res)=>{
    let users =[
        {
            id: 1,
            userName: "user...1"
        },
        {
            id: 2,
            userName: "user...1"
        },
        {
            id: 3,
            userName: "user...1"
        },
        {
            id: 4,
            userName: "user...1"
        }
    ]
    res.render("homePage" , {
        users
    })
}

const aboutPage = (req , res)=>{
    res.render("aboutPage" , {
        userStatus:"admin",
        title :"Ted",
        descripation : "He is way too old for this sh**"
    })
}

module.exports= {
    homePage,
    aboutPage
}