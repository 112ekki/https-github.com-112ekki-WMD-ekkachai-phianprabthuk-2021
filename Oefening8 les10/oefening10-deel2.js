const output = document.getElementById('output');
  
    document.getElementById('knop')
        .addEventListener('click', (e) => {
          haalDataOp();
        },
        true);
  
    function haalDataOp() {
      fetch('https://matthiasdruwe.github.io/Web-MobileCursus/course/12.-JavaScript-04/examples/example12-01.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let tString = '';
            data.forEach((e) => {
              tString += `<section data-index="${e.index}">${e.name.first} ${e.name.last}</section>`;
              tString += `<section data-index="${e.index}">${e.email}<br />${e.phone}</section>`;
              

            });
            output.innerHTML = tString;
          },
          )
          .then((err) => {
            console.log(err);
          });

        }


      






