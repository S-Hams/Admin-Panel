var accounts = []

// list e user, pass ha ro migirim
fetch('http://localhost:8001/acc')
    .then(x => x.text())
    .then(y => {
        
        accounts = JSON.parse(y)
        var acckeys = Object.keys(accounts[0])
        var accvals = Object.values(accounts[0])
        console.log(accounts)
        console.log(acckeys, accvals)
       
    }
    )
.catch( // age vasl nashod be server dasti user pass ha ro midim behesh
    accounts[0] = {
        admin1: "password1",
        admin2: "password2",
        admin3: "password3"
    }

);



var btn = document.getElementById('submit')
var loginbox = document.getElementById('login-container')

if (btn) {
    btn.addEventListener('click', authorize, false)
}



window.onload = function () {

    loginbox.addEventListener('keypress', function (e) {
        //window ro jaygozin konam ba login-container
        if (e.keyCode == '13') {
            authorize()

        }
    }, false)
}


function authorize() {


    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    username = username.toLowerCase()

    var permission = 0
    for (const key in accounts[0]) {

        if (username == key & password == accounts[0][key]) {
            permission = 1  // age user, pass dakhele list bood, ejaze vurud mide
        }
    }


    if (
        // username.substr(0, 6) !== 'admin:'
        permission == 0
    ) {

        return deny()
    } else {
        username = username.substring(6)
        username = username.replace(' ', '') // in chera kar nemikone

        return authorized()
    }
}

function deny() {
    alert('denied')
}

function authorized() {
    alert('x')
    location.assign('./../html/admin.html') // inja migim age user,pass ok bud boro be page e admin
}

