//your code here
const price=Element.querySelectorAll("prices");
let sum=0;
for(let i=0;i<price.length;i++){
	sum+=price[i];
}
const total=Document.createElement(tr);
total.setAttribute("data-ns-test","prices");
const thead=Document.createElement(tr);
thead.setAttribute("data-ns-test","grandTotal");
const tdata=Document.createElement(td);
td.textContent(sum);