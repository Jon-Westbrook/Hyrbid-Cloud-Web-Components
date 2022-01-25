import fs from 'fs';
import lockfile from '@yarnpkg/lockfile';
import semver from 'semver';
import chalk from 'chalk';

const [oldPackagePath, diffPath] = process.argv.slice(2);

const getFile = (path) => fs.readFileSync(path, { encoding: 'utf-8' });
const writeFile = (path, contents) => fs.writeFileSync(path, contents);

const oldPackage = JSON.parse(getFile(oldPackagePath));
const parsedLockfile = lockfile.parse(getFile('./yarn.lock')).object;
const currentDeps = new Map(
  Object.entries(parsedLockfile).map(([key, details]) => {
    const isScoped = key.startsWith('@');
    const [packageName] = isScoped ? key.substr(1).split('@') : key.split('@');
    return [`${isScoped ? '@' : ''}${packageName}`, details.version];
  }),
);

const diff = {
  missing: [],
  currentlyTooOld: [],
  currentlyTooNew: [],
  matching: [],
};

const oldDependencies = [
  ...Object.entries(oldPackage.dependencies || {}),
  ...Object.entries(oldPackage.devDependencies || {}),
];

for (const [dep, oldRange] of oldDependencies) {
  const currentVersion = currentDeps.get(dep) || false;

  const info = {
    name: dep,
    oldRange,
    currentVersion,
  };

  if (!currentVersion) {
    diff.missing.push(info);
  } else if (semver.ltr(currentVersion, oldRange)) {
    diff.currentlyTooOld.push(info);
  } else if (semver.gtr(currentVersion, oldRange)) {
    diff.currentlyTooNew.push(info);
  } else {
    diff.matching.push(info);
  }
}

if (diff.missing.length) {
  console.log(
    chalk.bold.red(`\n\n${diff.missing.length} Dependencies Missing!`)
  );
  console.table(diff.missing);
}

if (diff.currentlyTooOld.length) {
  console.log(
    chalk.bold.yellow(
      `\n\n${diff.currentlyTooOld.length} Dependencies Currently Too Old!`
    ),
  );
  console.table(diff.currentlyTooOld);
}

if (diff.currentlyTooNew.length) {
  console.log(
    chalk.bold.cyan(
      `\n\n${diff.currentlyTooNew.length} Dependencies Newer Than Previously Specified!`
    ),
  );
  console.table(diff.currentlyTooNew);
}

if (diff.matching.length) {
  console.log(
    chalk.bold.green(
      `\n\n${diff.matching.length} Dependencies Within Specified Range`,
    ),
  );
  console.table(diff.matching);
}

if (diffPath) {
  writeFile('./diff.json', JSON.stringify(diff, null, 2));
}
