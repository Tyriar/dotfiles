const cp = require('child_process');
const path = require('path');

const moduleNames = [
	'xterm',
	'xterm-addon-search',
	'xterm-addon-unicode11',
	'xterm-addon-web-links',
	'xterm-addon-webgl'
];

function getLatestModuleVersion(moduleName) {
	return new Promise((resolve, reject) => {
		cp.exec(`npm view ${moduleName} versions --json`, (err, stdout, stderr) => {
			if (err) {
				reject(err);
			}
			const versions = JSON.parse(stdout);
			resolve(versions[versions.length - 1]);
		});
	});
}

async function update() {
	console.log('Fetching latest versions');
	const versionPromises = [];
	moduleNames.forEach(m => versionPromises.push(getLatestModuleVersion(m)));
	const latestVersions = await Promise.all(versionPromises);

	console.log('Detected versions:');
	console.log(moduleNames.map((m, i) => `  ${m}@${latestVersions[i]}`).join('\n'));

	const vscodeDir = process.cwd();
	if (path.basename(vscodeDir) !== 'vscode') {
		console.error('The cwd is not named "vscode"');
		return;
	}

	const pkg = require(path.join(__dirname, 'package.json'));

	moduleNames.forEach((m, i) => {
		const moduleWithVersion = `${m}@${latestVersions[i]}`;
		if (pkg.dependencies[m] === latestVersions[i]) {
			console.log(`Skipping ${moduleWithVersion}, already up to date`);
			return;
		}
		[vscodeDir, path.join(vscodeDir, 'remote'), path.join(vscodeDir, 'remote/web')].forEach(cwd => {
			console.log(`${cwd}/package.json: Updating ${moduleWithVersion}`);
			cp.execSync(`yarn add ${moduleWithVersion}`, { cwd });
		});
	});
}

update();
