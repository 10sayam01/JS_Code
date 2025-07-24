// Declare a function data1 that returns a Promise
let data1 = () => {
  return new Promise((resolve, reject) => {      // Create a new Promise
    setTimeout(() => {                           // Simulate a delay using setTimeout (2 seconds)
      console.log("i am p1");                    // Log a message after 2 seconds
      resolve("done");                           // Resolve the promise
    }, 2000);
  });
};
// Declare a second function data2 that returns a Promise
let data2 = () => {
  return new Promise((resolve, reject) => {      // Create another Promise
    setTimeout(() => {                           // Simulate another delay (2 seconds)
      console.log("i am p2");                    // Log a message after 2 seconds
      resolve("done");                           // Resolve the second promise
    }, 2000);
  });
};

// Call data1 and start the promise chain
data1()
  .then(() => {                                  // When data1 is done (resolved)
    console.log("p1 done");                      // Log that p1 is done
    return data2();                              // Call and return data2 (chain the next Promise)
  })
  .then(() => {                                  // When data2 is done (resolved)
    console.log("p2 done");                      // Log that p2 is done
  });
