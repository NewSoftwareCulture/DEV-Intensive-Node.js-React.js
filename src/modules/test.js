import canonize from './canonize';

const urls = [
  'telegram.me/SkillBranch',
  'https://telegram.me/SkillBranch',
  'Http://telegram.me/skillbranch',
  '@skillbranch',
  'skillbranch',
  'vk.com/skillbranch',
  'vk.com/skillbranch/profile',
  'http://vk.com/skillbranch',
  'https://vk.com/skillbranch/profile',
];

urls.forEach((url) => {
  const username = canonize(url);
  console.log(username[6]);
});

function Parser() {
  const { spawn } = require('child_process');
  const parser = spawn('python3', ['parser.py']);

  parser.stdout.on('data', (data) => {
    console.log(data.toString());
  });
}