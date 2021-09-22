

var minimizebtn = document.getElementById('minimize')
    , topnav = document.getElementById('topnav')
    , leftnav = document.getElementById('leftnav')
    , main = document.getElementById('main')
    , minimizecontent = minimizebtn.querySelector('span')
minimizecontent.innerHTML = '<'

minimizebtn.addEventListener('click', function () {

    // leftnav.setAttribute('style', 'left : -200px')
    // main.setAttribute('style', 'left : 0px')

    leftnav.classList.toggle('leftnav')
    topnav.classList.toggle('topnav')
    main.classList.toggle('main')
    if (minimizecontent.textContent == '<') {
        minimizecontent.innerHTML = '>'
    } else {
        minimizecontent.innerHTML = '<'
    }

    // topnav.setAttribute('class', 'topnav')
    // topnav.setAttribute('style', 'width : 100%')

    ////     in kar ro tamrin konam ba settatt e class va style 
    //// va hamchenin ba animation ke har 3ta 200px beran left anjam bedam
})






// inja bara har topicdiv ye element var misazim
var divsobject = {}
var topicdivtags = document.getElementById('actions-container').children
var topics2 = Array.prototype.slice.call(topicdivtags, 0)

// inja hameye topicdiv ha ro ba esmeshun ke shabih e esme topic e side bar hast mirizim too ye object
topics2.forEach(
    (topic) => {

        var topicid = topic.id
        var topicdiv = document.getElementById(topicid)

        var container = 'container'
        var topicdivname = topicid.substring(0, topicid.length - container.length);

        divsobject[topicdivname] = topicdiv

        divsobject[topicdivname].children[0].style.display = "none"   ////////


    }
)
// inja darim name e topic haye side bar ro migirim
var sidebartopicstags = document.getElementById('menu').children
var sidebartopics = Array.prototype.slice.call(sidebartopicstags, 0)

// inja bara har topic too side bar ye event e click misazim
sidebartopics.forEach(
    (sidebartopic) => {
        var topicname = sidebartopic.children[0].innerHTML

        sidebartopic.addEventListener('click', (e) => {
            e.preventDefault()
            // ba click roo har item e sidebar miad hame topicdiv ha ro check mikone
            //hame ro display none mikone gheir az hamun yeki
            for (const key in divsobject) {

                if (key == topicname) {
                    divsobject[key].children[0].style.display = "block"
                } else {
                    divsobject[key].children[0].style.display = "none"
                }
            }
        })

        // sidebartopic.addEventListener('click', (e) => { showtopic(e) })
    }
)
//// saay konam in hide shodan e topicdiv ha ro ba function ham bezanam


// ba click dropdown baz beshe
const catbtn = document.getElementById('itemcat')
const dropdown = document.getElementById('dropdown')
catbtn.addEventListener('click', () => {
    dropdown.classList.toggle('dropdownshow');
})

// ba click roo har item e dropdown meghdaresh zakhire beshe too input
const litags = document.querySelectorAll('#dropdown>li')
var lis = Array.prototype.slice.call(litags, 0)
lis.forEach((li) => {
    li.addEventListener('click', () => {
        catbtn.setAttribute('value', li.textContent)
    }
    )
});

//click rooye jahayye dige baes e baste shodan e dropdown beshe
document.addEventListener('click', (e) => {
    if (e.target !== catbtn) {
        dropdown.classList.remove('dropdownshow');
    }
})



//number-input ha manfi natunan beshe
//

var itemid = 1
var items = {}

// dokemeye add item
var addbtn = document.getElementById('additembtn')
addbtn.addEventListener('click', () => {

    // inja value haye input ha ro migirim
    var newitemtags = document.querySelectorAll('#items>div>div>div>input')
    var newitem = Array.prototype.slice.call(newitemtags, 0)
    const newitemproperties = newitem.map((e) => {
        return e.value
    })
    console.log(newitemproperties)
    items[itemid] = newitemproperties
    console.log(items[itemid][0])

    var table = document.getElementById('table')

    addtotable(itemid, items)

    itemid += 1
})



addtotable = (itemid, items) => {
    var tdwidth = ['10%', '20%', '10%', '20%', '10%', '20%'] // baraye inke width e cell haye row ha moshabeh e header beshe
    var tdnumber = 0

    var r1 = document.createElement("tr"); // ye radif misazim

    var rc1 = document.createElement("td"); // avalin sutun id 
    rc1.setAttribute('style', `width :${tdwidth[tdnumber]}`)
    tdnumber += 1
    rc1.innerHTML = itemid

    r1.appendChild(rc1)

    items[itemid].forEach( // bara har property ye sutun misazim

        (property) => {

            var rc1 = document.createElement("td");
            rc1.setAttribute('style', `width :${tdwidth[tdnumber]}`)
            tdnumber += 1
            rc1.innerHTML = property

            r1.appendChild(rc1)
        }
    )
    table.appendChild(r1)
}








