import{a as f,S as L,i as d}from"./assets/vendor-CRwkH7JT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";function p(e,r){n.classList.remove("is-hidden");const i={params:{key:"45515322-6acc0c0fe7102921e2f085c71",q:e,per_page:15,page:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return f.get("",i)}function h(e){return`
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
    </li>`}const g=document.querySelector(".form"),v=document.querySelector(".form-input"),u=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");g.addEventListener("submit",S);o.addEventListener("click",b);const y=new L(".gallery-item a",{captionsData:"alt"});let l="",c=1;async function S(e){if(e.preventDefault(),o.classList.contains("is-hidden")||o.classList.add("is-hidden"),u.innerHTML="",l=v.value.trim(),l!==""){c=1;try{const r=await p(l,c);if(r.data.hits.length===0){n.classList.add("is-hidden"),o.classList.add("is-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16",color:"red",iconColor:"white"});return}const i=r.data.hits.map(a=>h(a)).join("");n.classList.add("is-hidden"),u.innerHTML=i,y.refresh(),o.classList.remove("is-hidden"),r.data.total<=15&&o.classList.add("is-hidden"),g.reset()}catch(r){d.error({message:r.message,position:"center",messageSize:"16",color:"red",iconColor:"white"})}finally{n.classList.add("is-hidden")}}}async function b(){c++,n.classList.remove("is-hidden");try{const e=await p(l,c),r=e.data.hits.map(t=>h(t)).join("");u.insertAdjacentHTML("beforeend",r),y.refresh();const a=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:2*a,behavior:"smooth"}),c===Math.ceil(e.data.total/15)&&(o.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16"}))}catch(e){d.error({message:e,position:"center",messageSize:"16",color:"red",iconColor:"white"})}finally{n.classList.add("is-hidden")}}
//# sourceMappingURL=index.js.map