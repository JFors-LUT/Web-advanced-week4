
if(document.readyState !== "loading"){
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function(){
      console.log("Document ready after waiting!");
      initializeCode();
  })
}

function initializeCode() {
  const options = {
      edge: 'right',
      draggable: false,
      inDuration: 250,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true
  };

  fetch("http://localhost:8000/api/recipe", {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: '{ "recipe": "' + poemInput.value + '" }'
   })
   .then(response => response.json())
   .then(data => {
       console.log(data);
   })

  };