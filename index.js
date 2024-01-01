// Function to test deleting an object property
function testDelete() {
  const obj = { key: "value" };
  delete obj.key;
}

// Function to test setting an object property to undefined
function testUndefined() {
  const obj = { key: "value" };
  obj.key = undefined;
}

// Function to test setting an object property to null
function testNull() {
  const obj = { key: "value" };
  obj.key = null;
}

// Measure the performance of each function
function measurePerformance(func, iterations = 1000000) {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    func();
  }

  const end = performance.now();
  console.log(
    `${func.name} took ${
      end - start
    } milliseconds for ${iterations} iterations.`
  );
}

// Run the tests
measurePerformance(testDelete);
measurePerformance(testUndefined);
measurePerformance(testNull);
