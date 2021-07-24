const foo = () => {
  // tree shaking;
  const a = 1;
  if (false) {
    console.log('tree-shaking');
  }
  const b = 2;
  return b;
}

const bar = () => {
  const x = 1;
  console.log(x);
  // treeshaking
  function test() {
    return 5;
  }
  return x;
  // tree-shaking
  const y = 2;
  return y;
}

bar();