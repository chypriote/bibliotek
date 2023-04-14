

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const yaml = require('js-yaml')
const readdir = promisify(fs.readdir)

// Define the input and output folders
const inputFolder = '../concerts/content/upcoming'
const outputFolder = 'content/concerts'

// Loop through the files in the input folder
readdir(inputFolder)
	.then((files) => {
		// Filter out any files that aren't Markdown files
		const markdownFiles = files.filter(file => path.extname(file) === '.md')

		// Loop through the Markdown files and create a YAML file for each one
		for (const markdownFile of markdownFiles) {
			const markdownFilePath = path.join(inputFolder, markdownFile)
			const yamlFilePath = path.join(outputFolder, `${path.parse(markdownFile).name}.yaml`)
			const markdownContent = fs.readFileSync(markdownFilePath, 'utf8')

			// Parse the Markdown content to extract the metadata and content
			const [metadata] = markdownContent.split(/^---\s*$/m).slice(1)

			// Remove the 'layout' key from the metadata
			const { layout, ...otherMetadata } = yaml.load(metadata)

			// Format the date in the desired format
			const formattedDate = new Date(otherMetadata.date).toISOString().substring(0, 10);

			// Convert the metadata and content to YAML format
			const yamlContent = yaml.dump({ ...otherMetadata, date: formattedDate });

			// Write the YAML content to the output file
			fs.writeFileSync(yamlFilePath, yamlContent, 'utf8')
		}

		console.log('YAML files created successfully.')
	})
	.catch((error) => {
		console.error(error)
	})
