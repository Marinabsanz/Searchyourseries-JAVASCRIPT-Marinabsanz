const urlShow="//api.tvmaze.com/search/shows?q=",userText=document.querySelector(".js-user-search"),button=document.querySelector(".js-button"),result=document.querySelector(".js-result");let totalUlFav=document.querySelector(".js-shows-listFav"),totalSeries=[],listFav=[],favorites=[];function listenNowseries(){const e=document.querySelectorAll(".js-list");for(const t of e)t.addEventListener("click",favoritesChanges)}function favoritesChanges(e){e.currentTarget;const t=e.currentTarget;t.classList.toggle("changeColor"),currentSelect2=parseInt(t.id);if(void 0===listFav.find(e=>e.show.id===currentSelect2)){const e=totalSeries.find(e=>e.show.id===currentSelect2);listFav.push(e)}paintFavoritesTotal()}function paintFavoritesTotal(){let e="";totalUlFav.innerHTML="";for(const t of listFav){e+=`<li class="js-list" id="${t.show.id}">`,e+=t.show.name+":</br>";null===t.show.image?e='<img class= "image-js-replace" src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"':e+=`<img class= "image-js-replace" src="${t.show.image.medium}"/>`,e+="</li>"}totalUlFav.innerHTML=e}const reloadButton=document.getElementById("#reload");function reload(){location.reload()}function showLS(){}reloadButton.addEventListener("click",reload,!1),console.log(showLS),localStorage.setItem("totalUlFav",JSON.stringify(totalUlFav));const go=document.querySelector(".js-Go");function searchShows(){const e=userText.value;fetch(urlShow+e).then(e=>e.json()).then(e=>{totalSeries=e,0===e.length?result.innerHTML="No hay resultados en tu búsqueda":result.innerHTML="Pincha para guardar en favoritos</br>";for(const e of totalSeries){let t="";t+=`<li class="js-list" id="${e.show.id}">`,t+=e.show.name+":</br>",t+=e.show.schedule.time;null===e.show.image?t='<img class= "image-js-replace" src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"':t+=`<img class= "image-js-replace" src="${e.show.image.medium}"/>`,t+="</li>",result.innerHTML+=t,go.innerHTML=e.show.schedule.time}listenNowseries(),console.log(totalSeries)})}function gotoGo(){for(const e of totalSeries){let t=e.show.name;t=e.show.name,console.log(t)}}go.addEventListener("click",gotoGo),button.addEventListener("click",searchShows);