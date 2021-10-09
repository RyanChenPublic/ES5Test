const fibonacci = (position) => {
    if (position < 2) return position
    const arr = [0, 1]
    for (let i=2; i<=position; i++) {
      arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[position]
  }
  


  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(2));
  console.log(fibonacci(3));
  console.log(fibonacci(4));
  console.log(fibonacci(5));