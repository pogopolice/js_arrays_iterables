const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);
//ids.delete('lostValue')  // ignored if absent [no error thrown]
if (ids.has('Hi')) {
  ids.delete('Hi');
}

//for (const entry of ids.entries()) {
for (const entry of ids.values()) {
  //console.log(entry[0]);
  console.log(entry);
}