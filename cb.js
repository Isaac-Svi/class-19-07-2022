// button.addEventListener('click', (e) => {
//     //asdfasdf
// })

// hello, goodbye
const hello = []
const goodbye = []
const addEventListener = (eventName, callback) => {
    const events = {
        hello: {
            a: 'asdfad',
            b: 'asdfadsf',
            e: {
                target: {}// DOM ELEMENT
            }
        },
        goodbye: {
            c: 'asdf',
            d: 'asd'
        }
    }

    switch(eventName) {
        case 'hello':
            hello.push(() => callback(events.hello))
            break;
        case 'goodbye':
            goodbye.push(() => callback(events.goodbye))
            break;
    }
}

const triggerEvents = (eventName) => {
    switch(eventName) {
        case 'hello':
            hello.forEach(callback => callback())
            break;
        case 'goodbye':
            goodbye.forEach(callback => callback())
            break;
    }
}

addEventListener('hello', (e) => {
    console.log(e)
})
addEventListener('hello', (e) => {
    console.log('helloooooooo')
})
addEventListener('goodbye', (e) => {
    console.log(e)
})

// console.log('hello', hello)
// console.log('goodbye', goodbye)

setTimeout(() => {
    triggerEvents('hello')
}, 4000)

setTimeout(() => {
    triggerEvents('goodbye')
}, 8000)