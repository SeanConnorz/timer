const timeArgs = process.argv.slice(2);

const timer = (timeArgs) => {
  for (let time of timeArgs) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(time * 1000));
  }
};

timer(timeArgs);


