window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".loader");e.style.display="block";var t=document.querySelector(".error");t.style.display="none",fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_HLGUWzvJuiE1VeRTHvkYTULgbOt3ZxZUoaMKzGLipoZIjD44aDqiQjedexU2gF5X"}}).then((function(e){return e.json()})).catch((function(e){throw console.error("Error fetching cat breeds:",e),e})).then((function(t){var n=document.querySelector(".breed-select");if(0===n.length){var o=document.createElement("option");o.value="",o.textContent="",n.appendChild(o)}t.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)})),e.style.display="none",n.style.display="block"})).catch((function(){t.style.display="block",e.style.display="none"}))})),document.querySelector(".breed-select").addEventListener("change",(function(e){var t=e.target.value,n=document.querySelector(".cat-info");n.style.display="none";var o,c=document.querySelector(".loader");c.style.display="block",(o=t,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(o),{headers:{"x-api-key":"live_HLGUWzvJuiE1VeRTHvkYTULgbOt3ZxZUoaMKzGLipoZIjD44aDqiQjedexU2gF5X"}}).then((function(e){return e.json()})).catch((function(e){throw console.error("Error fetching cat by breed:",e),e}))).then((function(e){!function(e){var t=document.querySelector(".cat-info"),n=e[0].breeds[0].name,o=e[0].breeds[0].description,c=e[0].breeds[0].temperament;t.innerHTML='\n        <div class="box">\n        <img src="'.concat(e[0].url,'" alt="').concat(n,'" width="400px";/>\n        <div class="box__one">\n        <h3>').concat(n,"</h3>\n        <p><strong>Description:</strong> ").concat(o,"</p>\n        <p><strong>Temperament:</strong> ").concat(c,"</p>\n        </div>\n        </div>\n    ")}(e),c.style.display="none",n.style.display="block"})).catch((function(){document.querySelector(".error").style.display="block",c.style.display="none"}))}));
//# sourceMappingURL=index.e60cf83b.js.map