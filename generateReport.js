import generator from 'cucumber-html-reporter';
import open from 'open';

const options = {
  theme: 'bootstrap',
  jsonFile: `./tests/results/index.json`,
  output: `./tests/results/index.html`
};

generator.generate(options);
await open('./tests/results/index.html');