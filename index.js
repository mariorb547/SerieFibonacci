function fibonacci() {
    numero = parseInt($("#numero").val());
      if(numero>0 && numero<=12){
        
        let resiltNumero1 = fibonacci_series(numero);
        let resiltNumero2 = fibonacci_series(numero + 1);

        $("#tableResultados").append(`
        <tr>
            <td>
                ${numero}
            </td>
            <td>
                ${resiltNumero1[resiltNumero1.length - 1]}
             </td>
            <td>
                ${resiltNumero2[resiltNumero2.length - 1]}
            </td>
            <td>
                ${
                resiltNumero1[resiltNumero1.length - 1] +
                resiltNumero2[resiltNumero2.length - 1]
                }
            </td>
        </tr> 
       `);
    }
  }

  var fibonacci_series = function (numero) {
    if (numero === 1) {
      return [0, 1];
    } else {
      var serie = fibonacci_series(numero - 1);
      serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
      return serie;
    }
  };