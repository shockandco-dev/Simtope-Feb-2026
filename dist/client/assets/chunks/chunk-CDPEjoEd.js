import{c as r}from"./chunk--1GISAhY.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=r("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),t="https://script.google.com/macros/s/AKfycbysRWWUq4X0u-A_mWr-wyV5hQrhMvkzOiquzTd1NEPjjeXeEyx6ogfQC9I1dCL6YDT0/exec",n=async o=>{try{const e=new URLSearchParams;for(const c in o)e.append(c,String(o[c]));return await fetch(t,{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.toString()}),{result:"success"}}catch(e){throw console.error("Simtope: Cloud sync failed:",e),e}};export{a as L,n as s};
