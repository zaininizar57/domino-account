const account = {
  account: [
    {
      id: "12321143",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "8768676",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
    },
    {
      id: "4324324",
      nickname: "J Nasution",
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
  colNick.setAttribute("class", "pl-24");

  const divNick = document.createElement("div");
  divNick.setAttribute("class", "flex items-center");

  const pNick = document.createElement("p");
  pNick.setAttribute("class", "text-sm leading-none text-gray-600 ml-2");

  pNick.innerHTML = nickname;

  divId.setAttribute("class", "flex items-center pl-5");
  pId.setAttribute(
    "class",
    "text-base font-medium leading-none text-gray-700 mr-2"
  );

  const colCopy = document.createElement("td");
  colCopy.setAttribute("class", "pl-4");

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
  row.setAttribute(
    "class",
    "focus:outline-none h-16 border border-gray-100 rounded"
  );
  colCheck.appendChild(divContainerCheck);
  // col.innerHTML = nickname;
  row.appendChild(colCheck);
  row.appendChild(colId);
  row.appendChild(colNick);
  row.appendChild(colCopy);
  tableAccount.appendChild(row);

  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(id);
    document.getElementById("check" + i).checked = true;
  });
}
