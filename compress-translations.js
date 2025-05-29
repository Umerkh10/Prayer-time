const fs = require('fs');
const path = require('path');

// Configuration - adjust these paths to match your project structure
const INPUT_DIR = './public/locales';
const OUTPUT_DIR = './public/locales'; // Same directory to replace the files

async function compressTranslations() {
  try {
    // Get all JSON files from input directory
    const files = await fs.promises.readdir(INPUT_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log(`Found ${jsonFiles.length} JSON translation files to compress`);
    
    // Process each file
    for (const file of jsonFiles) {
      const filePath = path.join(INPUT_DIR, file);
      
      // Create backup of original file
      const backupPath = path.join(INPUT_DIR, `${file}.backup`);
      await fs.promises.copyFile(filePath, backupPath);
      console.log(`Created backup: ${backupPath}`);
      
      // Read and parse the JSON file
      const content = await fs.promises.readFile(filePath, 'utf8');
      const originalSize = content.length;
      
      // Parse and re-stringify to remove all whitespace
      const json = JSON.parse(content);
      const compressedContent = JSON.stringify(json);
      
      // Write the compressed JSON back to the original file
      await fs.promises.writeFile(filePath, compressedContent);
      
      // Calculate compression stats
      const compressedSize = compressedContent.length;
      const savingsPercent = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
      
      console.log(`Compressed ${file}: ${originalSize} → ${compressedSize} bytes (${savingsPercent}% savings)`);
    }
    
    console.log('Compression complete! Original files backed up with .backup extension');
  } catch (error) {
    console.error('Error compressing translations:', error);
  }
}

// Run the compression
compressTranslations();
