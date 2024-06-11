var logFamilyDetails = function (family) {
    console.log("Dad - ID: ".concat(family.dad.id, ", Age: ").concat(family.dad.age, ", Weight: ").concat(family.dad.weight));
    console.log("Mom - ID: ".concat(family.mom.id, ", Age: ").concat(family.mom.age, ", Weight: ").concat(family.mom.weight));
    family.children.forEach(function (child) {
        console.log("Child - ID: ".concat(child.id, ", Age: ").concat(child.age, ", Weight: ").concat(child.weight));
    });
};
var logAllDetails = function (allTypes) {
    allTypes.families.forEach(function (family, index) {
        console.log("Family ".concat(index + 1, ":"));
        logFamilyDetails(family);
        console.log("---");
    });
};
var allTypes = {
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
