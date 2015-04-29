import stylus from 'stylus';
import sopUI from '../lib';
import fs from 'fs';

/**
 * Tests if styl file
 *
 * @param {String} file filename
 * @returns {Boolean} whether filename matches '.styl'
 */
function filterStylFiles(file) {
  return file.match(/\.styl$/);
}

/**
 * Replaces `.styl` in filename
 *
 * @param {String} file filename
 * @returns {String} filename
 */
function replaceFilename(file) {
  return file.replace('.styl', '');
}

const cases = fs.readdirSync('test/cases')
  .filter(filterStylFiles)
  .map(replaceFilename);

describe('integration', function describeIntegration() {
  cases.forEach(function testCase(test) {
    var name = test.replace(/[-.]/g, ' ');

    it(name, function describeIt() {
      var path = "test/cases/" + test + ".styl";
      var styl = fs.readFileSync(path, "utf8").replace(/\r/g, "");
      var css = fs.readFileSync("test/cases/" + test + ".css", "utf8").replace(/\r/g, "").trim();

      var style = stylus(styl)
        .use(sopUI())
        .set("filename", path)
        .define("url", stylus.url());

      if (~test.indexOf("compress")) {
        style.set("compress", true);
      }

      style.render(function onRender(err, actual) {
        if (err) {
          throw err;
        }

        actual.trim().should.equal(css);
      });
    });
  });
});
