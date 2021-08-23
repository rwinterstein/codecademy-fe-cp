// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,

    mutate() {
      const dnaBases = ["A", "T", "C", "G"];

      // get a random base of the 15
      const n = Math.floor(Math.random() * array.length);

      // creates a new array of bases to choose from
      // excluding the current base and set the new base
      const modifiedArr = dnaBases.filter((base) => base != this.dna[n]);

      // replace the given base with the new base
      const newBase = modifiedArr[Math.floor(Math.random() * 3)];
      this.dna[n] = newBase;

      return this.dna;
    },

    compareDNA(num, array) {
      // create a new pAequor specimen from the parameters
      // to compare to the first specimen
      const newSpecimen = {
        specimenNum: num,
        dna: array,
      };

      let totalBases = array.length;
      let similarBases = 0;

      // count how many bases match at the same position
      for (let i = 0; i < totalBases; i++) {
        if (this.dna[i] === newSpecimen.dna[i]) {
          similarBases++;
        }
      }

      let similarity = ((similarBases / totalBases) * 100).toFixed(0);

      return `Specimen ${this.specimenNum} and specimen ${newSpecimen.specimenNum} have ${similarity}% of DNA in common.`;
    },

    willLikelySurvive() {
      // DNA containing 60% or more of 'C' or 'G' bases are more likely to survive
      // filter 'C' and 'G' bases to get the length to find the percentage
      const preferredBases = this.dna.filter((base) => base === "C" || base === "G");
      const percentPreferred = ((preferredBases.length / this.dna.length) * 100).toFixed(0);

      if (percentPreferred >= 60) return true;
      return false;
    },

    complementStrand() {
      let complementStrand = [];
      for (let i = 0; i < this.dna.length; i++) {
        const base = this.dna[i];
        switch (base) {
          case "A":
            complementStrand.push("T");
            break;
          case "T":
            complementStrand.push("A");
            break;
          case "C":
            complementStrand.push("G");
            break;
          case "G":
            complementStrand.push("C");
            break;
          default:
            break;
        }
      }
      return complementStrand;
    },
  };
};

const runInstances = (n) => {
  let i = 1;
  let instances = [];

  // run n number of instances
  while (instances.length < n) {
    let specimen = pAequorFactory(i, mockUpStrand());
    let result = specimen.willLikelySurvive();

    // only log instances that are more likely to survive
    if (result === true) instances.push(`${specimen.specimenNum}: ${specimen.dna}`);
    i++;
  }

  return instances;
};

console.log(runInstances(30));

/**
 * Test cases
 */

let test = pAequorFactory(1, mockUpStrand());
console.log(test.dna);

let complementTest = test.complementStrand();
console.log(complementTest);

let mutatedTest = test.mutate();
console.log(mutatedTest);

let compareTest = test.compareDNA(2, mockUpStrand());
console.log(compareTest);

let surviveTest = test.willLikelySurvive();
console.log(surviveTest);
