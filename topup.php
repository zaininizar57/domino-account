<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bukan Sarjana</title>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    <link rel="stylesheet" href="dist/css/output.css" />
  </head>
  <body>

    <!-- Code block starts -->
    <dh-component>
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="py-12 hidden transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
          <div class="fixed inset-0 bg-gray-700 opacity-25"></div>
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <div class="w-full flex justify-start text-gray-600 mb-3">
                      <!--  -->
                  </div>
                  <form action="backend\app\account.php" method="post">
                    <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Tambah ID</h1>
                    <br>
                    <label for="id" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Id</label>
                    <input name="id" id="id" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Masukkan ID" />
                    <label for="nickname" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nickname</label>
                    <input name="nickname" id="nickname" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Masukkan Nickname" />
                    <br>
                    <div class="flex items-center justify-start w-full">
                        <button type="submit" name="save_topup" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Save</button>
                        <div style="cursor: pointer;" class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</div>
                    </div>
                  </form>
                  <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                      <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      <script>
          let modal = document.getElementById("modal");
          function modalHandler(val) {
              if (val) {
                  fadeIn(modal);
              } else {
                  fadeOut(modal);
              }
          }
          function fadeOut(el) {
              el.style.opacity = 1;
              (function fade() {
                  if ((el.style.opacity -= 0.1) < 0) {
                      el.style.display = "none";
                  } else {
                      requestAnimationFrame(fade);
                  }
              })();
          }
          function fadeIn(el, display) {
              el.style.opacity = 0;
              el.style.display = display || "flex";
              (function fade() {
                  let val = parseFloat(el.style.opacity);
                  if (!((val += 0.2) > 1)) {
                      el.style.opacity = val;
                      requestAnimationFrame(fade);
                  }
              })();
          }
      </script>
      
    </dh-component>
    <!-- Code block ends -->

    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 border">
      <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="flex flex-row items-center justify-between p-4">
            <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Bukan Sarjana</a>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <a href="index.html" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">No TopUp</a>
            <a href="topup.html" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 focus:text-gray-900 bg-indigo-500 text-white focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">TopUp</a>
          </nav>
        </div>
      </div>
    </div>

    <div class="container rounded shadow mx-auto my-8">
      <div class="sm:px-6 w-full">
        <div class="px-4 md:px-10 py-4 md:py-7">
          <div class="flex items-center justify-between pl-4">
            <p
              tabindex="0"
              class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-gray-800"
            >
              List Account <span class="bg-green-300 text-xs py-1 px-1 text-white rounded-lg">TopUp</span>
            </p>
            <button 
                id="button"
                onclick="modalHandler(true)"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p class="text-sm font-medium leading-none text-white">
                  Add Account
                </p>
              </button>
          </div>
        </div>
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="mt-7 overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <tbody id="table-account">
                <!--  -->
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <script src="src/js/topup.js"></script>
    </div>
  </body>
</html>
