const $ = id => document.getElementById(id);

let customers = JSON.parse(localStorage.getItem("customers")) || [];

function save(){
  localStorage.setItem("customers", JSON.stringify(customers));
}

window.addCustomer = () =>{
  const name = $("name").value.trim();
  const phone = $("phone").value.trim();

  if(!name) return alert("Enter name");

  customers.push({
    name,
    phone,
    balance:0,
    history:[]
  });

  $("name").value="";
  $("phone").value="";

  save();
  render();
}

function render(){
  const list = $("customerList");

  list.innerHTML = customers.map((c,i)=>`
    <div class="card">
      <h3>${c.name}</h3>
      <p class="${c.balance>=0?'balance-red':'balance-green'}">
        Balance ₹ ${c.balance}
      </p>
      <button onclick="openCustomer(${i})">Open</button>
    </div>
  `).join("");
}

window.openCustomer = (i)=>{
  alert("Customer page next step me banega 😎");
}

render();
