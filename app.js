document.addEventListener('DOMContentLoaded',function(){
      let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square");
  let colorArray = ["red", "blue", "green", "blue-green","grey","dark-grey"];
  button.appendChild(buttonText);
  document.body.appendChild(button);
  button.addEventListener("click", addDiv);
  let idNum = 1;
  function addDiv() {
    let mops = document.createElement("div");
    mops.classList = "squares";
    document.body.appendChild(mops);
    mops.setAttribute("id", idNum);
    idNum++;
    mops.addEventListener("mouseenter", function () {
      mops.textContent = mops.id;
    });
    mops.addEventListener("mouseleave", function () {
      mops.textContent = " ";
    });
    mops.addEventListener('click', function() { 
    mops.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    } )
  mops.addEventListener('dblclick', function() {
      if(mops.id % 2 === 0) {
          if(mops.nextElementSibling){
              mops.nextElementSibling.remove();
          } else{
              alert('There Must Be One.!');
          }
      }
      if(mops.id & 2 == 1) { 
        if(mops.previousElementSibling) 
        mops.previousElementSibling.remove();
    } else {
        alert('There Can Only Be One.!');
    }
  } )
}
});