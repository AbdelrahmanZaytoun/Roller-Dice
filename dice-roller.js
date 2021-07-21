let arg= process.argv
function theDice (argv){

  // let array=[1,2,3,4,5,6]

  let manyTimes="";   

  for (let i=0; i<arg;i++){
      let randomElement=""
       randomElement = Math.floor((Math.random() * 6) + 1)

      console.log(i)
      manyTimes+=  randomElement +","
  }
  let lastComma= manyTimes.lastIndexOf(",")
  manyTimes = manyTimes.slice(0,lastComma)
  return manyTimes

}

theDice(arg)