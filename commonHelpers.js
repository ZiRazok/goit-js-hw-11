import{i as d,S as h}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))m(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function f(a){const e=new URLSearchParams({key:"44228657-622a5a522e8285bbc9d7fdb17",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(a){const e=[];return a.forEach(t=>{e.push(`
            <li class="main-item">
                <a class="main-link" href="${t.largeImageURL}" onclick="return false;">
                  <img class="main-image" src="${t.webformatURL}" alt="${t.tags}" height="200" width="200" />
                  <div class="main-characteristics">
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Likes</p>
                      <p class="main-characteristics-value">${t.likes}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Views</p>
                      <p class="main-characteristics-value">${t.views}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Comments</p>
                      <p class="main-characteristics-value">${t.comments}</p>
                    </div>
                    <div class="main-characteristics-element">
                      <p class="main-characteristics-type">Downloads</p>
                      <p class="main-characteristics-value">${t.downloads}</p>
                    </div>
                </div>
              </a>
            </li>
            `)}),e}const y=document.querySelector(".open-search"),s=document.querySelector(".main-form"),l=document.querySelector(".main-form-input"),n=document.querySelector(".main-list"),v=document.querySelector(".main-loader");let p;function u(){s.classList.toggle("isOpen"),s.reset()}function o(){v.classList.toggle("loader")}y.addEventListener("click",()=>{u(),l.focus()});document.addEventListener("keyup",a=>{s.classList.contains("isOpen")&&a.key==="Escape"&&u()});s.addEventListener("submit",a=>{if(a.preventDefault(),!l.value){d.warning({message:"The input field cannot be empty!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"});return}p=l.value,u(),o(),n.querySelectorAll("li")&&n.querySelectorAll("li").forEach(e=>{e.remove()}),f(p).then(e=>{if(e.hits.length==0)throw d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"}),o(),new Error("Cannot found");o(),n.insertAdjacentHTML("beforeend",g(e.hits).join(""));var t=new h(".main-list a",{captionsData:"alt"});t.refresh()}).catch(e=>console.log("ERROR:",e))});
//# sourceMappingURL=commonHelpers.js.map
