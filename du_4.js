
// funciton to get random day of birth 
function randomBirthday (dtoIn){
    let endDate = new Date(new Date().getFullYear() - dtoIn.age.min,12,31);
    let startDate = new Date(new Date().getFullYear() - dtoIn.age.max,1,1);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    };
  
  //function to get sorted employee list
  function sortedEmployeeList(dtoIn){
    //delcaration of constants 
    const maleName = ["Jiří","Jan","Petr","Josef","Pavel","Martin","Tomáš","Jaroslav","Miroslav","Zdeněk","Václav","Michal","František","Jakub","Milan","Karel","Lukáš","David","Vladimír","Ondřej","Ladislav","Roman","Marek","Mikuláš","Felix"];
    const femaleName = ["Jana","Marie","Eva","Hana","Anna","Lenka","Kateřina","Lucie","Věra","Alena","Petra","Veronika","Jaroslava","Tereza","Martina","Jitka","Helena","Ludmila","Zdeňka","Ivana","Monika","Eliška","Zuzana","Natálie"];
    const maleSurname = ['Bašta', 'Bauer', 'Baxa', 'Bayer', 'Bažant', 'Beck', 'Bečka', 'Bečvář', 'Bednář', 'Bednařík', 'Běhal', 'Běhounek', 'Eichler', 'Eliáš', 'Erben', 'Exner', 'Horyna', 'Hořák', 'Hořejší', 'Hořínek', 'Hošek', 'Hrabák', 'Hrabal', 'Hrabě', 'Hrabec', 'Hrabovský', 'Hradecký', 'Hrádek', 'Hradil', 'Hrbáč', 'Hrbáček', 'Hrbek', 'Hrdina', 'Hrdlička', 'Hrdý', 'Hrnčíř', 'Hroch', 'Hromada', 'Hromádka', 'Hromádko', 'Hromek', 'Hron', 'Hronek', 'Hrouda', 'Hrstka', 'Hrubeš', 'Hrubý', 'Hruška', 'Hrůza', 'Hřeíček'];
    const femaleSurname = ['Nováková', ' Svobodová', ' Novotná', ' Dvořáková', ' Černá', ' Procházková', ' Kučerová', ' Veselá', ' Horáková', ' Němcová', ' Marková', ' Pokorná', ' Pospíšilová', ' Hájková', ' Králová', ' Jelínková', ' Růžičková', ' Benešová', ' Fialová', ' Sedláčková', ' Doležalová', ' Zemanová', ' Kolářová', ' Navrátilová', ' Čermáková', ' Vaňková', ' Urbanová', ' Kratochvílová', ' Šimková', ' Blažková', ' Křížová', ' Kopecká', ' Kovářová', ' Bartošová', ' Vlčková', ' Poláková', ' Konečná', ' Musilová', ' Čechová', ' Malá', ' Staňková', ' Štěpánková', ' Holubová', ' Šťastná', ' Kadlecová', ' Dostálová', ' Soukupová', ' Marešová', ' Sýkorová', ' Valentová'];
    const gender = ["female","male"];
    const workload = [10,20,30,40];
    let employeeList = [];
  
    // generating x amount of employees
    for (i=0; i<dtoIn.count; i++){
      const employee = {};
      employee.gender = gender[Math.floor(Math.random()*gender.length)];
      employee.birthday = randomBirthday(dtoIn);
  
      if (employee.gender == "male"){
        employee.name = maleName[Math.floor(Math.random()*maleName.length)];
        employee.surname = maleSurname[Math.floor(Math.random()*maleSurname.length)];
        
      };
  
      if (employee.gender == "female"){
        employee.name = femaleName[Math.floor(Math.random()*femaleName.length)];
        employee.surname = femaleSurname[Math.floor(Math.random()*femaleSurname.length)];
  
      };
  
      employee.workload = workload[Math.floor(Math.random()*workload.length)];      
      employeeList.push(employee);
    };
    //sorting the employeeList by the workload
    return employeeList.sort((a,b)=>{return a.workload - b.workload});
  };
  
  
  // function that assings all the values
  function theNumbers(dtoIn){
    const sortedList = sortedEmployeeList(dtoIn)
    const dtoOut = {}
  
   //function that gets the average age
    function averageAge(){
      let totalAge = 0
      sortedList.forEach(employee=> {totalAge = totalAge + (new Date().getFullYear() - employee.birthday.getFullYear())})
      return Math.round((totalAge/sortedList.length)*10)/10;
  
    };
  
    //function that gets the median of employees´ ages
    function medianAge(){
      const middle = Math.floor(sortedList.length/2);
      let employeesAge = [];
      sortedList.forEach(employee => employeesAge.push(new Date().getFullYear() - employee.birthday.getFullYear()));
      employeesAge.sort((a,b) => a - b);
      return employeesAge.length % 2 !== 0 ? employeesAge[middle] : (employeesAge[middle - 1] + employeesAge[middle]) / 2;
  
    };
  
    //function that gets the median of employees´ workloads
    function medianWorkload(){
      const middle = Math.floor(sortedList.length/2);
      let employeesWorkload = [];
      sortedList.forEach(employee => employeesWorkload.push(employee.workload));
      employeesWorkload.sort((a,b) => a - b);
      return employeesWorkload.length % 2 !== 0 ? employeesWorkload[middle] : (employeesWorkload[middle - 1] + employeesWorkload[middle]) / 2;
  
    };
  
  
    //function that gets the average women workload
    function averageWomenWorkload(){
      let womenWorkload = 0;
      let womenEmployees = sortedList.filter(female => female.gender === "female");
      womenEmployees.forEach(employee=> womenWorkload += employee.workload);
      return Math.round((womenWorkload/womenEmployees.length));
  
    };
  
    //function that gets the average men workload
    function averageMenWorkload(){
      let menWorkload = 0;
      let menEmployees = sortedList.filter(male => male.gender === "male");
      menEmployees.forEach(employee=> menWorkload += employee.workload);
      return Math.round((menWorkload/menEmployees.length));
  
    };
  
    //assigning the values
    dtoOut.total = dtoIn.count;
    dtoOut.workload10 = sortedList.filter(employee => employee.workload === 10).length;
    dtoOut.workload20 = sortedList.filter(employee => employee.workload === 20).length;
    dtoOut.workload30 = sortedList.filter(employee => employee.workload === 30).length;
    dtoOut.workload40 = sortedList.filter(employee => employee.workload === 40).length;
    dtoOut.averageAge = averageAge();
    dtoOut.minAge = dtoIn.age.min;
    dtoOut.maxAge = dtoIn.age.max;
    dtoOut.medianAge = medianAge();
    dtoOut.medianWorkload = medianWorkload();
    dtoOut.averageWomenWorkload = averageWomenWorkload();
    dtoOut.averageMenWorkload = averageMenWorkload();
    dtoOut.sortedByWorkload = sortedList;
    
    // returns the final value object
    return(dtoOut)
  
  };
  
  function main(dtoIn){
    // error chceck --> looking if the numbers are not negative and are round and are actually numbers 
    if (isNaN(dtoIn.count) || isNaN(dtoIn.age.max) || isNaN(dtoIn.age.min) || dtoIn.count % 1 !==0 ||dtoIn.age.max % 1 !==0 || dtoIn.age.min % 1 !==0 || dtoIn.count<0 || dtoIn.age.max<0  ||dtoIn.age.min<0 ){
      return console.log(`Některá ze zadaných hohnot není číslo nebo celé kladné číslo. Prosím, zadejte správné hodnoty`);
  
    }
  
    else{
    // executing the function that gets all the values we need 
    return theNumbers(dtoIn);
  
    };
  
  };