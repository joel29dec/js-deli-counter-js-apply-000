var katzDeliLine = [];
let totalDailyCount = 0 
function takeANumber(arr){
  let num = totalDailyCount++
    katzDeliLine.push(num)
    return (`Welcome, ${name}. You are number ${num} in line.`)
}


function currentLine(arr){
  if (!arr.length){
    return('The line is currently empty.')
  }
  let longString = []
  for (let i = 0; i < arr.length; i++){
longString.push(String(i+1) + ". " + arr[i])
  }
  let veryLongString = longString.join(", ")
  return(`The line is currently: ${veryLongString}`)
}

function nowServing(arr){
  if (arr.length > 0){
    let customer = arr.shift()
    return("Currently serving " + customer + ".")
  }else{
    return('There is nobody waiting to be served!')
  }
}