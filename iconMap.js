const path = require('path');
const fs = require('fs');

fs.readdir(path.resolve(__dirname, 'src', 'icons'), (err, files) => {
  let obj = {};

  files?.forEach((file) => {
    const name = file.replace('.svg', '');

    obj = {
      ...obj,
      [name]: `${file}`,
    };
  });

  const data = `export default ${JSON.stringify(obj)}`;

  fs.writeFile(
    'src/utils/iconsMap.ts',
    data,
    {
      encoding: 'utf8',
      flag: 'w',
      mode: 0o666,
    },
    (err) => {}
  );
});
