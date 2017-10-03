//a=salario minimo
//b=dias
//c=aux transporte
//d=sueldo actual
//rf=retencion de fuente
var a, b, c, d, complete1,valuemonths, rf, name, lastname, complete;
	a=prompt(" cual es el salaro minimo legal vigente ");
	rf=prompt(" cual es la rete fuente ");
	c=Number(prompt(" cual es el subsidio de transporte "));
	name=prompt(" cual es su nombre ");
	lastname=prompt(" cual es su apellido ");
	d=Number(prompt(" escriba su sueldo actual "));
	b=Number(prompt(" cuantas dias ha trabajado "));
	complete= name + lastname;
	complete1= d/30;
	valuemonths=complete1 * b;

		if (d <= a*2){
      
			console.log(" su sueldo sera de " + parseInt(valuemonths+c));
    } else if  ((d >= a * 2) && (valuemonths <= a*4)){
			console.log("su sueldo sera de " +valuemonths);
    } else if ((d >= a*4) || (complete1 >= a*4)){
					complete1=(valuemonths - valuemonths*rf / 100);
        }
					console.log(" sueldo con su retencion es aplicada es igual a:  " +complete1);


