const fs = require("fs");
const path = require("path");
const matter = require('gray-matter');

const sidebar = [
  {
    type: 'category',
    label: "Getting Started",
    items: []
  }
];

const readDocs = (base, f) => {
  const dir = fs.readdirSync(f);
  for (const d of dir) {
    const fp = path.resolve(f, d);
    if (fs.statSync(fp).isDirectory()) {
      readDocs(base + d + "/", fp);
    } else if (d.toLowerCase().endsWith(".md")) {
      const fm = matter(fs.readFileSync(fp));
      if (fm.data.sidebar) {
        let sb = sidebar;
        const sba = fm.data.sidebar.split("/").filter(v => v != "");
        console.dir({ sba });
        for (const sbi of sba) {
          const fsb = sb.filter(v => v.type === "category" && v.label === sbi);
          if (fsb.length === 0) {
            const nsb = {
              type: 'category',
              label: sbi,
              items: []
            };
            sb.push(nsb);
            sb = nsb.items;
          } else {
            sb = fsb[0].items;
          }
        }
        sb.push(base + (fm.data.id || d.substr(0, -3)));
      }
    }
  }
};

readDocs("", "docs");
console.dir({ sidebar }, { depth: 50 });

module.exports = {
  sidebar
};
