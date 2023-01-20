// funciton to get random day of birth 
function randomBirthday (dtoIn){
    let endDate = new Date(new Date().getFullYear() - dtoIn.age.min,12,31);
    let startDate = new Date(new Date().getFullYear() - dtoIn.age.max,1,1);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    };
  
  
//function to get employee list
function sortedEmployeeList(dtoIn){
    //delcaration of constants 
    const maleName = ['Jiří','Jan','Petr','Josef','Pavel','Martin','Tomáš','Jaroslav','Miroslav','Zdeněk','Václav','Michal','František','Jakub','Milan','Karel','Lukáš','David','Vladimír','Ondřej','Ladislav','Roman','Marek','Mikuláš','Felix'];
    const femaleName = ['Jana','Marie','Eva','Hana','Anna','Lenka','Kateřina','Lucie','Věra','Alena','Petra','Veronika','Jaroslava','Tereza','Martina','Jitka','Helena','Ludmila','Zdeňka','Ivana','Monika','Eliška','Zuzana','Natálie'];
    const maleSurname = ['Bašta', 'Bauer', 'Baxa', 'Bayer', 'Bažant', 'Beck', 'Bečka', 'Bečvář', 'Bednář', 'Bednařík', 'Běhal', 'Běhounek', 'Eichler', 'Eliáš', 'Erben', 'Exner', 'Horyna', 'Hořák', 'Hořejší', 'Hořínek', 'Hošek', 'Hrabák', 'Hrabal', 'Hrabě', 'Hrabec', 'Hrabovský', 'Hradecký', 'Hrádek', 'Hradil', 'Hrbáč', 'Hrbáček', 'Hrbek', 'Hrdina', 'Hrdlička', 'Hrdý', 'Hrnčíř', 'Hroch', 'Hromada', 'Hromádka', 'Hromádko', 'Hromek', 'Hron', 'Hronek', 'Hrouda', 'Hrstka', 'Hrubeš', 'Hrubý', 'Hruška', 'Hrůza', 'Hřeíček'];
    const femaleSurname = ['Nováková', ' Svobodová', ' Novotná', ' Dvořáková', ' Černá', ' Procházková', ' Kučerová', ' Veselá', ' Horáková', ' Němcová', ' Marková', ' Pokorná', ' Pospíšilová', ' Hájková', ' Králová', ' Jelínková', ' Růžičková', ' Benešová', ' Fialová', ' Sedláčková', ' Doležalová', ' Zemanová', ' Kolářová', ' Navrátilová', ' Čermáková', ' Vaňková', ' Urbanová', ' Kratochvílová', ' Šimková', ' Blažková', ' Křížová', ' Kopecká', ' Kovářová', ' Bartošová', ' Vlčková', ' Poláková', ' Konečná', ' Musilová', ' Čechová', ' Malá', ' Staňková', ' Štěpánková', ' Holubová', ' Šťastná', ' Kadlecová', ' Dostálová', ' Soukupová', ' Marešová', ' Sýkorová', ' Valentová'];
    const gender = ['female','male'];
    const workload = [10,20,30,40];
    let employeeList = [];
  
    // generating x amount of employees
  for (i=0; i<dtoIn.count; i++){
    const employee = {};
    employee.gender = gender[Math.floor(Math.random()*gender.length)];
    employee.birthday = randomBirthday(dtoIn);
  
    if (employee.gender == 'male'){
      employee.name = maleName[Math.floor(Math.random()*maleName.length)];
      employee.surname = maleSurname[Math.floor(Math.random()*maleSurname.length)];
       
    };
    if (employee.gender == 'female'){
    employee.name = femaleName[Math.floor(Math.random()*femaleName.length)];
    employee.surname = femaleSurname[Math.floor(Math.random()*femaleSurname.length)];
    };

    employee.workload = workload[Math.floor(Math.random()*workload.length)];      
    employeeList.push(employee);
  };
  //sorting the employeeList by the workload
  return employeeList;
};
  
function theList(dtoIn){
  const dtoOut = {};
  const names = {};
  const charData = {};
  const employeeList = sortedEmployeeList(dtoIn);


  // part where we get all the names count 
  let allNamesCount = {};
  let allNames = [];
  employeeList.forEach(employee => allNames.push(employee.name));
  allNames.forEach(value => allNamesCount[value] = (allNamesCount[value] || 0) + 1 );
  names.all = allNamesCount;

  // part where we get all the male names count
  let maleNameCount = {};
  let allMaleNames = [];
  employeeList.forEach(employee => {if (employee.gender === 'male') {allMaleNames.push(employee.name)}});
  allMaleNames.forEach(value => maleNameCount[value] = (maleNameCount[value] || 0) + 1 );
  names.male = maleNameCount;

  // part where we get all the female names count 
  let femaleNameCount = {};
  let allFemaleNames = [];
  employeeList.forEach(employee => {if (employee.gender === 'female') {allFemaleNames.push(employee.name)}});
  allFemaleNames.forEach(value => femaleNameCount[value] = (femaleNameCount[value] || 0) + 1 );
  names.female = femaleNameCount;

  //part where we get all the female names count that only work parttime
  let femalePartTimeNameCount = {};
  let allFemalePartTimeNames = [];
  employeeList.forEach(employee => {if ((employee.workload === 10 || employee.workload === 20 || employee.workload === 30) &&  employee.gender === 'female') {allFemalePartTimeNames.push(employee.name)}});
  allFemalePartTimeNames.forEach(value => femalePartTimeNameCount[value] = (femalePartTimeNameCount[value] || 0) + 1 );
  names.femalePartTime = femalePartTimeNameCount;

  // part where we get all the male names count that only work fulltime 
  let maleFullTimeNameCount = {};
  let allMaleFullTimeNames = [];
  employeeList.forEach(employee => {if (employee.workload === 40 && employee.gender === 'male') {allMaleFullTimeNames.push(employee.name)}});
  allMaleFullTimeNames.forEach(value => maleFullTimeNameCount[value] = (maleFullTimeNameCount[value] || 0) + 1 );
  names.maleFullTime = maleFullTimeNameCount;

  // function to get unique array of names to help with the iteration
  function uniqueNames (array){
      let uniqueNames = [... new Set(array)];
      return uniqueNames;
  };

  // part where we get all the names count for the character data
  let allNamesCharData = []
  for (i = 0; i < uniqueNames(allNames).length; i++){
    const name = {}
    let uniqueName = uniqueNames(allNames);
    name.label = uniqueName[i];
    name.value = allNames.filter(name => name === uniqueName[i]).length;
    allNamesCharData.push(name);
  };
  charData.all = allNamesCharData;

  // part where we get all the male names count for the character data
  let maleNamesCharData = []
  for (i = 0; i < uniqueNames(allMaleNames).length; i++){
    const name = {}
    let uniqueMaleName = uniqueNames(allMaleNames);
    name.label = uniqueMaleName[i];
    name.value = allMaleNames.filter(name => name === uniqueMaleName[i]).length;
    maleNamesCharData.push(name);
  };
  charData.male = maleNamesCharData;

  // part where we get all the female names count for the character data
  let allFemaleNamesCharData = []
  for (i = 0; i < uniqueNames(allFemaleNames).length; i++){
    const name = {}
    let uniqueFemaleName = uniqueNames(allFemaleNames);
    name.label = uniqueFemaleName[i];
    name.value = allFemaleNames.filter(name => name === uniqueFemaleName[i]).length;
    allFemaleNamesCharData.push(name);
  };
  charData.female = allFemaleNamesCharData;
  
  //part where we get all the female names count that only work part time for the character data
  let allFemalePartTimeNamesCharData = []
  for (i = 0; i < uniqueNames(allFemalePartTimeNames).length; i++){
    const name = {}
    let uniqueFemalePartTimeName = uniqueNames(allFemalePartTimeNames);
    name.label = uniqueFemalePartTimeName[i];
    name.value = allFemalePartTimeNames.filter(name => name === uniqueFemalePartTimeName[i]).length;
    allFemalePartTimeNamesCharData.push(name);
  };
  charData.allfemalePartTime = allFemalePartTimeNamesCharData;

  // part where we get all the male names count that only work full time for the character data
  let maleFullTimeNameCharData = []
  for (i = 0; i < uniqueNames(allMaleFullTimeNames).length; i++){
    const name = {}
    let uniqueMaleFullTimeName = uniqueNames(allMaleFullTimeNames);
    name.label = uniqueMaleFullTimeName[i];
    name.value = allMaleFullTimeNames.filter(name => name === uniqueMaleFullTimeName[i]).length;
    maleFullTimeNameCharData.push(name);
  };
  charData.maleFullTime = maleFullTimeNameCharData;

  dtoOut.names =  names;
  dtoOut.charData = charData;

  return dtoOut;
};

function main(dtoIn){
  // error chceck --> looking if the numbers are not negative and are round and are actually numbers 
  if (isNaN(dtoIn.count) || isNaN(dtoIn.age.max) || isNaN(dtoIn.age.min) || dtoIn.count % 1 !==0 ||dtoIn.age.max % 1 !==0 || dtoIn.age.min % 1 !==0 || dtoIn.count<0 || dtoIn.age.max<0  ||dtoIn.age.min<0 ){
    return console.log(`Některá ze zadaných hohnot není číslo nebo celé kladné číslo. Prosím, zadejte správné hodnoty`);

  }

  else{
  // executing the function that gets all the values we need 
  console.dir(theList(dtoIn), {depth: null});
  return (theList(dtoIn))
  };

};