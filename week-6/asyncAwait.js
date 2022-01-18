setTimeout(()=>{
    console.log('setTimeout')
}, 3)

const func = async () => {
    // const asyncRequest = await axios.get('https://swapi.dev/api/people/1/')
    // console.log(asyncRequest)
    
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => {
        console.log('.then response')
    })
}

func()
console.log('after')

// for(let i = 0; i < 10000; i++){
//     console.log(i)
// }


// console.log('the end')