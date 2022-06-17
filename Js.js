
async function getResponce(){
    let responce = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
  
    let content = await responce.json()
    content = content.splice(length)
    let list = document.querySelector('.a1')
  
    let key;
    
    for (key in content) {
        
  list.innerHTML += ` <a data-modal-btn="my_modal${content[key].id}"  class="sulcka"  href="#"  >
  <div  class="a2"> 
  <div>
  <img class="foto" src="https://usersdogs.dmytrominochkin.cloud${content[key].dogImage}" alt="edf" height="100px"> 
  </div>
  <div class="a3"> ${content[key].title}
   <div class="a6">${content[key].sex}
      <br>
      
  </div>
  </div>
  </div>
  </a>  
  
  <div data-modal-window="my_modal${content[key].id}" class="modal">
      <div class="close_modal_window">&times</div>
      <div class="modal_content">
      
  <div class="modal_inner">
  <div class="modal_title"><img class="foto1" src="https://usersdogs.dmytrominochkin.cloud${content[key].dogImage}" alt="edf" ></div>
  
  </div>
  <div class="c4">
  <span class="c2">
  ${content[key].title}<br> 
  </span>
      <hr>
      <span class="c3">
          Sex:
          <br>
      </span>
      ${content[key].sex}
    <br>
    <hr>
    <span class="c3">
          Age:
          <br>
      </span>
      ${content[key].age}
      <br>
      <span class="c3">
          Personality:
          <br>
      </span>
      ${content[key].description}
      <br>
  <div>
      <a href="" class="pressed-button"><img  src="https://i.ibb.co/ZmJQ8mt/free-icon-phone-call-126509.png" alt="free-icon-phone-call-126509" width="20px"> Adopt Me </a>
  <div>
      </div>
      
  </div>
  </div>`
  
  
  let btns = document.querySelectorAll("*[data-modal-btn]")
  
  for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
  let name = btns[i].getAttribute('data-modal-btn');
  let modal = document.querySelector("[data-modal-window='"+name+"']");
  modal.style.display = "block";
  
  let close = modal.querySelector(".close_modal_window");
  close.addEventListener('click',function(){
    modal.style.display = "none";
  })
    })
  }
  
  
  window.onclick = function(e){
    if(e.target.hasAttribute('data-modal-window')){
      let modals = document.querySelectorAll("*[data-modal-window]");
      for(let i = 0; i<modals.length; i++){
        modals[i].style.display = "none";
    }
  }
  }
  }
  
  }
  getResponce()
  