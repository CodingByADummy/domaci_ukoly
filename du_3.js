function main(dtoIn){
  // error chceck --> looking if the numbers are not negative and are round 
  if (isNaN(dtoIn.count) || isNaN(dtoIn.age.max) || isNaN(dtoIn.age.min) || dtoIn.count % 1 !==0 ||dtoIn.age.max % 1 !==0 || dtoIn.age.min % 1 !==0 || dtoIn.count<0 || dtoIn.age.max<0  ||dtoIn.age.min<0 ){
    return console.log(`Některá ze zadaných hohnot není číslo nebo celé kladné číslo. Prosím, zadejte správné hodnoty`);
  }

  else{
      //delcaration of constants 
      const maleName = ["Jiří","Jan","Petr","Josef","Pavel","Martin","Tomáš","Jaroslav","Miroslav","Zdeněk","Václav","Michal","František","Jakub","Milan","Karel","Lukáš","David","Vladimír","Ondřej","Ladislav","Roman","Marek","Mikuláš","Felix"];
      const femaleName = ["Jana","Marie","Eva","Hana","Anna","Lenka","Kateřina","Lucie","Věra","Alena","Petra","Veronika","Jaroslava","Tereza","Martina","Jitka","Helena","Ludmila","Zdeňka","Ivana","Monika","Eliška","Zuzana","Natálie"];
      const maleSurname = ['Bašta', 'Bauer', 'Baxa', 'Bayer', 'Bažant', 'Beck', 'Bečka', 'Bečvář', 'Bednář', 'Bednařík', 'Běhal', 'Běhounek', 'Eichler', 'Eliáš', 'Erben', 'Exner', 'Horyna', 'Hořák', 'Hořejší', 'Hořínek', 'Hošek', 'Hrabák', 'Hrabal', 'Hrabě', 'Hrabec', 'Hrabovský', 'Hradecký', 'Hrádek', 'Hradil', 'Hrbáč', 'Hrbáček', 'Hrbek', 'Hrdina', 'Hrdlička', 'Hrdý', 'Hrnčíř', 'Hroch', 'Hromada', 'Hromádka', 'Hromádko', 'Hromek', 'Hron', 'Hronek', 'Hrouda', 'Hrstka', 'Hrubeš', 'Hrubý', 'Hruška', 'Hrůza', 'Hřeíček'];
      const femaleSurname = ['Nováková', ' Svobodová', ' Novotná', ' Dvořáková', ' Černá', ' Procházková', ' Kučerová', ' Veselá', ' Horáková', ' Němcová', ' Marková', ' Pokorná', ' Pospíšilová', ' Hájková', ' Králová', ' Jelínková', ' Růžičková', ' Benešová', ' Fialová', ' Sedláčková', ' Doležalová', ' Zemanová', ' Kolářová', ' Navrátilová', ' Čermáková', ' Vaňková', ' Urbanová', ' Kratochvílová', ' Šimková', ' Blažková', ' Křížová', ' Kopecká', ' Kovářová', ' Bartošová', ' Vlčková', ' Poláková', ' Konečná', ' Musilová', ' Čechová', ' Malá', ' Staňková', ' Štěpánková', ' Holubová', ' Šťastná', ' Kadlecová', ' Dostálová', ' Soukupová', ' Marešová', ' Sýkorová', ' Valentová'];
      const gender = ["female","male"];
      const workload = ["10","20","30","40"];
      const minAge = dtoIn.age.min;
      const maxAge = dtoIn.age.max;
      let dtoOut = [];


      // funciton to get random day of birth 
      function randomBirthday (){
          let endDate = new Date(new Date().getFullYear() - minAge,12,31);
          let startDate = new Date(new Date().getFullYear() - maxAge,1,1);
          return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
      };

      // generating x amount of employees
      for (i=0; i<dtoIn.count; i++){
        const employee = {};
        employee.gender = gender[Math.floor(Math.random()*gender.length)];
        employee.birthday = randomBirthday();
        if (employee.gender == "male"){
          employee.name = maleName[Math.floor(Math.random()*maleName.length)];
          employee.surname = maleSurname[Math.floor(Math.random()*maleSurname.length)];
        };
        if (employee.gender == "female"){
          employee.name = femaleName[Math.floor(Math.random()*femaleName.length)];
          employee.surname = femaleSurname[Math.floor(Math.random()*femaleSurname.length)];
        };
        employee.workload = workload[Math.floor(Math.random()*workload.length)];
        
        dtoOut.push(employee);
      };
      console.log(dtoOut);
    };
};

const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
};

main(dtoIn);
  