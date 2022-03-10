const meuMap = new Map();
meuMap.set('Algusto','Partner');
meuMap.set('Algusta','Partner');
meuMap.set('Alessandra','Partner');
meuMap.set('João','Admin');
meuMap.set('Junior','Admin');
meuMap.set('Jailson','Admin');
meuMap.set('Juliano','Mod');
meuMap.set('Juliana','Mod');
meuMap.set('Julia','Mod');
meuMap.set('Anaquin','Intern');
meuMap.set('Alex','Intern');
meuMap.set('Alfredo','Intern');


function getAdmins(map){
var admins = []

        for([key, value] of map){
            if(value=="Admin"){
                admins.push(key);
            }
        }    
    return admins;
}

console.log(getAdmins(meuMap));