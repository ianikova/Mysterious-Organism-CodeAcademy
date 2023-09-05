// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randomPosition = Math.floor(Math.random() * 15);
      this.dna[randomPosition] = returnRandBase();
      return this.dna;
    },
    compareDNA(anotherDna) {
      let commonBase = 0;
      for (let i = 0; i < 15; i++) {
        let firstBase = this.dna[i];
        let secondBase = anotherDna[i];
        if (firstBase === secondBase) {
          commonBase = commonBase + 1;
        }
      }
      if (commonBase > 0) {
        let percentBase = (commonBase / 15) * 100;
        console.log(
          `Specimen #1 and specimen #2 have ${percentBase.toFixed(
            2
          )}% DNA in common`
        );
      }
    },
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter = counter + 1;
        }
      }
      let percent = (counter / 15) * 100;
      if (percent > 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}

let pAequor = [];
for (let i = 0; i < 30; i++) {
  pAequor.push(pAequorFactory("", mockUpStrand()));
}
