import{S as w,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b="48146281-74a8df349cdfa7f862384d5f8",L="https://pixabay.com/api/";async function u(t,o=1,a=20){const s=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:a});try{const e=await fetch(`${L}?${s}`);if(!e.ok)throw new Error(`Error: ${e.status}`);return await e.json()}catch(e){throw console.error(e.message),e}}function f(t){return t.map(({webformatURL:o,largeImageURL:a,tags:s,likes:e,views:r,comments:n,downloads:p})=>`
      <a href="${a}" class="gallery__item">
        <div class="image-card">
          <img src="${o}" alt="${s}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${n}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </div>
      </a>
    `).join("")}const v=document.querySelector("#search-form"),d=document.querySelector(".gallery"),m=document.querySelector("#loader");let c="",l=1,h=new w(".gallery a");function y(){m.style.display="block"}function g(){m.style.display="none"}function E(){d.innerHTML=""}v.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements.searchQuery.value.trim();if(!o){i.warning({title:"Warning",message:"Search query cannot be empty!"});return}c=o,l=1,E(),y();try{const a=await u(c,l);a.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(d.innerHTML=f(a.hits),h.refresh())}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{g()}});async function P(){l+=1,y();try{const t=await u(c,l);t.hits.length===0?i.info({title:"Info",message:"You have reached the end of search results."}):(d.insertAdjacentHTML("beforeend",f(t.hits)),h.refresh())}catch{i.error({title:"Error",message:"Failed to load more images. Please try again later."})}finally{g()}}window.addEventListener("scroll",()=>{window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100&&c&&P()});
//# sourceMappingURL=index.js.map
