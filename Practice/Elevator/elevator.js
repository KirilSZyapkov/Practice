function elevator(arg1, arg2) {
  let numPeople = Number(arg1);
  let capacity = Number(arg2);
  let result = numPeople/capacity
    console.log(Math.ceil(result));
}

elevator(16, 3)