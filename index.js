const source=["James","Brian","Lebron","Kyrie"]
function findMatching(source, specification) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === specification.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, specificationName) {
    return source.filter((record) => record.name === specificationName);
  }