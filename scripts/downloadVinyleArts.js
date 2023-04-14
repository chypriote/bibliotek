const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { promisify } = require('util')
const readdir = promisify(fs.readdir)
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const albumArt = require('album-art')

// Define the input and output folders
const inputFolder = 'content/vinyles'
const outputFolder = 'assets/vinyles'


// Define a function to slugify strings
function slugify (string) {
	return string.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// Define a function to download an image from a URL to a file
function downloadImage(url, filePath) {
	return new Promise((resolve, reject) => {
		request(url)
			.on('error', reject)
			.pipe(fs.createWriteStream(filePath))
			.on('finish', resolve)
	})
}

// Loop through the files in the input folder
readdir(inputFolder)
	.then((files) => {
		// Filter out any files that aren't YAML files
		const yamlFiles = files.filter(file => path.extname(file) === '.yaml')

		// Loop through the YAML files and search for images for each one
		for (const yamlFile of yamlFiles) {
			const yamlFilePath = path.join(inputFolder, yamlFile)
			const { album, artist } = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'))
			const imageFileName = `${slugify(album)}.jpg`
			const imagePath = path.join(outputFolder, imageFileName)

			// If the image file already exists, skip it
			if (fs.existsSync(imagePath)) {
				//console.log(`Image for '${artist} - ${album}' already exists.`)
				continue
			}

			albumArt(artist, { album })
				.then((response) => {
					if (!response) {
						console.error(`Could not find an image for '${artist} - ${album}'.`)
						return
					}

					// Download the image to the output folder
					console.log(`Downloading image for '${artist} - ${album}'...`)
					downloadImage(response, imagePath)
						.then(() => console.log(`Image for '${artist} - ${album}' downloaded successfully.`))
						.catch(error => console.error(`Error downloading image for '${artist} - ${album}':`, error))
				})
				.catch(error => console.error(`Error searching for images for '${artist} - ${album}':`, error))
		}
	})
	.catch((error) => {
		console.error(error)
	})
