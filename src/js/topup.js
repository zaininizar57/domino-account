const account = {
  account: [
    {
      id: "140401600",
      nickname: "-",
    },
    {
      id: "221656920",
      nickname: "-",
    },
    {
      id: "140401602",
      nickname: "-",
    },
    {
      id: "140401603",
      nickname: "-",
    },
    {
      id: "140401604",
      nickname: "-",
    },
    {
      id: "140401605",
      nickname: "-",
    },
    {
      id: "140401606",
      nickname: "-",
    },
    {
      id: "140401607",
      nickname: "-",
    },
    {
      id: "140401608",
      nickname: "-",
    },
    {
      id: "140401609",
      nickname: "-",
    },
    {
      id: "140401610",
      nickname: "-",
    },
    {
      id: "140401611",
      nickname: "-",
    },
    {
      id: "140401612",
      nickname: "-",
    },

    //SADS
    {
      id: "140401613",
      nickname: "-",
    },
    {
      id: "140401614",
      nickname: "-",
    },
    {
      id: "140401615",
      nickname: "-",
    },
    {
      id: "140401616",
      nickname: "-",
    },
    {
      id: "140401617",
      nickname: "-",
    },
    {
      id: "140401618",
      nickname: "-",
    },
    {
      id: "140401619",
      nickname: "-",
    },
    {
      id: "140401620",
      nickname: "-",
    },
    {
      id: "140401621",
      nickname: "-",
    },
    {
      id: "140401622",
      nickname: "-",
    },
    {
      id: "140401623",
      nickname: "-",
    },
    {
      id: "140401624",
      nickname: "-",
    },
    {
      id: "140401625",
      nickname: "-",
    },
    {
      id: "140401626",
      nickname: "-",
    },
    {
      id: "140401627",
      nickname: "-",
    },
    {
      id: "140401628",
      nickname: "-",
    },
    {
      id: "140401629",
      nickname: "-",
    },
    {
      id: "140401630",
      nickname: "-",
    },
    {
      id: "140401631",
      nickname: "-",
    },
    {
      id: "140401632",
      nickname: "-",
    },

    //SADSA
    {
      id: "140401633",
      nickname: "-",
    },
    {
      id: "140401634",
      nickname: "-",
    },
    {
      id: "140401635",
      nickname: "-",
    },
    {
      id: "140401636",
      nickname: "-",
    },
    {
      id: "140401637",
      nickname: "-",
    },
    {
      id: "140401638",
      nickname: "-",
    },
    {
      id: "140401639",
      nickname: "-",
    },
    {
      id: "140401640",
      nickname: "-",
    },
    {
      id: "140401641",
      nickname: "-",
    },
    {
      id: "140401642",
      nickname: "-",
    },
    {
      id: "140401643",
      nickname: "-",
    },
    {
      id: "140401644",
      nickname: "-",
    },
    {
      id: "140401645",
      nickname: "-",
    },
    {
      id: "140401646",
      nickname: "-",
    },
    {
      id: "140401647",
      nickname: "-",
    },
    {
      id: "140401648",
      nickname: "-",
    },
    {
      id: "140401649",
      nickname: "-",
    },
    {
      id: "140401650",
      nickname: "-",
    },
    {
      id: "140401651",
      nickname: "-",
    },
    {
      id: "140401652",
      nickname: "-",
    },
    //SADSA
    {
      id: "140401653",
      nickname: "-",
    },
    {
      id: "140401654",
      nickname: "-",
    },
    {
      id: "140401655",
      nickname: "-",
    },
    {
      id: "140401656",
      nickname: "-",
    },
    {
      id: "140401657",
      nickname: "-",
    },
    {
      id: "140401658",
      nickname: "-",
    }
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

  pNick.innerHTML = i + 1;

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
  row.appendChild(colNick);
  row.appendChild(colId);
  row.appendChild(colCheck);
  row.appendChild(colCopy);
  tableAccount.appendChild(row);

  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(id);
    document.getElementById("check" + i).checked = true;
  });
}
