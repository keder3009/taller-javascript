var salary,retention,q,w;
	salary=prompt(" Write your salary ");
	retention=prompt(" write the percentage of retention ");
	q=salary*retention/100;
	w=salary-q;
	console.log("retained value = "+ q);
	console.log(" total to pay = "+ w);