import{S as g}from"./assets/vendor-CgTBfC_f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const h=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],u=document.querySelector("ul.gallery"),f=h.map(({original:o,preview:i,description:s})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${s}"
            />
          </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",f);new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,widthRatio:.9,heightRatio:.9});const t={email:"",message:""},r=document.querySelector(".feedback-form"),n=r.elements.email,c=r.elements.message,m="feedback-form-state",y=localStorage.getItem(m),p=JSON.parse(y);p&&(n.value=p.email||"",c.value=p.message||"",t.email=n.value,t.message=c.value);r.addEventListener("input",b);function b(o){o.target.placeholder="",o.target.name==="email"?t.email=o.target.value.trim():o.target.name==="message"&&(t.message=o.target.value.trim()),localStorage.setItem(m,JSON.stringify(t))}r.addEventListener("submit",_);function _(o){o.preventDefault(),t.email&&t.message?(console.log(t),localStorage.removeItem(m),r.reset(),t.email="",t.message=""):(t.email||(n.placeholder="Fill please all fields"),t.message||(c.placeholder="Fill please all fields"))}
//# sourceMappingURL=index.js.map
