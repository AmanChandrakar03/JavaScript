const map = new Map();
map.set('In','Delhi')
map.set('Aus','Sydney')
map.set('SL','Colombo')
map.set('PAK','Ism')

//console.log(map);

for (const [key,value] of map) {
    console.log(key," : ",value);
}