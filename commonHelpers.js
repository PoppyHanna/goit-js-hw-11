import{i as s}from"./assets/vendor-bee2f3af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();function u(n){const o="https://pixabay.com",t="/api/",c=new URLSearchParams({key:"42342437-5c4c341e915bce4954251eee0",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=o+t+"?"+c;return fetch(r).then(e=>{if(!e.ok)throw new Error("Error fetching data: "+e.status);return e.json()}).catch(e=>{console.error("Error fetching data:",e)})}function f(n){const o=document.querySelector(".js-container"),t=document.createDocumentFragment();n.hits.forEach(r=>{const e=document.createElement("img");e.src=r.webformatURL,e.alt=r.tags,t.appendChild(e)}),o.appendChild(t),new SimpleLightbox(".js-container img").refresh()}const d=document.getElementById("search-form"),a=document.querySelector(".js-container"),l=document.querySelector(".loader");d.addEventListener("submit",function(n){n.preventDefault();const o=document.getElementById("search-input").value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search query"});return}l.style.display="block",a.innerHTML="",u(o).then(t=>{t.hits.length===0?s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t)}).catch(t=>{a.innerHTML===""&&(console.error("Error fetching data:",t),s.error({title:"Error",message:"An error occurred while searching for images"}))}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map