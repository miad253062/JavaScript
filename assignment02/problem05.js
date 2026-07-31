// function averageResponseTime(times) {
//   if (!Array.isArray(times)) {
//     return "Invalid";
//   }

//   if (times.length === 0) {
//     return "Invalid";
//   }

//   let total = 0;
//   const _length = times.length;
//   for (const time of times) {
//     if (typeof time !== "number") {
//       return "Invalid";
//     }
//     total += time;
//   }

//   return total / _length;
// }

function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 1; i < times.length; i++) {
    if(typeof times[i] === 'number'){
        total = total + times[i];
    }else{
        return "Invalid"
    }
    
  }

  return total / times.length;
}
