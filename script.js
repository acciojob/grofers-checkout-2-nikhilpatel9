//your code here
const price=Element.querySelectorAll( '[data-ns-test="prices"]');
let sum=0;
for(let i=0;i<price.length;i++){
	sum+=parseInt(price[i]);
}
const thead=Document.createElement('tr');
thead.setAttribute("data-ns-test","grandTotal");
const tdata=Document.createElement('td');
td.textContent=sum;
tr.appendChild(td);