const account = {
  account: [
    {
      id: "363498446",
      nickname: "-",
    },
    {
      id: "363179082",
      nickname: "-",
    },
    {
      id: "363257965",
      nickname: "-",
    },
    {
      id: "363074735",
      nickname: "-",
    },
    {
      id: "359596565",
      nickname: "-",
    },
    {
      id: "359464880",
      nickname: "-",
    },
    {
      id: "356728564",
      nickname: "-",
    },
    {
      id: "314598575",
      nickname: "-",
    },
    {
      id: "314899562",
      nickname: "-",
    },
    
    {
      id: "316345739",
      nickname: "-",
    },
    
    {
      id: "315712502",
      nickname: "-",
    },
    {
      id: "316347367",
      nickname: "-",
    },
    {
      id: "333219806",
      nickname: "-",
    },
    

    { 
      id : "338295944", 
      nickname : "-", 
    },
    { 
      id: "336271215", 
      nickname: "-", 
    },		
    {
      id: "336358006",
      nickname: "-",
    },
    {
      id: "336382923",
      nickname: "-",
    },
    {
      id: "336272016",
      nickname: "-",
    },
    {
      id: "338159099",
      nickname: "-",
    },
    {
      id: "338144626",
      nickname: "-",
    },
    {
      id: "339374285",
      nickname: "-",
    },
    {
      id: "338154380",
      nickname: "-",
    },
    {
      id: "338889856",
      nickname: "-",
    },
    {
      id: "338897652",
      nickname: "-",
    },
    
    {
      id: "339608145",
      nickname: "-",
    },
    {
      id: "338881427",
      nickname: "-",
    },
    {
      id: "339622699",
      nickname: "-",
    },
    {
      id: "338878114",
      nickname: "-",
    },
    {
      id: "339372943",
      nickname: "-",
    },
    {
      id: "338935706",
      nickname: "-",
    },
    {
      id: "338150017",
      nickname: "-",
    },
    
    {
      id: "345120180",
      nickname: "-",
    },
    {
      id: "343082073",
      nickname: "-",
    },
   {
      id: "313897577",
      nickname: "-",
    },
{
      id: "315707033",
      nickname: "-",
    },
{
      id: "338295949",
      nickname: "-",
    },
{
      id: "314907244",
      nickname: "-",
    },
{
      id: "314586197",
      nickname: "-",
    },

  ],
};


const tableAccount = document.getElementById("table-account");

for (let i = 0; i < account.account.length; i++) {
  const id = account.account[i].id;
  const nickname = account.account[i].nickname;
  const row = document.createElement("tr");
  const colCheck = document.createElement("td");
  const divContainerCheck = document.createElement("div");
  const divCheck = document.createElement("div");
  const check = document.createElement("input");

  const colId = document.createElement("td");
  const divId = document.createElement("div");
  const pId = document.createElement("p");

  const colNick = document.createElement("td");
  colNick.setAttribute("class", "");

  const divNick = document.createElement("div");
  divNick.setAttribute("class", "flex items-center");

  const pNick = document.createElement("p");
  pNick.setAttribute("class", "text-sm leading-none text-gray-600 ml-2");

  pNick.innerHTML = i + 1;

  divId.setAttribute("class", "flex items-center pl-5");
  pId.setAttribute(
    "class",
    "text-base leading-none text-gray-700 mr-2"
  );

  const colCopy = document.createElement("td");
  colCopy.setAttribute("class", "flex flex-row justify-end mr-2 py-2");

  const btnCopy = document.createElement("button");
  btnCopy.setAttribute(
    "class",
    "ml-auto focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
  );
  btnCopy.setAttribute("id", "btn-copy" + i);

  btnCopy.innerHTML = "Copy";

  colCopy.appendChild(btnCopy);

  pId.innerHTML = id;
  divId.appendChild(pId);
  colId.appendChild(divId);

  divNick.appendChild(pNick);
  colNick.appendChild(divNick);

  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "check" + i);
  check.setAttribute("name", "check" + i);
  check.setAttribute(
    "class",
    "focus:opacity-100 checkbox absolute cursor-pointer w-full h-full"
  );

  divContainerCheck.setAttribute("class", "ml-5");
  divCheck.setAttribute(
    "class",
    "bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
  );

  divCheck.appendChild(check);
  divContainerCheck.appendChild(divCheck);

  row.setAttribute("tabindex", i);
  row.setAttribute("id", "row" + i);
  row.setAttribute(
    "class",
    "focus:outline-none rounded"
  );
  colCheck.appendChild(divContainerCheck);
  // col.innerHTML = nickname;
  row.appendChild(colNick);
  row.appendChild(colId);
  row.appendChild(colCheck);
  row.appendChild(colCopy);
  tableAccount.appendChild(row);


  const isChecked = document.getElementById("check" + i);

  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(id);
    isChecked.checked = true;
    document.getElementById("row" + i).classList.add("bg-indigo-200");
  });
  
  isChecked.addEventListener('change', ()=> {
    document.getElementById("row" + i).classList.remove("bg-indigo-200");
  });
  
}
