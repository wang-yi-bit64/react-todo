// fea(hooks): message
// feat: message
// revert: feat: message // 撤回

const fs = require('fs');

const msg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8').trim();

const mergeRE = /^(Merge pull request|Merge branch)/

const commitRE = /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

if(!commitRE.test(msg)) {
  if(!mergeRE.test(msg)) {
    console.log('commit message must be like: type(modules): message');
    console.error(`需要使用以下格式 type(modules): message 具体请看scripts/verifyCommit.js`);
    process.exit(1);
  }
} else {
  console.log('commit message is ok');
}