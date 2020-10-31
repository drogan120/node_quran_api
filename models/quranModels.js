const data = require("../data/quran.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

function findSurah(id) {
  if (id >= 1 && id <= 114) {
    const data = require("../data/surah/" + id + ".json");
    if (data) {
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    }
  }
  return new Promise((resolve, reject) => {
    reject();
  });
}

module.exports = {
  findAll,
  findSurah,
};
