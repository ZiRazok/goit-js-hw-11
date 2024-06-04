import{i as u,S as p}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function d(a){const i=new URLSearchParams({key:"44228657-622a5a522e8285bbc9d7fdb17",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(a){const i=[];return a.forEach(e=>{i.push(`
            <li class="main-item">
                <a class="main-link" href="${e.largeImageURL}" onclick="return false;">
                  <img class="main-image" src="${e.webformatURL}" alt="${e.tags}" />
                  <div class="main-characteristics">
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Likes</p>
                      <p class="main-characteristics-value">${e.likes}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Views</p>
                      <p class="main-characteristics-value">${e.views}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Comments</p>
                      <p class="main-characteristics-value">${e.comments}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Downloads</p>
                      <p class="main-characteristics-value">${e.downloads}</p>
                    </div>
                </div>
              </a>
            </li>
            `)}),i}const f=document.querySelector(".open-search"),r=document.querySelector(".main-form"),n=document.querySelector(".main-form-input"),g=document.querySelector(".main-list");let m;function o(){r.classList.toggle("isOpen"),r.reset()}f.addEventListener("click",()=>{o(),n.focus()});document.addEventListener("keyup",a=>{r.classList.contains("isOpen")&&a.key==="Escape"&&o()});r.addEventListener("submit",a=>{if(a.preventDefault(),!n.value){u.warning({message:"The input field cannot be empty!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"});return}m=n.value,o(),d(m).then(i=>{if(i.hits.length==0)throw u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"}),new Error("Cannot found");console.log(i.hits),g.insertAdjacentHTML("beforeend",h(i.hits).join(""));var e=new p(".main-list a",{captionsData:"alt"});e.refresh()}).catch(i=>console.log("ERROR:",i))});
//# sourceMappingURL=commonHelpers.js.map
