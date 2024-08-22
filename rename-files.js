const fs = require('fs')
const path = require('path')

// Specify the directory containing the component files
const rootDir = path.join(__dirname, 'src') // Adjust the path as needed

// Function to extract the component name from the file content
function getComponentName(fileContent) {
  const match = fileContent.match(/const (\w+): React.FC/) ?? fileContent.match(/const (\w+) : React.FC/) ?? fileContent.match(/export const (\w+) =/) // Adjust regex for different patterns
  return match ? match[1] : null
}

// Function to process each file in the directory
function processFile(filePath, file) {
  // Read the content of the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err)
    }

    // Extract the component name
    const componentName = getComponentName(data)

    if (componentName) {
      const newFileName = `${componentName}${path.extname(file)}`
      const newFilePath = path.join(path.dirname(filePath), newFileName)

      // Rename the file if the name differs
      if (newFileName !== file) {
        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.error('Error renaming file:', err)
          } else {
            console.log(`Renamed ${file} to ${newFileName}`)
          }
        })
      }
    } else {
      console.log(`Component name not found in ${file}`)
    }
  })
}

// Recursive function to traverse directories
function traverseDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.error('Error reading directory:', err)
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file)

      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.error('Error stating file:', err)
        }

        if (stats.isDirectory()) {
          // If it's a directory, recurse into it
          traverseDirectory(filePath)
        } else if (stats.isFile()) {
          // If it's a file, process it
          processFile(filePath, file)
        }
      })
    })
  })
}

// Start the traversal from the root directory
traverseDirectory(rootDir)
