type Person = {
    id: number;
    age: number;
    weight: number;
  };
  
  type Child = Person;
  
  type Mom = Person;
  
  type Dad = Person;
  
  type Family = {
    dad: Dad;
    mom: Mom;
    children: Child[];
  };
  
  type AllTypes = {
    families: Family[];
  };
  
  const logFamilyDetails = (family: Family): void => {
    console.log(
      `Dad - ID: ${family.dad.id}, Age: ${family.dad.age}, Weight: ${family.dad.weight}`
    );
    console.log(
      `Mom - ID: ${family.mom.id}, Age: ${family.mom.age}, Weight: ${family.mom.weight}`
    );
    family.children.forEach((child) => {
      console.log(
        `Child - ID: ${child.id}, Age: ${child.age}, Weight: ${child.weight}`
      );
    });
  };
  
  const logAllDetails = (allTypes: AllTypes): void => {
    allTypes.families.forEach((family, index) => {
      console.log(`Family ${index + 1}:`);
      logFamilyDetails(family);
      console.log("---");
    });
  };
  
  const allTypes: AllTypes = {
    families: [
      {
        dad: { id: 1, age: 40, weight: 80 },
        mom: { id: 2, age: 35, weight: 60 },
        children: [
          { id: 3, age: 10, weight: 30 },
          { id: 4, age: 8, weight: 25 },
        ],
      },
      {
        dad: { id: 5, age: 45, weight: 85 },
        mom: { id: 6, age: 38, weight: 62 },
        children: [
          { id: 7, age: 12, weight: 32 },
          { id: 8, age: 9, weight: 28 },
        ],
      },
      {
        dad: { id: 9, age: 42, weight: 82 },
        mom: { id: 10, age: 36, weight: 61 },
        children: [
          { id: 11, age: 11, weight: 31 },
          { id: 12, age: 7, weight: 24 },
        ],
      },
    ],
  };
  
  logAllDetails(allTypes);
  