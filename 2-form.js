import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},l=document.querySelector(".feedback-form"),s=l.elements.email,m=l.elements.message,o="feedback-form-state",r=localStorage.getItem(o),t=JSON.parse(r);t&&(s.value=t.email||"",m.value=t.message||"",e.email=s.value,e.message=m.value);l.addEventListener("input",i);function i(a){a.target.placeholder="",a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem(o,JSON.stringify(e))}l.addEventListener("submit",c);function c(a){a.preventDefault(),e.email&&e.message?(console.log(e),localStorage.removeItem(o),l.reset(),e.email="",e.message=""):(e.email||(s.placeholder="Fill please all fields"),e.message||(m.placeholder="Fill please all fields"))}
//# sourceMappingURL=2-form.js.map
