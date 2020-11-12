

   let  lettergrepen  = ['Abc','Def','gih','jol','Mao','Pee','ST','UV','WX','YZ','arf','uo', 'op', 'hsy', 'ui', 'fod', 'tra', 'fog', 'NO','Per','Se','UV','eX','YeZ','af', 'bal']

   let klas = [];
   let result = '';

   for ( let i = 0; i < 22; i++ ) {
      let student = {};
      student.naam = lettergrepen[Math.floor(Math.random() * lettergrepen.length)] +lettergrepen[Math.floor(Math.random() * lettergrepen.length)];
      student.nummer = "NR-" + i;
      klas.push(student);
   }
   console.log(klas);
 
 
 
  


