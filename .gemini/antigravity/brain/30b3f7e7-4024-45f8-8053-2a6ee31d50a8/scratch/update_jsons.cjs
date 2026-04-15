const fs = require('fs');
const path = require('path');

const dir = 'src/content/designs';
const files = fs.readdirSync(dir);

files.filter(f => f.endsWith('.json')).forEach(file => {
  const filePath = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.imagen) {
    data.imagen_front = data.imagen.replace('.webp', '_front.webp');
    data.imagen_back = data.imagen.replace('.webp', '_back.webp');
    delete data.imagen;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${file}`);
  }
});
