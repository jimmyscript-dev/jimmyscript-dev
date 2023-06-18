const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: {user: 'Monkey', admin: true}})
        }, 3000)
    })
};

const login = (user) => {
    if(user.admin === true) {
        console.log('Succesfully logged in.')
    } else {
        console.log('Failed to log-in.')
    }
}

const userAdmin = async () => {
    const user = await fetchUser();
    console.log(user)
    login(user.data);
}

userAdmin();