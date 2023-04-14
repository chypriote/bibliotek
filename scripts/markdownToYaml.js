const fs = require('fs')
const yaml = require('js-yaml')
const slugify = require('slugify')

// Load the YAML file
const fileContents = fs.readFileSync('content/vinyles.yaml', 'utf8');
const data = yaml.load(fileContents);

// Loop through the list and create a YAML file for each item
for (const item of data) {
	const fileName = `content/vinyles/${slugify(item.album).toLowerCase()}.yaml`;
	const fileContents = yaml.dump(item);
	fs.writeFileSync(fileName, fileContents, 'utf8');
}
