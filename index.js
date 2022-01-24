

  const api_url = 'https://py.crewbella.com/user/api/profile/chiragbalani';
  async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { professions ,locations, client_postings,portfolio, events ,questions } = data;
  const basic = data["basic"];

  var temp = "";
  //questions
  console.log(questions);
  for(ques of questions) {
    console.log(ques);
    for (qu in ques){
      console.log(qu);
      temp +=`<h3>${qu} : ${ques[qu]}</h3><br>`;
    }
    document.getElementById('questions').innerHTML = temp;
  }
  //portfolio
console.log(portfolio);
for(pf of portfolio) {
  console.log(pf);
  for (port in pf){
    console.log(port);
    temp +=`<h3>${port} : ${pf[port]}</h3><br>`;
  }
  document.getElementById('portfolio').innerHTML = temp;
}
//professions
for(pro of professions) {
  console.log(pro);
  for (prof in pro){
    console.log(prof);
    temp +=`<h3>${prof} : ${pro[prof]}</h3><br>`;
  }
  document.getElementById('professions').innerHTML = temp;
}
//events
for(ev of events) {
  console.log(ev);
  for (et in ev){
    console.log(et);
    temp +=`<h3>${et} : ${ev[et]}</h3><br>`;
  }
  document.getElementById('event').innerHTML = temp;
}
//locations
console.log(locations);
for(lc of locations) {
  console.log(lc);
  for (loc in lc){
    console.log(loc);
    temp +=`<h3>${loc} : ${lc[loc]}</h3><br>`;
  }
  document.getElementById('locate').innerHTML = temp;
}
//basic
for (b in basic){
  console.log(b);
  temp += `<h3>${b} : ${basic[b]}</h3><br>`;
}
console.log(temp);
document.getElementById('base').innerHTML = temp;


//for client_postings;
temp = "";
for (cp of client_postings){
  console.log(cp);
  for (client in cp){
console.log(client);
    temp += `<h3>${client} : ${cp[client]}</h3><br>`;
  }

  document.getElementById('client').innerHTML = temp;
}

}

// console.log(locations);
// console.log(portfolio);
// console.log(questions);
// console.log(events);
   getISS();
