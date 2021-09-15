

const func = async () => {
    // const asyncRequest = await axios.get('https://swapi.dev/api/people/1/')

    // console.log(asyncRequest)

    axios.get('https://swapi.dev/api/people/1/')
        .then(res => {
            console.log('.then response')
        })


}

func()
// console.log('after')

// for(let i = 0; i < 100000; i++){
//     console.log(i)
// }
setTimeout(()=>{
    console.log('after')
}, 30)

console.log('last')