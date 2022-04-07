const account = {
  account: [
    {
      id: "240788820",
      nickname: "-",
    },
    {
      id: "181658430",
      nickname: "-",
    },
    {
      id: "180615440",
      nickname: "-",
    },
    {
      id: "225292790",
      nickname: "-",
    },
    {
      id: "225823441",
      nickname: "-",
    },
    {
      id: "140391971",
      nickname: "-",
    },
    {
      id: "223166981",
      nickname: "-",
    },
    

    //SADS
    {
      id: "140387162",
      nickname: "-",
    },
    {
      id: "140388982",
      nickname: "-",
    },
    {
      id: "181663692",
      nickname: "-",
    },
    {
      id: "173064313",
      nickname: "-",
    },
    {
      id: "181666513",
      nickname: "-",
    },
    {
      id: "181661623",
      nickname: "-",
    },
    {
      id: "220328923",
      nickname: "-",
    },
    // {
    //   id: "178117533",
    //   nickname: "-",
    // },
    {
      id: "233522154",
      nickname: "-",
    },
    {
      id: "177543994",
      nickname: "-",
    },
    {
      id: "140387825",
      nickname: "-",
    },
    {
      id: "140095935",
      nickname: "-",
    },
    {
      id: "140398535",
      nickname: "-",
    },
    {
      id: "229634355",
      nickname: "-",
    },
    {
      id: "181663037",
      nickname: "-",
    },
    {
      id: "180610218",
      nickname: "-",
    },

    //SADSA
    
    {
      id: "139945479",
      nickname: "-",
    },
   
    
    {
      id: "241348117",
      nickname: "-",
    },
    {
      id: "241340974",
      nickname: "-",
    },
    {
      id: "241334831",
      nickname: "-",
    },
    {
      id: "258608075",
      nickname: "-",
    },
    {
      id: "260663624",
      nickname: "-",
    },
    {
      id: "279493408",
      nickname: "-",
    },
    {
      id: "281076601",
      nickname: "-",
    },
    {
      id: "282455025",
      nickname: "-",
    },
    {
      id: "282456569",
      nickname: "-",
    },
    {
      id: "282457261",
      nickname: "-",
    },
    {
      id: "283433403",
      nickname: "-",
    },
    {
      id: "283423543",
      nickname: "-",
    },
    {
      id: "283468376",
      nickname: "-",
    },
    {
      id: "282445207",
      nickname: "-",
    },
    {
      id: "282446274",
      nickname: "-",
    },
    {
      id: "283462706",
      nickname: "-",
    },
    {
      id: "283461210",
      nickname: "-",
    },
    {
      id: "283457720",
      nickname: "-",
    },
    {
      id: "314586197",
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
      id: "314907244",
      nickname: "-",
    },
    {
      id: "283455692",
      nickname: "-",
    },
    {
      id: "283459361",
      nickname: "-",
    },
    {
      id: "322898640",
      nickname: "-",
    },
{
      id: "316345739",
      nickname: "-",
    },
{
      id: "315707033",
      nickname: "-",
    },
{
      id: "333389198",
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
