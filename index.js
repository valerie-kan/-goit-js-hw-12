import{a as p,S as L,i as l}from"./assets/vendor-CRwkH7JT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();p.defaults.baseURL="https://pixabay.com/api/";function f(e,r){d.classList.remove("is-hidden");const i={params:{key:"45515322-6acc0c0fe7102921e2f085c71",q:e,per_page:15,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get("",i)}function h(e){return`
    <li class='gallery-item'>
        <a class='gallery-link' href='${e.largeImageURL}'>
        <img class='gallery-img' src='${e.webformatURL}' alt='${e.tags}'>
        <div class='img-info'>
        </a>
        <p><span>Likes</span> ${e.likes}</p>
        <p><span>Views</span> ${e.views}</p>
        <p><span>Comments</span> ${e.comments}</p>
        <p><span>Downloads</span> ${e.downloads}</p>
        </div>
    </li>`}const g=document.querySelector(".form"),S=document.querySelector(".form-input"),m=document.querySelector(".gallery-list"),d=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");g.addEventListener("submit",b);o.addEventListener("click",v);const y=new L(".gallery-item a",{captionsData:"alt"});let n="",c=1;async function b(e){if(e.preventDefault(),o.classList.contains("is-hidden")||o.classList.add("is-hidden"),m.innerHTML="",n=S.value,!(n===""||n.trim()==="")){c=1;try{const r=await f(n,c);if(r.data.hits.length===0){d.classList.add("is-hidden"),o.classList.add("is-hidden"),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16",color:"red",iconColor:"white"});return}const i=r.data.hits.map(a=>h(a)).join("");d.classList.add("is-hidden"),m.innerHTML=i,y.refresh(),o.classList.remove("is-hidden"),r.data.total<=15&&o.classList.add("is-hidden"),g.reset()}catch(r){l.error({message:r,position:"center",messageSize:"16",color:"red",iconColor:"white"})}}}async function v(){c++;try{const e=await f(n,c);d.classList.add("is-hidden");const r=e.data.hits.map(t=>h(t)).join("");m.insertAdjacentHTML("beforeend",r),y.refresh();const a=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:2*a,behavior:"smooth"}),c===Number.parseInt(e.data.total/15)&&(o.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16"}))}catch(e){l.error({message:e,position:"center",messageSize:"16",color:"red",iconColor:"white"})}}
//# sourceMappingURL=index.js.map