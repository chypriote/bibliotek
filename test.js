const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { promisify } = require('util')
const readdir = promisify(fs.readdir)

// Define the input folder
const inputFolder = 'content/vinyles'

// Loop through the files in the input folder
readdir(inputFolder)
	.then((files) => {
		// Filter out any files that aren't YAML files
		const yamlFiles = files.filter(file => path.extname(file) === '.yaml')

		// Loop through the YAML files and update the picture key for each one
		for (const yamlFile of yamlFiles) {
			const yamlFilePath = path.join(inputFolder, yamlFile)
			const yamlData = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'))
			const pictureFileName = path.basename(yamlFile) + '.jpg'
			yamlData.picture = pictureFileName
			fs.writeFileSync(yamlFilePath, yaml.dump(yamlData))
			console.log(`Updated 'picture' key in ${yamlFile} to ${pictureFileName}.`)
		}
	})
	.catch((error) => {
		console.error(error)
	})
