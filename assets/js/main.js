console.log('Siva')

const datumbsp = new Date('2016')
const monatbsp = datumbsp.getMonth()
const myDiv = document.getElementsByTagName('div')[0]

const JahrDurchlaeufer = (jahr) =>{

    let anzahl = 0
    
    const hTag = document.createElement('h2')
    const h2Node = document.createTextNode(`Das Jahr ${jahr} hat ${anzahl} Unglückstage.`)
    hTag.appendChild(h2Node)
    myDiv.appendChild(hTag)

    for( let month = 0; month < 12; month++){

        let datum = new Date(jahr, month, 13)

        if(datum.getDay() == 5){
            const hElement = document.createElement('h2')
            const h2NOde = document.createTextNode(`Das Jahr $`)
            
            anzahl++

            console.log(datum, 'ist ein unluckyday')

            const pTag = document.createElement('p')
            const h2Node = document.createTextNode(datum)
            pTag.appendChild(h2Node)
            myDiv.appendChild(pTag)

        }
    }


} 

JahrDurchlaeufer('2016')
JahrDurchlaeufer('2015')
JahrDurchlaeufer('2020')