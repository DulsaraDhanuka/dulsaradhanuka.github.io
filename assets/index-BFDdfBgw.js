(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="172",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,zl=1,_d=2,vu=1,vd=2,Sn=3,Qn=0,Fe=1,Tn=2,$n=0,Ji=1,Hl=2,Gl=3,Wl=4,gd=5,di=100,xd=101,bd=102,yd=103,Ed=104,wd=200,Md=201,Sd=202,Td=203,Ko=204,$o=205,Cd=206,Ad=207,Pd=208,Rd=209,Ld=210,Dd=211,Ud=212,Id=213,Nd=214,Zo=0,Jo=1,Qo=2,rr=3,ta=4,ea=5,na=6,ia=7,gu=0,Od=1,Fd=2,Zn=0,Bd=1,kd=2,Vd=3,zd=4,Hd=5,Gd=6,Wd=7,xu=300,sr=301,or=302,ra=303,sa=304,Js=306,oa=1e3,fi=1001,aa=1002,ln=1003,Xd=1004,ls=1005,hn=1006,lo=1007,mi=1008,Dn=1009,bu=1010,yu=1011,Ur=1012,ja=1013,vi=1014,Cn=1015,qr=1016,Ya=1017,Ka=1018,ar=1020,Eu=35902,wu=1021,Mu=1022,an=1023,Su=1024,Tu=1025,Qi=1026,lr=1027,Cu=1028,$a=1029,Au=1030,Za=1031,Ja=1033,Ns=33776,Os=33777,Fs=33778,Bs=33779,la=35840,ca=35841,ua=35842,ha=35843,da=36196,pa=37492,fa=37496,ma=37808,_a=37809,va=37810,ga=37811,xa=37812,ba=37813,ya=37814,Ea=37815,wa=37816,Ma=37817,Sa=37818,Ta=37819,Ca=37820,Aa=37821,ks=36492,Pa=36494,Ra=36495,Pu=36283,La=36284,Da=36285,Ua=36286,qd=3200,jd=3201,Ru=0,Yd=1,Yn="",Ke="srgb",cr="srgb-linear",Ws="linear",ie="srgb",Ri=7680,Xl=519,Kd=512,$d=513,Zd=514,Lu=515,Jd=516,Qd=517,tp=518,ep=519,ql=35044,jl="300 es",An=2e3,Xs=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Pr=Math.PI/180,Ir=180/Math.PI;function Ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function zt(n,t,e){return Math.max(t,Math.min(e,n))}function Qa(n,t){return(n%t+t)%t}function np(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ip(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function rp(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function sp(n,t=1){return t-Math.abs(Qa(n,t*2)-t)}function op(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ap(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function lp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function cp(n,t){return n+Math.random()*(t-n)}function up(n){return n*(.5-Math.random())}function hp(n){n!==void 0&&(Yl=n);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dp(n){return n*Pr}function pp(n){return n*Ir}function fp(n){return(n&n-1)===0&&n!==0}function mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gp={DEG2RAD:Pr,RAD2DEG:Ir,generateUUID:Ti,clamp:zt,euclideanModulo:Qa,mapLinear:np,inverseLerp:ip,lerp:Rr,damp:rp,pingpong:sp,smoothstep:op,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:up,seededRandom:hp,degToRad:dp,radToDeg:pp,isPowerOfTwo:fp,ceilPowerOfTwo:mp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:Pe,denormalize:qi};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,r,s,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],g=r[0],m=r[3],p=r[6],T=r[1],E=r[4],y=r[7],I=r[2],P=r[5],C=r[8];return s[0]=o*g+a*T+l*I,s[3]=o*m+a*E+l*P,s[6]=o*p+a*y+l*C,s[1]=c*g+u*T+h*I,s[4]=c*m+u*E+h*P,s[7]=c*p+u*y+h*C,s[2]=d*g+f*T+_*I,s[5]=d*m+f*E+_*P,s[8]=d*p+f*y+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=e*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-u*i)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Bt;function Du(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){const n=Nr("canvas");return n.style.display="block",n}const Kl={};function ji(n){n in Kl||(Kl[n]=!0,console.warn(n))}function bp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function yp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ep(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $l=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){const n={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?Ws:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cr]:{primaries:t,whitePoint:i,transfer:Ws,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}const Kt=wp();function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Nr("canvas")),Li.width=t.width,Li.height=t.height;const i=Li.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rn(e[i]/255)*255):e[i]=Rn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sp=0;class Uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uo(r[o].image)):s.push(uo(r[o]))}else s=uo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Le extends Si{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=fi,r=fi,s=hn,o=mi,a=an,l=Dn,c=Le.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ti(),this.name="",this.source=new Uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=xu;Le.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,I=(p+1)/2,P=(u+d)/4,C=(h+g)/4,L=(_+m)/4;return E>y&&E>I?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=C/i):y>I?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=L/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=L/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends Si{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Cp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Iu extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*g,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const I=Math.sqrt(E),P=Math.atan2(I,p*T);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const y=a*T;if(l=l*m+d*y,c=c*m+f*y,u=u*m+_*y,h=h*m+g*y,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-a*f,t[e+2]=c*_+u*f+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new U,Jl=new xi;class jr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),us.subVectors(this.max,br),Di.subVectors(t.a,br),Ui.subVectors(t.b,br),Ii.subVectors(t.c,br),Bn.subVectors(Ui,Di),kn.subVectors(Ii,Ui),ri.subVectors(Di,Ii);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!po(e,Di,Ui,Ii,us)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Di,Ui,Ii,us))?!1:(hs.crossVectors(Bn,kn),e=[hs.x,hs.y,hs.z],po(e,Di,Ui,Ii,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,cs=new jr,Di=new U,Ui=new U,Ii=new U,Bn=new U,kn=new U,ri=new U,br=new U,us=new U,hs=new U,si=new U;function po(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){si.fromArray(n,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pp=new jr,yr=new U,fo=new U;class tl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(yr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(fo)),this.expandByPoint(yr.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new U,mo=new U,ds=new U,Vn=new U,_o=new U,ps=new U,vo=new U;class Nu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){mo.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(mo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=Vn.dot(this.direction),l=-Vn.dot(ds),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mo).addScaledVector(ds,d),f}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,i,r,s){_o.subVectors(e,t),ps.subVectors(i,t),vo.crossVectors(_o,ps);let o=this.direction.dot(vo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(ps.crossVectors(Vn,ps));if(l<0)return null;const c=a*this.direction.dot(_o.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(vo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,r,s,o,a,l,c,u,h,d,f,_,g,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,d,f,_,g,m)}set(t,e,i,r,s,o,a,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Lp)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),zn.crossVectors(i,Ve),zn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),zn.crossVectors(i,Ve)),zn.normalize(),fs.crossVectors(Ve,zn),r[0]=zn.x,r[4]=fs.x,r[8]=Ve.x,r[1]=zn.y,r[5]=fs.y,r[9]=Ve.y,r[2]=zn.z,r[6]=fs.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],T=i[3],E=i[7],y=i[11],I=i[15],P=r[0],C=r[4],L=r[8],M=r[12],b=r[1],A=r[5],q=r[9],k=r[13],j=r[2],Y=r[6],H=r[10],Z=r[14],V=r[3],at=r[7],mt=r[11],Et=r[15];return s[0]=o*P+a*b+l*j+c*V,s[4]=o*C+a*A+l*Y+c*at,s[8]=o*L+a*q+l*H+c*mt,s[12]=o*M+a*k+l*Z+c*Et,s[1]=u*P+h*b+d*j+f*V,s[5]=u*C+h*A+d*Y+f*at,s[9]=u*L+h*q+d*H+f*mt,s[13]=u*M+h*k+d*Z+f*Et,s[2]=_*P+g*b+m*j+p*V,s[6]=_*C+g*A+m*Y+p*at,s[10]=_*L+g*q+m*H+p*mt,s[14]=_*M+g*k+m*Z+p*Et,s[3]=T*P+E*b+y*j+I*V,s[7]=T*C+E*A+y*Y+I*at,s[11]=T*L+E*q+y*H+I*mt,s[15]=T*M+E*k+y*Z+I*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+g*(+e*l*f-e*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+e*c*h-e*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+p*(-r*a*u-e*l*h+e*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],T=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,E=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,y=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,I=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,P=e*T+i*E+r*y+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=T*C,t[1]=(g*d*s-h*m*s-g*r*f+i*m*f+h*r*p-i*d*p)*C,t[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*C,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*C,t[4]=E*C,t[5]=(u*m*s-_*d*s+_*r*f-e*m*f-u*r*p+e*d*p)*C,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*p-e*l*p)*C,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*f+e*l*f)*C,t[8]=y*C,t[9]=(_*h*s-u*g*s-_*i*f+e*g*f+u*i*p-e*h*p)*C,t[10]=(o*g*s-_*a*s+_*i*c-e*g*c-o*i*p+e*a*p)*C,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*f-e*a*f)*C,t[12]=I*C,t[13]=(u*g*r-_*h*r+_*i*d-e*g*d-u*i*m+e*h*m)*C,t[14]=(_*a*r-o*g*r-_*i*l+e*g*l+o*i*m-e*a*m)*C,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,T=l*c,E=l*u,y=l*h,I=i.x,P=i.y,C=i.z;return r[0]=(1-(g+p))*I,r[1]=(f+y)*I,r[2]=(_-E)*I,r[3]=0,r[4]=(f-y)*P,r[5]=(1-(d+p))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(_+E)*C,r[9]=(m-T)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),a=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=An){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let f,_;if(a===An)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xs)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=An){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*c,f=(i+r)*u;let _,g;if(a===An)_=(o+s)*h,g=-2*h;else if(a===Xs)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new U,rn=new me,Rp=new U(0,0,0),Lp=new U(1,1,1),zn=new U,fs=new U,Ve=new U,Ql=new me,tc=new xi;class Un{constructor(t=0,e=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dp=0;const ec=new U,Oi=new xi,bn=new me,ms=new U,Er=new U,Up=new U,Ip=new xi,nc=new U(1,0,0),ic=new U(0,1,0),rc=new U(0,0,1),sc={type:"added"},Np={type:"removed"},Fi={type:"childadded",child:null},go={type:"childremoved",child:null};class He extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new U,e=new Un,i=new xi,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new Bt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Er,ms,this.up):bn.lookAt(ms,Er,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(bn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}He.DEFAULT_UP=new U(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,yn=new U,xo=new U,En=new U,Bi=new U,ki=new U,oc=new U,bo=new U,yo=new U,Eo=new U,wo=new fe,Mo=new fe,So=new fe;class on{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),sn.subVectors(t,e),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){sn.subVectors(r,e),yn.subVectors(i,e),xo.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(yn),l=sn.dot(xo),c=yn.dot(yn),u=yn.dot(xo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return wo.setScalar(0),Mo.setScalar(0),So.setScalar(0),wo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,i),So.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(wo,s.x),o.addScaledVector(Mo,s.y),o.addScaledVector(So,s.z),o}static isFrontFacing(t,e,i,r){return sn.subVectors(i,e),yn.subVectors(t,e),sn.cross(yn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Bi.subVectors(r,i),ki.subVectors(s,i),bo.subVectors(t,i);const l=Bi.dot(bo),c=ki.dot(bo);if(l<=0&&c<=0)return e.copy(i);yo.subVectors(t,r);const u=Bi.dot(yo),h=ki.dot(yo);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Bi,o);Eo.subVectors(t,s);const f=Bi.dot(Eo),_=ki.dot(Eo);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(ki,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return oc.subVectors(s,r),a=(h-u)/(h-u+(f-_)),e.copy(r).addScaledVector(oc,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(i).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function To(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Kt.workingColorSpace){if(t=Qa(t,1),e=zt(e,0,1),i=zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=To(o,s,t+1/3),this.g=To(o,s,t),this.b=To(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Fu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Kt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(zt(Ce.r*255,0,255))*65536+Math.round(zt(Ce.g*255,0,255))*256+Math.round(zt(Ce.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ke){Kt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(_s);const i=Rr(Hn.h,_s.h,e),r=Rr(Hn.s,_s.s,e),s=Rr(Hn.l,_s.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new te;te.NAMES=Fu;let Op=0;class Yr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=$o,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class el extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,vs=new ot;class pn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),r=Pe(r,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class Bu extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ku extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qe extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fp=0;const je=new me,Co=new He,Vi=new U,ze=new jr,wr=new jr,we=new U;class On extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?ku:Bu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(ze.min,wr.min),ze.expandByPoint(we),we.addVectors(ze.max,wr.max),ze.expandByPoint(we)):(ze.expandByPoint(wr.min),ze.expandByPoint(wr.max))}ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),we.add(Vi)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,d=new ot,f=new ot,_=new ot,g=new U,m=new U;function p(L,M,b){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,M),_.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const A=1/(f.x*_.y-_.x*f.y);isFinite(A)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(A),a[L].add(g),a[M].add(g),a[b].add(g),l[L].add(m),l[M].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,M=T.length;L<M;++L){const b=T[L],A=b.start,q=b.count;for(let k=A,j=A+q;k<j;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new U,y=new U,I=new U,P=new U;function C(L){I.fromBufferAttribute(r,L),P.copy(I);const M=a[L];E.copy(M),E.sub(I.multiplyScalar(I.dot(M))).normalize(),y.crossVectors(P,M);const A=y.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,A)}for(let L=0,M=T.length;L<M;++L){const b=T[L],A=b.start,q=b.count;for(let k=A,j=A+q;k<j;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new pn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new me,oi=new Nu,gs=new tl,lc=new U,xs=new U,bs=new U,ys=new U,Ao=new U,Es=new U,cc=new U,ws=new U;class Ze extends He{constructor(t=new On,e=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ao.fromBufferAttribute(h,t),o?Es.addScaledVector(Ao,u):Es.addScaledVector(Ao.sub(e),u))}e.add(Es)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(gs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(gs,lc)===null||oi.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(ac.copy(s).invert(),oi.copy(t.ray).applyMatrix4(ac),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,I=E;y<I;y+=3){const P=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);r=Ms(this,p,t,i,c,u,h,P,C,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);r=Ms(this,o,t,i,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,I=E;y<I;y+=3){const P=y,C=y+1,L=y+2;r=Ms(this,p,t,i,c,u,h,P,C,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=m,E=m+1,y=m+2;r=Ms(this,o,t,i,c,u,h,T,E,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Bp(n,t,e,i,r,s,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Qn,a),l===null)return null;ws.copy(a),ws.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:n}}function Ms(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,bs),n.getVertexPosition(c,ys);const u=Bp(n,t,e,i,xs,bs,ys,cc);if(u){const h=new U;on.getBarycoord(cc,xs,bs,ys,h),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,h,new ot)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,h,new ot)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};on.getNormal(xs,bs,ys,d.normal),u.face=d,u.barycoord=h}return u}class pr extends On{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function _(g,m,p,T,E,y,I,P,C,L,M){const b=y/C,A=I/L,q=y/2,k=I/2,j=P/2,Y=C+1,H=L+1;let Z=0,V=0;const at=new U;for(let mt=0;mt<H;mt++){const Et=mt*A-k;for(let Ot=0;Ot<Y;Ot++){const Zt=Ot*b-q;at[g]=Zt*T,at[m]=Et*E,at[p]=j,c.push(at.x,at.y,at.z),at[g]=0,at[m]=0,at[p]=P>0?1:-1,u.push(at.x,at.y,at.z),h.push(Ot/C),h.push(1-mt/L),Z+=1}}for(let mt=0;mt<L;mt++)for(let Et=0;Et<C;Et++){const Ot=d+Et+Y*mt,Zt=d+Et+Y*(mt+1),X=d+(Et+1)+Y*(mt+1),rt=d+(Et+1)+Y*mt;l.push(Ot,Zt,rt),l.push(Zt,X,rt),V+=6}a.addGroup(f,V,M),f+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Re(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const r in i)t[r]=i[r]}return t}function kp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Vp={clone:ur,merge:Re};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zu extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new U,uc=new ot,hc=new ot;class $e extends zu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,hc),e.subVectors(hc,uc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Hi=1;class Gp extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(zi,Hi,t,e);r.layers=this.layers,this.add(r);const s=new $e(zi,Hi,t,e);s.layers=this.layers,this.add(s);const o=new $e(zi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new $e(zi,Hi,t,e);a.layers=this.layers,this.add(a);const l=new $e(zi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new $e(zi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hu extends Le{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wp extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Hu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:$n});s.uniforms.tEquirect.value=e;const o=new Ze(r,s),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=hn),new Gp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Xp extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Po=new U,qp=new U,jp=new Bt;class jn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Po.subVectors(i,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jp.getNormalMatrix(t),r=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new tl,Ss=new U;class Gu{constructor(t=new jn,e=new jn,i=new jn,r=new jn,s=new jn,o=new jn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],g=r[10],m=r[11],p=r[12],T=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-f,y-p).normalize(),i[1].setComponents(l+s,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+u,m+_,y+T).normalize(),i[3].setComponents(l-o,d-u,m-_,y-T).normalize(),i[4].setComponents(l-a,d-h,m-g,y-E).normalize(),e===An)i[5].setComponents(l+a,d+h,m+g,y+E).normalize();else if(e===Xs)i[5].setComponents(a,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ss.x=r.normal.x>0?t.max.x:t.min.x,Ss.y=r.normal.y>0?t.max.y:t.min.y,Ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ts extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Wu extends Le{constructor(t,e,i,r,s,o,a,l,c,u=Qi){if(u!==Qi&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=vi),i===void 0&&u===lr&&(i=ar),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ot:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,r=[],s=[],o=[],a=new U,l=new me;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(zt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(zt(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nl extends _n{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yp extends nl{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function il(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Cs=new U,Ro=new il,Lo=new il,Do=new il;class Kp extends _n{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new U){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Cs.subVectors(r[0],r[1]).add(r[0]),c=Cs);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Cs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ro.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),Lo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),Do.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Lo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Do.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Ro.calc(l),Lo.calc(l),Do.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dc(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function $p(n,t){const e=1-n;return e*e*t}function Zp(n,t){return 2*(1-n)*n*t}function Jp(n,t){return n*n*t}function Lr(n,t,e,i){return $p(n,t)+Zp(n,e)+Jp(n,i)}function Qp(n,t){const e=1-n;return e*e*e*t}function tf(n,t){const e=1-n;return 3*e*e*n*t}function ef(n,t){return 3*(1-n)*n*n*t}function nf(n,t){return n*n*n*t}function Dr(n,t,e,i,r){return Qp(n,t)+tf(n,e)+ef(n,i)+nf(n,r)}class Xu extends _n{constructor(t=new ot,e=new ot,i=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Dr(t,r.x,s.x,o.x,a.x),Dr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rf extends _n{constructor(t=new U,e=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Dr(t,r.x,s.x,o.x,a.x),Dr(t,r.y,s.y,o.y,a.y),Dr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qu extends _n{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends _n{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends _n{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends _n{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Lr(t,r.x,s.x,o.x),Lr(t,r.y,s.y,o.y),Lr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yu extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(dc(a,l.x,c.x,u.x,h.x),dc(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var Ia=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:Kp,CubicBezierCurve:Xu,CubicBezierCurve3:rf,EllipseCurve:nl,LineCurve:qu,LineCurve3:sf,QuadraticBezierCurve:ju,QuadraticBezierCurve3:of,SplineCurve:Yu});class af extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Ia[r.type]().fromJSON(r))}return this}}class Na extends af{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qu(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new ju(this.currentPoint.clone(),new ot(t,e),new ot(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Xu(this.currentPoint.clone(),new ot(t,e),new ot(i,r),new ot(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Yu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new nl(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vs extends Na{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Na().fromJSON(r))}return this}}const lf={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Ku(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(i&&(s=pf(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let _=e;_<r;_+=e)h=n[_],d=n[_+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Or(s,o,e,a,l,f,0),o}};function Ku(n,t,e,i,r){let s,o;if(r===Mf(n,t,e,i)>0)for(s=t;s<e;s+=i)o=pc(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=pc(s,n[s],n[s+1],o);return o&&Qs(o,o.next)&&(Br(o),o=o.next),o}function bi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qs(e,e.next)||ce(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Or(n,t,e,i,r,s,o){if(!n)return;!o&&s&&gf(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?uf(n,i,r,s):cf(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=hf(bi(n),t,e),Or(n,t,e,i,r,s,2)):o===2&&df(n,t,e,i,r,s):Or(bi(n),t,e,i,r,s,1);break}}}function cf(n){const t=n.prev,e=n,i=n.next;if(ce(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&Ki(r,a,s,l,o,c,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function uf(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ce(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Oa(f,_,t,e,i),T=Oa(g,m,t,e,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=p&&y&&y.z<=T;){if(E.x>=f&&E.x<=g&&E.y>=_&&E.y<=m&&E!==r&&E!==o&&Ki(a,u,l,h,c,d,E.x,E.y)&&ce(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Ki(a,u,l,h,c,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=g&&E.y>=_&&E.y<=m&&E!==r&&E!==o&&Ki(a,u,l,h,c,d,E.x,E.y)&&ce(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&Ki(a,u,l,h,c,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hf(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Qs(r,s)&&$u(r,i,i.next,s)&&Fr(r,s)&&Fr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Br(i),Br(i.next),i=n=s),i=i.next}while(i!==n);return bi(i)}function df(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yf(o,a)){let l=Zu(o,a);o=bi(o,o.next),l=bi(l,l.next),Or(o,t,e,i,r,s,0),Or(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function pf(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=Ku(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(bf(c));for(r.sort(ff),s=0;s<r.length;s++)e=mf(r[s],e);return e}function ff(n,t){return n.x-t.x}function mf(n,t){const e=_f(n,t);if(!e)return t;const i=Zu(e,n);return bi(i,i.next),bi(e,e.next)}function _f(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Ki(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Fr(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&vf(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function vf(n,t){return ce(n.prev,n,t.prev)<0&&ce(t.next,n,n.next)<0}function gf(n,t,e,i){let r=n;do r.z===0&&(r.z=Oa(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,xf(r)}function xf(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function Oa(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bf(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ki(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function yf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ef(n,t)&&(Fr(n,t)&&Fr(t,n)&&wf(n,t)&&(ce(n.prev,n,t.prev)||ce(n,t.prev,t))||Qs(n,t)&&ce(n.prev,n,n.next)>0&&ce(t.prev,t,t.next)>0)}function ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qs(n,t){return n.x===t.x&&n.y===t.y}function $u(n,t,e,i){const r=Ps(ce(n,t,e)),s=Ps(ce(n,t,i)),o=Ps(ce(e,i,n)),a=Ps(ce(e,i,t));return!!(r!==s&&o!==a||r===0&&As(n,e,t)||s===0&&As(n,i,t)||o===0&&As(e,n,i)||a===0&&As(e,t,i))}function As(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ps(n){return n>0?1:n<0?-1:0}function Ef(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Fr(n,t){return ce(n.prev,n,n.next)<0?ce(n,t,n.next)>=0&&ce(n,n.prev,t)>=0:ce(n,t,n.prev)<0||ce(n,n.next,t)<0}function wf(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Zu(n,t){const e=new Fa(n.i,n.x,n.y),i=new Fa(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function pc(n,t,e,i){const r=new Fa(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fa(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mf(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class er{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return er.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];fc(t),mc(i,t);let o=t.length;e.forEach(fc);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,mc(i,e[l]);const a=lf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function mc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class rl extends On{constructor(t=new Vs([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qe(r,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Sf;let E,y=!1,I,P,C,L;p&&(E=p.getSpacedPoints(u),y=!0,d=!1,I=p.computeFrenetFrames(u,!1),P=new U,C=new U,L=new U),d||(m=0,f=0,_=0,g=0);const M=a.extractPoints(c);let b=M.shape;const A=M.holes;if(!er.isClockWise(b)){b=b.reverse();for(let $=0,nt=A.length;$<nt;$++){const S=A[$];er.isClockWise(S)&&(A[$]=S.reverse())}}const k=er.triangulateShape(b,A),j=b;for(let $=0,nt=A.length;$<nt;$++){const S=A[$];b=b.concat(S)}function Y($,nt,S){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(nt,S)}const H=b.length,Z=k.length;function V($,nt,S){let St,Q,vt;const it=$.x-nt.x,Rt=$.y-nt.y,dt=S.x-$.x,w=S.y-$.y,v=it*it+Rt*Rt,O=it*w-Rt*dt;if(Math.abs(O)>Number.EPSILON){const G=Math.sqrt(v),J=Math.sqrt(dt*dt+w*w),W=nt.x-Rt/G,Mt=nt.y+it/G,ct=S.x-w/J,_t=S.y+dt/J,Gt=((ct-W)*w-(_t-Mt)*dt)/(it*w-Rt*dt);St=W+it*Gt-$.x,Q=Mt+Rt*Gt-$.y;const et=St*St+Q*Q;if(et<=2)return new ot(St,Q);vt=Math.sqrt(et/2)}else{let G=!1;it>Number.EPSILON?dt>Number.EPSILON&&(G=!0):it<-Number.EPSILON?dt<-Number.EPSILON&&(G=!0):Math.sign(Rt)===Math.sign(w)&&(G=!0),G?(St=-Rt,Q=it,vt=Math.sqrt(v)):(St=it,Q=Rt,vt=Math.sqrt(v/2))}return new ot(St/vt,Q/vt)}const at=[];for(let $=0,nt=j.length,S=nt-1,St=$+1;$<nt;$++,S++,St++)S===nt&&(S=0),St===nt&&(St=0),at[$]=V(j[$],j[S],j[St]);const mt=[];let Et,Ot=at.concat();for(let $=0,nt=A.length;$<nt;$++){const S=A[$];Et=[];for(let St=0,Q=S.length,vt=Q-1,it=St+1;St<Q;St++,vt++,it++)vt===Q&&(vt=0),it===Q&&(it=0),Et[St]=V(S[St],S[vt],S[it]);mt.push(Et),Ot=Ot.concat(Et)}for(let $=0;$<m;$++){const nt=$/m,S=f*Math.cos(nt*Math.PI/2),St=_*Math.sin(nt*Math.PI/2)+g;for(let Q=0,vt=j.length;Q<vt;Q++){const it=Y(j[Q],at[Q],St);st(it.x,it.y,-S)}for(let Q=0,vt=A.length;Q<vt;Q++){const it=A[Q];Et=mt[Q];for(let Rt=0,dt=it.length;Rt<dt;Rt++){const w=Y(it[Rt],Et[Rt],St);st(w.x,w.y,-S)}}}const Zt=_+g;for(let $=0;$<H;$++){const nt=d?Y(b[$],Ot[$],Zt):b[$];y?(C.copy(I.normals[0]).multiplyScalar(nt.x),P.copy(I.binormals[0]).multiplyScalar(nt.y),L.copy(E[0]).add(C).add(P),st(L.x,L.y,L.z)):st(nt.x,nt.y,0)}for(let $=1;$<=u;$++)for(let nt=0;nt<H;nt++){const S=d?Y(b[nt],Ot[nt],Zt):b[nt];y?(C.copy(I.normals[$]).multiplyScalar(S.x),P.copy(I.binormals[$]).multiplyScalar(S.y),L.copy(E[$]).add(C).add(P),st(L.x,L.y,L.z)):st(S.x,S.y,h/u*$)}for(let $=m-1;$>=0;$--){const nt=$/m,S=f*Math.cos(nt*Math.PI/2),St=_*Math.sin(nt*Math.PI/2)+g;for(let Q=0,vt=j.length;Q<vt;Q++){const it=Y(j[Q],at[Q],St);st(it.x,it.y,h+S)}for(let Q=0,vt=A.length;Q<vt;Q++){const it=A[Q];Et=mt[Q];for(let Rt=0,dt=it.length;Rt<dt;Rt++){const w=Y(it[Rt],Et[Rt],St);y?st(w.x,w.y+E[u-1].y,E[u-1].x+S):st(w.x,w.y,h+S)}}}X(),rt();function X(){const $=r.length/3;if(d){let nt=0,S=H*nt;for(let St=0;St<Z;St++){const Q=k[St];Tt(Q[2]+S,Q[1]+S,Q[0]+S)}nt=u+m*2,S=H*nt;for(let St=0;St<Z;St++){const Q=k[St];Tt(Q[0]+S,Q[1]+S,Q[2]+S)}}else{for(let nt=0;nt<Z;nt++){const S=k[nt];Tt(S[2],S[1],S[0])}for(let nt=0;nt<Z;nt++){const S=k[nt];Tt(S[0]+H*u,S[1]+H*u,S[2]+H*u)}}i.addGroup($,r.length/3-$,0)}function rt(){const $=r.length/3;let nt=0;wt(j,nt),nt+=j.length;for(let S=0,St=A.length;S<St;S++){const Q=A[S];wt(Q,nt),nt+=Q.length}i.addGroup($,r.length/3-$,1)}function wt($,nt){let S=$.length;for(;--S>=0;){const St=S;let Q=S-1;Q<0&&(Q=$.length-1);for(let vt=0,it=u+m*2;vt<it;vt++){const Rt=H*vt,dt=H*(vt+1),w=nt+St+Rt,v=nt+Q+Rt,O=nt+Q+dt,G=nt+St+dt;Dt(w,v,O,G)}}}function st($,nt,S){l.push($),l.push(nt),l.push(S)}function Tt($,nt,S){Lt($),Lt(nt),Lt(S);const St=r.length/3,Q=T.generateTopUV(i,r,St-3,St-2,St-1);Xt(Q[0]),Xt(Q[1]),Xt(Q[2])}function Dt($,nt,S,St){Lt($),Lt(nt),Lt(St),Lt(nt),Lt(S),Lt(St);const Q=r.length/3,vt=T.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);Xt(vt[0]),Xt(vt[1]),Xt(vt[3]),Xt(vt[1]),Xt(vt[2]),Xt(vt[3])}function Lt($){r.push(l[$*3+0]),r.push(l[$*3+1]),r.push(l[$*3+2])}function Xt($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Tf(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ia[r.type]().fromJSON(r)),new rl(i,t.options)}}const Sf={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new ot(s,o),new ot(a,l),new ot(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[r*3],f=t[r*3+1],_=t[r*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ot(o,1-l),new ot(c,1-h),new ot(d,1-_),new ot(g,1-p)]:[new ot(a,1-l),new ot(u,1-h),new ot(f,1-_),new ot(m,1-p)]}};function Tf(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class to extends On{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let E=0;E<c;E++){const y=E*h-s;_.push(y,-T,0),g.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,y=T+c*(p+1),I=T+1+c*(p+1),P=T+1+c*p;f.push(E,y,P),f.push(y,I,P)}this.setIndex(f),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.widthSegments,t.heightSegments)}}class sl extends On{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let f=0;f<=i;f++)for(let _=0;_<=r;_++){const g=_/r*s,m=f/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(g),h.y=(t+e*Math.cos(m))*Math.sin(g),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=r;_++){const g=(r+1)*f+_-1,m=(r+1)*(f-1)+_-1,p=(r+1)*(f-1)+_,T=(r+1)*f+_;o.push(g,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Cf extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Af extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pf extends Yr{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const qs={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ju{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const Rf=new Ju;class Kr{constructor(t){this.manager=t!==void 0?t:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const wn={};class Lf extends Error{constructor(t,e){super(t),this.response=e}}class Df extends Kr{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=qs.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(wn[t]!==void 0){wn[t].push({onLoad:e,onProgress:i,onError:r});return}wn[t]=[],wn[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:E,value:y})=>{if(E)p.close();else{g+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let P=0,C=u.length;P<C;P++){const L=u[P];L.onProgress&&L.onProgress(I)}p.enqueue(y),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Lf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{qs.add(t,c);const u=wn[t];delete wn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete wn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Uf extends Kr{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=qs.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Nr("img");function l(){u(),qs.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class If extends Kr{constructor(t){super(t)}load(t,e,i,r){const s=new Le,o=new Uf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Nf extends zu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Of extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ff{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_c();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _c(){return performance.now()}class vc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bf{constructor(){this.type="ShapePath",this.color=new te,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Na,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,s,o){return this.currentPath.bezierCurveTo(t,e,i,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const T=[];for(let E=0,y=p.length;E<y;E++){const I=p[E],P=new Vs;P.curves=I.curves,T.push(P)}return T}function i(p,T){const E=T.length;let y=!1;for(let I=E-1,P=0;P<E;I=P++){let C=T[I],L=T[P],M=L.x-C.x,b=L.y-C.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(C=T[P],M=-M,L=T[I],b=-b),p.y<C.y||p.y>L.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const A=b*(p.x-C.x)-M*(p.y-C.y);if(A===0)return!0;if(A<0)continue;y=!y}}else{if(p.y!==C.y)continue;if(L.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=L.x)return!0}}return y}const r=er.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],d=[];let f=[],_=0,g;d[_]=void 0,f[_]=[];for(let p=0,T=s.length;p<T;p++)a=s[p],g=a.getPoints(),o=r(g),o=t?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new Vs,p:g},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:g[0]});if(!d[0])return e(s);if(d.length>1){let p=!1,T=0;for(let E=0,y=d.length;E<y;E++)h[E]=[];for(let E=0,y=d.length;E<y;E++){const I=f[E];for(let P=0;P<I.length;P++){const C=I[P];let L=!0;for(let M=0;M<d.length;M++)i(C.p,d[M].p)&&(E!==M&&T++,L?(L=!1,h[M].push(C)):p=!0);L&&h[E].push(C)}}T>0&&p===!1&&(f=h)}let m;for(let p=0,T=d.length;p<T;p++){l=d[p].s,c.push(l),m=f[p];for(let E=0,y=m.length;E<y;E++)l.holes.push(m[E].h)}return c}}class kf extends Si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function gc(n,t,e,i){const r=Vf(i);switch(e){case wu:return n*t;case Su:return n*t;case Tu:return n*t*2;case Cu:return n*t/r.components*r.byteLength;case $a:return n*t/r.components*r.byteLength;case Au:return n*t*2/r.components*r.byteLength;case Za:return n*t*2/r.components*r.byteLength;case Mu:return n*t*3/r.components*r.byteLength;case an:return n*t*4/r.components*r.byteLength;case Ja:return n*t*4/r.components*r.byteLength;case Ns:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ca:case ha:return Math.max(n,16)*Math.max(t,8)/4;case la:case ua:return Math.max(n,8)*Math.max(t,8)/2;case da:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ya:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ks:case Pa:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pu:case La:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Da:case Ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vf(n){switch(n){case Dn:case bu:return{byteLength:1,components:1};case Ur:case yu:case qr:return{byteLength:2,components:1};case Ya:case Ka:return{byteLength:2,components:4};case vi:case ja:case Cn:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function zf(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Im=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Hf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:jf,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:$f,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:tm,iridescence_fragment:em,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:sm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:um,common:hm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:fm,displacementmap_vertex:mm,emissivemap_fragment:_m,emissivemap_pars_fragment:vm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:bm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Em,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Im,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:Cm,fog_pars_fragment:Am,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Nm,lights_toon_pars_fragment:Om,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:Vm,lights_fragment_begin:zm,lights_fragment_maps:Hm,lights_fragment_end:Gm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:jm,map_fragment:Ym,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:t_,morphcolor_vertex:e_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:r_,normal_fragment_begin:s_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:l_,normal_vertex:c_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:f_,opaque_fragment:m_,packing:__,premultiplied_alpha_fragment:v_,project_vertex:g_,dithering_fragment:x_,dithering_pars_fragment:b_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:M_,shadowmap_vertex:S_,shadowmask_pars_fragment:T_,skinbase_vertex:C_,skinning_pars_vertex:A_,skinning_vertex:P_,skinnormal_vertex:R_,specularmap_fragment:L_,specularmap_pars_fragment:D_,tonemapping_fragment:U_,tonemapping_pars_fragment:I_,transmission_fragment:N_,transmission_pars_fragment:O_,uv_pars_fragment:F_,uv_pars_vertex:B_,uv_vertex:k_,worldpos_vertex:V_,background_vert:z_,background_frag:H_,backgroundCube_vert:G_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:q_,depth_vert:j_,depth_frag:Y_,distanceRGBA_vert:K_,distanceRGBA_frag:$_,equirect_vert:Z_,equirect_frag:J_,linedashed_vert:Q_,linedashed_frag:tv,meshbasic_vert:ev,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:rv,meshmatcap_vert:sv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:lv,meshphong_vert:cv,meshphong_frag:uv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:pv,meshtoon_frag:fv,points_vert:mv,points_frag:_v,shadow_vert:vv,shadow_frag:gv,sprite_vert:xv,sprite_frag:bv},lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},cn={basic:{uniforms:Re([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Re([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new te(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Re([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Re([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Re([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new te(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Re([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Re([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Re([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Re([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Re([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Re([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Re([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Re([lt.lights,lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};cn.physical={uniforms:Re([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Rs={r:0,b:0,g:0},li=new Un,yv=new me;function Ev(n,t,e,i,r,s,o){const a=new te(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function g(E){let y=!1;const I=_(E);I===null?p(a,l):I&&I.isColor&&(p(I,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const I=_(y);I&&(I.isCubeTexture||I.mapping===Js)?(u===void 0&&(u=new Ze(new pr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:ur(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),li.copy(y.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(li)),u.material.toneMapped=Kt.getTransfer(I.colorSpace)!==ie,(h!==I||d!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ze(new to(2,2),new ti({name:"BackgroundMaterial",uniforms:ur(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(I.colorSpace)!==ie,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Rs,Vu(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,y,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m,dispose:T}}function wv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,A,q,k,j){let Y=!1;const H=h(k,q,A);s!==H&&(s=H,c(s.object)),Y=f(b,k,q,j),Y&&_(b,k,q,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(b,A,q,k),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,A,q){const k=q.wireframe===!0;let j=i[b.id];j===void 0&&(j={},i[b.id]=j);let Y=j[A.id];Y===void 0&&(Y={},j[A.id]=Y);let H=Y[k];return H===void 0&&(H=d(l()),Y[k]=H),H}function d(b){const A=[],q=[],k=[];for(let j=0;j<e;j++)A[j]=0,q[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:q,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,A,q,k){const j=s.attributes,Y=A.attributes;let H=0;const Z=q.getAttributes();for(const V in Z)if(Z[V].location>=0){const mt=j[V];let Et=Y[V];if(Et===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),mt===void 0||mt.attribute!==Et||Et&&mt.data!==Et.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function _(b,A,q,k){const j={},Y=A.attributes;let H=0;const Z=q.getAttributes();for(const V in Z)if(Z[V].location>=0){let mt=Y[V];mt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));const Et={};Et.attribute=mt,mt&&mt.data&&(Et.data=mt.data),j[V]=Et,H++}s.attributes=j,s.attributesNum=H,s.index=k}function g(){const b=s.newAttributes;for(let A=0,q=b.length;A<q;A++)b[A]=0}function m(b){p(b,0)}function p(b,A){const q=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;q[b]=1,k[b]===0&&(n.enableVertexAttribArray(b),k[b]=1),j[b]!==A&&(n.vertexAttribDivisor(b,A),j[b]=A)}function T(){const b=s.newAttributes,A=s.enabledAttributes;for(let q=0,k=A.length;q<k;q++)A[q]!==b[q]&&(n.disableVertexAttribArray(q),A[q]=0)}function E(b,A,q,k,j,Y,H){H===!0?n.vertexAttribIPointer(b,A,q,j,Y):n.vertexAttribPointer(b,A,q,k,j,Y)}function y(b,A,q,k){g();const j=k.attributes,Y=q.getAttributes(),H=A.defaultAttributeValues;for(const Z in Y){const V=Y[Z];if(V.location>=0){let at=j[Z];if(at===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){const mt=at.normalized,Et=at.itemSize,Ot=t.get(at);if(Ot===void 0)continue;const Zt=Ot.buffer,X=Ot.type,rt=Ot.bytesPerElement,wt=X===n.INT||X===n.UNSIGNED_INT||at.gpuType===ja;if(at.isInterleavedBufferAttribute){const st=at.data,Tt=st.stride,Dt=at.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt,st.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Lt=0;Lt<V.locationSize;Lt++)E(V.location+Lt,Et/V.locationSize,X,mt,Tt*rt,(Dt+Et/V.locationSize*Lt)*rt,wt)}else{if(at.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,at.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let st=0;st<V.locationSize;st++)E(V.location+st,Et/V.locationSize,X,mt,Et*rt,Et/V.locationSize*st*rt,wt)}}else if(H!==void 0){const mt=H[Z];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(V.location,mt);break;case 3:n.vertexAttrib3fv(V.location,mt);break;case 4:n.vertexAttrib4fv(V.location,mt);break;default:n.vertexAttrib1fv(V.location,mt)}}}}T()}function I(){L();for(const b in i){const A=i[b];for(const q in A){const k=A[q];for(const j in k)u(k[j].object),delete k[j];delete A[q]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;const A=i[b.id];for(const q in A){const k=A[q];for(const j in k)u(k[j].object),delete k[j];delete A[q]}delete i[b.id]}function C(b){for(const A in i){const q=i[A];if(q[b.id]===void 0)continue;const k=q[b.id];for(const j in k)u(k[j].object),delete k[j];delete q[b.id]}}function L(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function Mv(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==an&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:I,maxSamples:P}}function Tv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new jn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,E=T*4;let y=p.clippingState||null;l.value=y,y=u(_,d,E,f);for(let I=0;I!==E;++I)y[I]=e[I];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==g;++E,y+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Cv(n){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=sr:a===sa&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const $i=4,xc=[.125,.215,.35,.446,.526,.582],pi=20,Uo=new Nf,bc=new te;let Io=null,No=0,Oo=0,Fo=!1;const hi=(1+Math.sqrt(5))/2,Gi=1/hi,yc=[new U(-hi,Gi,0),new U(hi,Gi,0),new U(-Gi,0,hi),new U(Gi,0,hi),new U(0,hi,-Gi),new U(0,hi,Gi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,No,Oo),this._renderer.xr.enabled=Fo,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:qr,format:an,colorSpace:cr,depthBuffer:!1},r=wc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(s)),this._blurMaterial=Pv(s,t,e)}return r}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,i,r){const a=new $e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bc),u.toneMapping=Zn,u.autoClear=!1;const f=new el({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new Ze(new pr,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(bc),g=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ls(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===sr||t.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yc[(r-s-1)%yc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ze(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*pi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):pi;m>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let T=0;for(let C=0;C<pi;++C){const L=C/g,M=Math.exp(-L*L/2);p.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const y=this._sizeLods[r],I=3*y*(r>E-$i?r-E+$i:0),P=4*(this._cubeSize-y);Ls(e,I,P,3*y,2*y),l.setRenderTarget(e),l.render(h,Uo)}}function Av(n){const t=[],e=[],i=[];let r=n;const s=n-$i+1+xc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-$i?l=xc[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*f),E=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,L=P>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];T.set(M,g*_*P),E.set(d,m*_*P);const b=[P,P,P,P,P,P];y.set(b,p*_*P)}const I=new On;I.setAttribute("position",new pn(T,g)),I.setAttribute("uv",new pn(E,m)),I.setAttribute("faceIndex",new pn(y,p)),t.push(I),r>$i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wc(n,t,e){const i=new gi(n,t,e);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Pv(n,t,e){const i=new Float32Array(pi),r=new U(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Mc(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sc(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ra||l===sa,u=l===sr||l===or;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ec(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new Ec(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Lv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ji("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dv(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let E=0,y=T.length;E<y;E+=3){const I=T[E+0],P=T[E+1],C=T[E+2];d.push(I,P,P,C,C,I)}}else if(_!==void 0){const T=_.array;g=_.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const I=E+0,P=E+1,C=E+2;d.push(I,P,P,C,C,I)}}else return;const m=new(Du(d)?ku:Bu)(d,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Uv(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),e.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,s,d*o,_),e.update(f,i,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function h(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*g[T];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Iv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Nv(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let I=a.attributes.position.count*y,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*P*4*h),L=new Iu(C,I,P,h);L.type=Cn,L.needsUpdate=!0;const M=y*4;for(let A=0;A<h;A++){const q=p[A],k=T[A],j=E[A],Y=I*P*4*A;for(let H=0;H<q.count;H++){const Z=H*M;_===!0&&(r.fromBufferAttribute(q,H),C[Y+Z+0]=r.x,C[Y+Z+1]=r.y,C[Y+Z+2]=r.z,C[Y+Z+3]=0),g===!0&&(r.fromBufferAttribute(k,H),C[Y+Z+4]=r.x,C[Y+Z+5]=r.y,C[Y+Z+6]=r.z,C[Y+Z+7]=0),m===!0&&(r.fromBufferAttribute(j,H),C[Y+Z+8]=r.x,C[Y+Z+9]=r.y,C[Y+Z+10]=r.z,C[Y+Z+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new ot(I,P)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Ov(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const th=new Le,Tc=new Wu(1,1),eh=new Iu,nh=new Ap,ih=new Hu,Cc=[],Ac=[],Pc=new Float32Array(16),Rc=new Float32Array(9),Lc=new Float32Array(4);function fr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function eo(n,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Fv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function zv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Lc.set(i),n.uniformMatrix2fv(this.addr,!1,Lc),Ee(e,i)}}function Hv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),Ee(e,i)}}function Gv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,i))return;Pc.set(i),n.uniformMatrix4fv(this.addr,!1,Pc),Ee(e,i)}}function Wv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Yv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function $v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Jv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=Lu,s=Tc):s=th,e.setTexture2D(t||s,r)}function Qv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||nh,r)}function tg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ih,r)}function eg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||eh,r)}function ng(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return kv;case 35666:return Vv;case 35674:return zv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return jv;case 5125:return Yv;case 36294:return Kv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(n,t){n.uniform1fv(this.addr,t)}function rg(n,t){const e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function sg(n,t){const e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function og(n,t){const e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function ag(n,t){const e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function lg(n,t){const e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cg(n,t){const e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ug(n,t){n.uniform1iv(this.addr,t)}function hg(n,t){n.uniform2iv(this.addr,t)}function dg(n,t){n.uniform3iv(this.addr,t)}function pg(n,t){n.uniform4iv(this.addr,t)}function fg(n,t){n.uniform1uiv(this.addr,t)}function mg(n,t){n.uniform2uiv(this.addr,t)}function _g(n,t){n.uniform3uiv(this.addr,t)}function vg(n,t){n.uniform4uiv(this.addr,t)}function gg(n,t,e){const i=this.cache,r=t.length,s=eo(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||th,s[o])}function xg(n,t,e){const i=this.cache,r=t.length,s=eo(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nh,s[o])}function bg(n,t,e){const i=this.cache,r=t.length,s=eo(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ih,s[o])}function yg(n,t,e){const i=this.cache,r=t.length,s=eo(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||eh,s[o])}function Eg(n){switch(n){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return fg;case 36294:return mg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return yg}}class wg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}}class Mg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}}class Sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Dc(n,t){n.seq.push(t),n.map[t.id]=t}function Tg(n,t,e){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dc(e,c===void 0?new wg(a,n,t):new Mg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Sg(a),Dc(e,h)),e=h}}}class zs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Tg(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Uc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cg=37297;let Ag=0;function Pg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ic=new Bt;function Rg(n){Kt._getMatrix(Ic,Kt.workingColorSpace,n);const t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Ws:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Pg(n.getShaderSource(t),o)}else return r}function Lg(n,t){const e=Rg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dg(n,t){let e;switch(t){case Bd:e="Linear";break;case kd:e="Reinhard";break;case Vd:e="Cineon";break;case zd:e="ACESFilmic";break;case Gd:e="AgX";break;case Wd:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new U;function Ug(){Kt.getLuminanceCoefficients(Ds);const n=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Ng(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Og(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ar(n){return n!==""}function Oc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(Fg,kg)}const Bg=new Map;function kg(n,t){let e=Vt[t];if(e===void 0){const i=Bg.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(n){return n.replace(Vg,zg)}function zg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===vd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case or:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function qg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function jg(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Hg(e),c=Gg(e),u=Wg(e),h=Xg(e),d=qg(e),f=Ig(e),_=Ng(s),g=r.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=Ba(o),o=Oc(o,e),o=Fc(o,e),a=Ba(a),a=Oc(a,e),a=Fc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,y=T+p+a,I=Uc(r,r.VERTEX_SHADER,E),P=Uc(r,r.FRAGMENT_SHADER,y);r.attachShader(g,I),r.attachShader(g,P),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(A){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(P).trim();let Y=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,I,P);else{const Z=Nc(r,I,"vertex"),V=Nc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+Z+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||j==="")&&(H=!1);H&&(A.diagnostics={runnable:Y,programLog:q,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(I),r.deleteShader(P),L=new zs(r,g),M=Og(r,g)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(g,Cg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=P,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $g(t),e.set(t,i)),i}}class $g{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}}function Zg(n,t,e,i,r,s,o){const a=new Ou,l=new Kg,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,A,q,k){const j=q.fog,Y=k.geometry,H=M.isMeshStandardMaterial?q.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),V=Z&&Z.mapping===Js?Z.image.height:null,at=_[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=mt!==void 0?mt.length:0;let Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let Zt,X,rt,wt;if(at){const ne=cn[at];Zt=ne.vertexShader,X=ne.fragmentShader}else Zt=M.vertexShader,X=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),wt=l.getFragmentShaderID(M);const st=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,Lt=k.isBatchedMesh===!0,Xt=!!M.map,$=!!M.matcap,nt=!!Z,S=!!M.aoMap,St=!!M.lightMap,Q=!!M.bumpMap,vt=!!M.normalMap,it=!!M.displacementMap,Rt=!!M.emissiveMap,dt=!!M.metalnessMap,w=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,G=M.dispersion>0,J=M.iridescence>0,W=M.sheen>0,Mt=M.transmission>0,ct=v&&!!M.anisotropyMap,_t=O&&!!M.clearcoatMap,Gt=O&&!!M.clearcoatNormalMap,et=O&&!!M.clearcoatRoughnessMap,xt=J&&!!M.iridescenceMap,Pt=J&&!!M.iridescenceThicknessMap,Ut=W&&!!M.sheenColorMap,bt=W&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,kt=!!M.specularColorMap,se=!!M.specularIntensityMap,R=Mt&&!!M.transmissionMap,ut=Mt&&!!M.thicknessMap,z=!!M.gradientMap,K=!!M.alphaMap,ft=M.alphaTest>0,pt=!!M.alphaHash,Ft=!!M.extensions;let he=Zn;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=n.toneMapping);const Se={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:X,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:cr,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:$,envMap:nt,envMapMode:nt&&Z.mapping,envMapCubeUVHeight:V,aoMap:S,lightMap:St,bumpMap:Q,normalMap:vt,displacementMap:d&&it,emissiveMap:Rt,normalMapObjectSpace:vt&&M.normalMapType===Yd,normalMapTangentSpace:vt&&M.normalMapType===Ru,metalnessMap:dt,roughnessMap:w,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:et,dispersion:G,iridescence:J,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:W,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:se,transmission:Mt,transmissionMap:R,thicknessMap:ut,gradientMap:z,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:pt,combine:M.combine,mapUv:Xt&&g(M.map.channel),aoMapUv:S&&g(M.aoMap.channel),lightMapUv:St&&g(M.lightMap.channel),bumpMapUv:Q&&g(M.bumpMap.channel),normalMapUv:vt&&g(M.normalMap.channel),displacementMapUv:it&&g(M.displacementMap.channel),emissiveMapUv:Rt&&g(M.emissiveMap.channel),metalnessMapUv:dt&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:ct&&g(M.anisotropyMap.channel),clearcoatMapUv:_t&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(M.sheenRoughnessMap.channel),specularMapUv:Wt&&g(M.specularMap.channel),specularColorMapUv:kt&&g(M.specularColorMap.channel),specularIntensityMapUv:se&&g(M.specularIntensityMap.channel),transmissionMapUv:R&&g(M.transmissionMap.channel),thicknessMapUv:ut&&g(M.thicknessMap.channel),alphaMapUv:K&&g(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Xt||K),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)b.push(A),b.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(T(b,M),E(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function T(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function E(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const b=_[M.type];let A;if(b){const q=cn[b];A=Vp.clone(q.uniforms)}else A=M.uniforms;return A}function I(M,b){let A;for(let q=0,k=u.length;q<k;q++){const j=u[q];if(j.cacheKey===b){A=j,++A.usedTimes;break}}return A===void 0&&(A=new jg(n,b,M,s),u.push(A)),A}function P(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:L}}function Jg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Qg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,f,_,g,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function l(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Qg),i.length>1&&i.sort(d||Vc),r.length>1&&r.sort(d||Vc)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function tx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new zc,n.set(i,[o])):r>=s.length?(o=new zc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ex(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ix=0;function rx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sx(n){const t=new ex,e=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new me,o=new me;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,T=0,E=0,y=0,I=0,P=0,C=0;c.sort(rx);for(let M=0,b=c.length;M<b;M++){const A=c[M],q=A.color,k=A.intensity,j=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=q.r*k,h+=q.g*k,d+=q.b*k;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],k);C++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=A.shadow.matrix,T++}i.directional[f]=H,f++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(q).multiplyScalar(k),H.distance=j,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[g]=H;const Z=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,Z.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[g]=Z.matrix,A.castShadow){const V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=Y,y++}g++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(q).multiplyScalar(k),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=A.shadow.matrix,E++}i.point[_]=H,_++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(k),H.groundColor.copy(A.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==I||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=I,L.numLightProbes=C,i.version=ix++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Hc(n){const t=new sx(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ox(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Hc(n),t.set(r,[a])):s>=o.length?(a=new Hc(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cx(n,t,e){let i=new Gu;const r=new ot,s=new ot,o=new fe,a=new Cf({depthPacking:jd}),l=new Af,c={},u=e.maxTextureSize,h={[Qn]:Fe,[Fe]:Qn,[Tn]:Tn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ze(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let p=this.type;this.render=function(P,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),q=n.state;q.setBlending($n),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const k=p!==Sn&&this.type===Sn,j=p===Sn&&this.type!==Sn;for(let Y=0,H=P.length;Y<H;Y++){const Z=P[Y],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const at=V.getFrameExtents();if(r.multiply(at),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||k===!0||j===!0){const Et=this.type!==Sn?{minFilter:ln,magFilter:ln}:{};V.map!==null&&V.map.dispose(),V.map=new gi(r.x,r.y,Et),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const mt=V.getViewportCount();for(let Et=0;Et<mt;Et++){const Ot=V.getViewport(Et);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),q.viewport(o),V.updateMatrices(Z,Et),i=V.getFrustum(),y(C,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Sn&&T(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,A)};function T(P,C){const L=t.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gi(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,L,d,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,L,f,g,null)}function E(P,C,L,M){let b=null;const A=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)b=A;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=b.uuid,k=C.uuid;let j=c[q];j===void 0&&(j={},c[q]=j);let Y=j[k];Y===void 0&&(Y=b.clone(),j[k]=Y,C.addEventListener("dispose",I)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,M===Sn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=n.properties.get(b);q.light=L}return b}function y(P,C,L,M,b){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Sn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const k=t.update(P),j=P.material;if(Array.isArray(j)){const Y=k.groups;for(let H=0,Z=Y.length;H<Z;H++){const V=Y[H],at=j[V.materialIndex];if(at&&at.visible){const mt=E(P,at,M,b);P.onBeforeShadow(n,P,C,L,k,mt,V),n.renderBufferDirect(L,null,k,mt,P,V),P.onAfterShadow(n,P,C,L,k,mt,V)}}}else if(j.visible){const Y=E(P,j,M,b);P.onBeforeShadow(n,P,C,L,k,Y,null),n.renderBufferDirect(L,null,k,Y,P,null),P.onAfterShadow(n,P,C,L,k,Y,null)}}const q=P.children;for(let k=0,j=q.length;k<j;k++)y(q[k],C,L,M,b)}function I(P){P.target.removeEventListener("dispose",I);for(const L in c){const M=c[L],b=P.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const ux={[Zo]:Jo,[Qo]:na,[ta]:ia,[rr]:ea,[Jo]:Zo,[na]:Qo,[ia]:ta,[ea]:rr};function hx(n,t){function e(){let R=!1;const ut=new fe;let z=null;const K=new fe(0,0,0,0);return{setMask:function(ft){z!==ft&&!R&&(n.colorMask(ft,ft,ft,ft),z=ft)},setLocked:function(ft){R=ft},setClear:function(ft,pt,Ft,he,Se){Se===!0&&(ft*=he,pt*=he,Ft*=he),ut.set(ft,pt,Ft,he),K.equals(ut)===!1&&(n.clearColor(ft,pt,Ft,he),K.copy(ut))},reset:function(){R=!1,z=null,K.set(-1,0,0,0)}}}function i(){let R=!1,ut=!1,z=null,K=null,ft=null;return{setReversed:function(pt){if(ut!==pt){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const he=ft;ft=null,this.setClear(he)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?st(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(pt){z!==pt&&!R&&(n.depthMask(pt),z=pt)},setFunc:function(pt){if(ut&&(pt=ux[pt]),K!==pt){switch(pt){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Qo:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case ea:n.depthFunc(n.GEQUAL);break;case na:n.depthFunc(n.GREATER);break;case ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=pt}},setLocked:function(pt){R=pt},setClear:function(pt){ft!==pt&&(ut&&(pt=1-pt),n.clearDepth(pt),ft=pt)},reset:function(){R=!1,z=null,K=null,ft=null,ut=!1}}}function r(){let R=!1,ut=null,z=null,K=null,ft=null,pt=null,Ft=null,he=null,Se=null;return{setTest:function(ne){R||(ne?st(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!R&&(n.stencilMask(ne),ut=ne)},setFunc:function(ne,tn,vn){(z!==ne||K!==tn||ft!==vn)&&(n.stencilFunc(ne,tn,vn),z=ne,K=tn,ft=vn)},setOp:function(ne,tn,vn){(pt!==ne||Ft!==tn||he!==vn)&&(n.stencilOp(ne,tn,vn),pt=ne,Ft=tn,he=vn)},setLocked:function(ne){R=ne},setClear:function(ne){Se!==ne&&(n.clearStencil(ne),Se=ne)},reset:function(){R=!1,ut=null,z=null,K=null,ft=null,pt=null,Ft=null,he=null,Se=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,E=null,y=null,I=null,P=null,C=new te(0,0,0),L=0,M=!1,b=null,A=null,q=null,k=null,j=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let at=null,mt={};const Et=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),Zt=new fe().fromArray(Et),X=new fe().fromArray(Ot);function rt(R,ut,z,K){const ft=new Uint8Array(4),pt=n.createTexture();n.bindTexture(R,pt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<z;Ft++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ut+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return pt}const wt={};wt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(rr),Q(!1),vt(zl),st(n.CULL_FACE),S($n);function st(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Tt(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Dt(R,ut){return h[R]!==ut?(n.bindFramebuffer(R,ut),h[R]=ut,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Lt(R,ut){let z=f,K=!1;if(R){z=d.get(ut),z===void 0&&(z=[],d.set(ut,z));const ft=R.textures;if(z.length!==ft.length||z[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Ft=ft.length;pt<Ft;pt++)z[pt]=n.COLOR_ATTACHMENT0+pt;z.length=ft.length,K=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,K=!0);K&&n.drawBuffers(z)}function Xt(R){return _!==R?(n.useProgram(R),_=R,!0):!1}const $={[di]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[bd]:n.FUNC_REVERSE_SUBTRACT};$[yd]=n.MIN,$[Ed]=n.MAX;const nt={[wd]:n.ZERO,[Md]:n.ONE,[Sd]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[Ld]:n.SRC_ALPHA_SATURATE,[Pd]:n.DST_COLOR,[Cd]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[$o]:n.ONE_MINUS_SRC_ALPHA,[Rd]:n.ONE_MINUS_DST_COLOR,[Ad]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[Ud]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Nd]:n.ONE_MINUS_CONSTANT_ALPHA};function S(R,ut,z,K,ft,pt,Ft,he,Se,ne){if(R===$n){g===!0&&(Tt(n.BLEND),g=!1);return}if(g===!1&&(st(n.BLEND),g=!0),R!==gd){if(R!==m||ne!==M){if((p!==di||y!==di)&&(n.blendEquation(n.FUNC_ADD),p=di,y=di),ne)switch(R){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,E=null,I=null,P=null,C.set(0,0,0),L=0,m=R,M=ne}return}ft=ft||ut,pt=pt||z,Ft=Ft||K,(ut!==p||ft!==y)&&(n.blendEquationSeparate($[ut],$[ft]),p=ut,y=ft),(z!==T||K!==E||pt!==I||Ft!==P)&&(n.blendFuncSeparate(nt[z],nt[K],nt[pt],nt[Ft]),T=z,E=K,I=pt,P=Ft),(he.equals(C)===!1||Se!==L)&&(n.blendColor(he.r,he.g,he.b,Se),C.copy(he),L=Se),m=R,M=!1}function St(R,ut){R.side===Tn?Tt(n.CULL_FACE):st(n.CULL_FACE);let z=R.side===Fe;ut&&(z=!z),Q(z),R.blending===Ji&&R.transparent===!1?S($n):S(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const K=R.stencilWrite;a.setTest(K),K&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Rt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(R){b!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),b=R)}function vt(R){R!==md?(st(n.CULL_FACE),R!==A&&(R===zl?n.cullFace(n.BACK):R===_d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),A=R}function it(R){R!==q&&(H&&n.lineWidth(R),q=R)}function Rt(R,ut,z){R?(st(n.POLYGON_OFFSET_FILL),(k!==ut||j!==z)&&(n.polygonOffset(ut,z),k=ut,j=z)):Tt(n.POLYGON_OFFSET_FILL)}function dt(R){R?st(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function w(R){R===void 0&&(R=n.TEXTURE0+Y-1),at!==R&&(n.activeTexture(R),at=R)}function v(R,ut,z){z===void 0&&(at===null?z=n.TEXTURE0+Y-1:z=at);let K=mt[z];K===void 0&&(K={type:void 0,texture:void 0},mt[z]=K),(K.type!==R||K.texture!==ut)&&(at!==z&&(n.activeTexture(z),at=z),n.bindTexture(R,ut||wt[R]),K.type=R,K.texture=ut)}function O(){const R=mt[at];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ut(R){Zt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Zt.copy(R))}function bt(R){X.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Wt(R,ut){let z=c.get(ut);z===void 0&&(z=new WeakMap,c.set(ut,z));let K=z.get(R);K===void 0&&(K=n.getUniformBlockIndex(ut,R.name),z.set(R,K))}function kt(R,ut){const K=c.get(ut).get(R);l.get(ut)!==K&&(n.uniformBlockBinding(ut,K,R.__bindingPointIndex),l.set(ut,K))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,mt={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,E=null,y=null,I=null,P=null,C=new te(0,0,0),L=0,M=!1,b=null,A=null,q=null,k=null,j=null,Zt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:Dt,drawBuffers:Lt,useProgram:Xt,setBlending:S,setMaterial:St,setFlipSided:Q,setCullFace:vt,setLineWidth:it,setPolygonOffset:Rt,setScissorTest:dt,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:et,texSubImage2D:W,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Ut,viewport:bt,reset:se}}function dx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):Nr("canvas")}function g(w,v,O){let G=1;const J=dt(w);if((J.width>O||J.height>O)&&(G=O/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(G*J.width),Mt=Math.floor(G*J.height);h===void 0&&(h=_(W,Mt));const ct=v?_(W,Mt):h;return ct.width=W,ct.height=Mt,ct.getContext("2d").drawImage(w,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Mt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,v,O,G,J=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=v;if(v===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),v===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const Mt=J?Ws:Kt.getTransfer(G);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Mt===ie?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(w,v){let O;return w?v===null||v===vi||v===ar?O=n.DEPTH24_STENCIL8:v===Cn?O=n.DEPTH32F_STENCIL8:v===Ur&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===ar?O=n.DEPTH_COMPONENT24:v===Cn?O=n.DEPTH_COMPONENT32F:v===Ur&&(O=n.DEPTH_COMPONENT16),O}function I(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function P(w){const v=w.target;v.removeEventListener("dispose",P),L(v),v.isVideoTexture&&u.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),b(v)}function L(w){const v=i.get(w);if(v.__webglInit===void 0)return;const O=w.source,G=d.get(O);if(G){const J=G[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(G).length===0&&d.delete(O)}i.remove(w)}function M(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const O=w.source,G=d.get(O);delete G[v.__cacheKey],o.memory.textures--}function b(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let J=0;J<v.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[G][J]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let G=0,J=O.length;G<J;G++){const W=i.get(O[G]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[G])}i.remove(w)}let A=0;function q(){A=0}function k(){const w=A;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),A+=1,w}function j(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){const O=i.get(w);if(w.isVideoTexture&&it(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,w,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function H(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Z(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function V(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){rt(O,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const at={[oa]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},mt={[ln]:n.NEAREST,[Xd]:n.NEAREST_MIPMAP_NEAREST,[ls]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Et={[Kd]:n.NEVER,[ep]:n.ALWAYS,[$d]:n.LESS,[Lu]:n.LEQUAL,[Zd]:n.EQUAL,[tp]:n.GEQUAL,[Jd]:n.GREATER,[Qd]:n.NOTEQUAL};function Ot(w,v){if(v.type===Cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===lo||v.magFilter===ls||v.magFilter===mi||v.minFilter===hn||v.minFilter===lo||v.minFilter===ls||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,at[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,at[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,at[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==ls&&v.minFilter!==mi||v.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",P));const G=v.source;let J=d.get(G);J===void 0&&(J={},d.set(G,J));const W=j(v);if(W!==w.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[W].usedTimes++;const Mt=J[w.__cacheKey];Mt!==void 0&&(J[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(v)),w.__cacheKey=W,w.__webglTexture=J[W].texture}return O}function X(w,v,O){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const J=Zt(w,v),W=v.source;e.bindTexture(G,w.__webglTexture,n.TEXTURE0+O);const Mt=i.get(W);if(W.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+O);const ct=Kt.getPrimaries(Kt.workingColorSpace),_t=v.colorSpace===Yn?null:Kt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Yn||ct===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=g(v.image,!1,r.maxTextureSize);et=Rt(v,et);const xt=s.convert(v.format,v.colorSpace),Pt=s.convert(v.type);let Ut=E(v.internalFormat,xt,Pt,v.colorSpace,v.isVideoTexture);Ot(G,v);let bt;const Wt=v.mipmaps,kt=v.isVideoTexture!==!0,se=Mt.__version===void 0||J===!0,R=W.dataReady,ut=I(v,et);if(v.isDepthTexture)Ut=y(v.format===lr,v.type),se&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Ut,et.width,et.height,0,xt,Pt,null));else if(v.isDataTexture)if(Wt.length>0){kt&&se&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,Wt[0].width,Wt[0].height);for(let z=0,K=Wt.length;z<K;z++)bt=Wt[z],kt?R&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,bt.width,bt.height,xt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,z,Ut,bt.width,bt.height,0,xt,Pt,bt.data);v.generateMipmaps=!1}else kt?(se&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,et.width,et.height),R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,xt,Pt,et.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,et.width,et.height,0,xt,Pt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ut,Wt[0].width,Wt[0].height,et.depth);for(let z=0,K=Wt.length;z<K;z++)if(bt=Wt[z],v.format!==an)if(xt!==null)if(kt){if(R)if(v.layerUpdates.size>0){const ft=gc(bt.width,bt.height,v.format,v.type);for(const pt of v.layerUpdates){const Ft=bt.data.subarray(pt*ft/bt.data.BYTES_PER_ELEMENT,(pt+1)*ft/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,pt,bt.width,bt.height,1,xt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,et.depth,xt,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,Ut,bt.width,bt.height,et.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?R&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,et.depth,xt,Pt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,z,Ut,bt.width,bt.height,et.depth,0,xt,Pt,bt.data)}else{kt&&se&&e.texStorage2D(n.TEXTURE_2D,ut,Ut,Wt[0].width,Wt[0].height);for(let z=0,K=Wt.length;z<K;z++)bt=Wt[z],v.format!==an?xt!==null?kt?R&&e.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,z,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?R&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,bt.width,bt.height,xt,Pt,bt.data):e.texImage2D(n.TEXTURE_2D,z,Ut,bt.width,bt.height,0,xt,Pt,bt.data)}else if(v.isDataArrayTexture)if(kt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ut,et.width,et.height,et.depth),R)if(v.layerUpdates.size>0){const z=gc(et.width,et.height,v.format,v.type);for(const K of v.layerUpdates){const ft=et.data.subarray(K*z/et.data.BYTES_PER_ELEMENT,(K+1)*z/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,xt,Pt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Pt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,xt,Pt,et.data);else if(v.isData3DTexture)kt?(se&&e.texStorage3D(n.TEXTURE_3D,ut,Ut,et.width,et.height,et.depth),R&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Pt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,xt,Pt,et.data);else if(v.isFramebufferTexture){if(se)if(kt)e.texStorage2D(n.TEXTURE_2D,ut,Ut,et.width,et.height);else{let z=et.width,K=et.height;for(let ft=0;ft<ut;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ut,z,K,0,xt,Pt,null),z>>=1,K>>=1}}else if(Wt.length>0){if(kt&&se){const z=dt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Ut,z.width,z.height)}for(let z=0,K=Wt.length;z<K;z++)bt=Wt[z],kt?R&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,xt,Pt,bt):e.texImage2D(n.TEXTURE_2D,z,Ut,xt,Pt,bt);v.generateMipmaps=!1}else if(kt){if(se){const z=dt(et);e.texStorage2D(n.TEXTURE_2D,ut,Ut,z.width,z.height)}R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,et)}else e.texImage2D(n.TEXTURE_2D,0,Ut,xt,Pt,et);m(v)&&p(G),Mt.__version=W.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,O){if(v.image.length!==6)return;const G=Zt(w,v),J=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const W=i.get(J);if(J.version!==W.__version||G===!0){e.activeTexture(n.TEXTURE0+O);const Mt=Kt.getPrimaries(Kt.workingColorSpace),ct=v.colorSpace===Yn?null:Kt.getPrimaries(v.colorSpace),_t=v.colorSpace===Yn||Mt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let K=0;K<6;K++)!Gt&&!et?xt[K]=g(v.image[K],!0,r.maxCubemapSize):xt[K]=et?v.image[K].image:v.image[K],xt[K]=Rt(v,xt[K]);const Pt=xt[0],Ut=s.convert(v.format,v.colorSpace),bt=s.convert(v.type),Wt=E(v.internalFormat,Ut,bt,v.colorSpace),kt=v.isVideoTexture!==!0,se=W.__version===void 0||G===!0,R=J.dataReady;let ut=I(v,Pt);Ot(n.TEXTURE_CUBE_MAP,v);let z;if(Gt){kt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,Pt.width,Pt.height);for(let K=0;K<6;K++){z=xt[K].mipmaps;for(let ft=0;ft<z.length;ft++){const pt=z[ft];v.format!==an?Ut!==null?kt?R&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,pt.width,pt.height,Ut,bt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,pt.width,pt.height,0,Ut,bt,pt.data)}}}else{if(z=v.mipmaps,kt&&se){z.length>0&&ut++;const K=dt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){kt?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xt[K].width,xt[K].height,Ut,bt,xt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,xt[K].width,xt[K].height,0,Ut,bt,xt[K].data);for(let ft=0;ft<z.length;ft++){const Ft=z[ft].image[K].image;kt?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Ft.width,Ft.height,Ut,bt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,Ft.width,Ft.height,0,Ut,bt,Ft.data)}}else{kt?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ut,bt,xt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Ut,bt,xt[K]);for(let ft=0;ft<z.length;ft++){const pt=z[ft];kt?R&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Ut,bt,pt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,Ut,bt,pt.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function wt(w,v,O,G,J,W){const Mt=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),_t=E(O.internalFormat,Mt,ct,O.colorSpace),Gt=i.get(v),et=i.get(O);if(et.__renderTarget=v,!Gt.__hasExternalTextures){const xt=Math.max(1,v.width>>W),Pt=Math.max(1,v.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,W,_t,xt,Pt,v.depth,0,Mt,ct,null):e.texImage2D(J,W,_t,xt,Pt,0,Mt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,et.__webglTexture,0,Q(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,et.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const G=v.depthTexture,J=G&&G.isDepthTexture?G.type:null,W=y(v.stencilBuffer,J),Mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Q(v);vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,W,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,w)}else{const G=v.textures;for(let J=0;J<G.length;J++){const W=G[J],Mt=s.convert(W.format,W.colorSpace),ct=s.convert(W.type),_t=E(W.internalFormat,Mt,ct,W.colorSpace),Gt=Q(v);O&&vt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,_t,v.width,v.height):vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,_t,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_t,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=G.__webglTexture,W=Q(v);if(v.depthTexture.format===Qi)vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===lr)vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(w){const v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=G}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),st(v.__webglDepthbuffer[G],w,!1);else{const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),st(v.__webglDepthbuffer,w,!1);else{const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(w,v,O){const G=i.get(w);v!==void 0&&wt(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Dt(w)}function Xt(w){const v=w.texture,O=i.get(w),G=i.get(v);w.addEventListener("dispose",C);const J=w.textures,W=w.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let _t=0;_t<v.mipmaps.length;_t++)O.__webglFramebuffer[ct][_t]=n.createFramebuffer()}else O.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ct=0,_t=J.length;ct<_t;ct++){const Gt=i.get(J[ct]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&vt(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const _t=J[ct];O.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Gt=s.convert(_t.format,_t.colorSpace),et=s.convert(_t.type),xt=E(_t.internalFormat,Gt,et,_t.colorSpace,w.isXRRenderTarget===!0),Pt=Q(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),st(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)wt(O.__webglFramebuffer[ct][_t],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else wt(O.__webglFramebuffer[ct],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,_t=J.length;ct<_t;ct++){const Gt=J[ct],et=i.get(Gt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),Ot(n.TEXTURE_2D,Gt),wt(O.__webglFramebuffer,w,Gt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Gt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),Ot(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)wt(O.__webglFramebuffer[_t],w,v,n.COLOR_ATTACHMENT0,ct,_t);else wt(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}w.depthBuffer&&Dt(w)}function $(w){const v=w.textures;for(let O=0,G=v.length;O<G;O++){const J=v[O];if(m(J)){const W=T(w),Mt=i.get(J).__webglTexture;e.bindTexture(W,Mt),p(W),e.unbindTexture()}}}const nt=[],S=[];function St(w){if(w.samples>0){if(vt(w)===!1){const v=w.textures,O=w.width,G=w.height;let J=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(w),ct=v.length>1;if(ct)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const Gt=i.get(v[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,O,G,0,0,O,G,J,n.NEAREST),l===!0&&(nt.length=0,S.length=0,nt.push(n.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(W),S.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const Gt=i.get(v[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Q(w){return Math.min(r.maxSamples,w.samples)}function vt(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(w){const v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Rt(w,v){const O=w.colorSpace,G=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==cr&&O!==Yn&&(Kt.getTransfer(O)===ie?(G!==an||J!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=vt}function px(n,t){function e(i,r=Yn){let s;const o=Kt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bu)return n.BYTE;if(i===yu)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===ja)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Mu)return n.RGB;if(i===an)return n.RGBA;if(i===Su)return n.LUMINANCE;if(i===Tu)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Cu)return n.RED;if(i===$a)return n.RED_INTEGER;if(i===Au)return n.RG;if(i===Za)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===Ns||i===Os||i===Fs||i===Bs)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ua||i===ha)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===la)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===da||i===pa||i===fa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===da||i===pa)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ma||i===_a||i===va||i===ga||i===xa||i===ba||i===ya||i===Ea||i===wa||i===Ma||i===Sa||i===Ta||i===Ca||i===Aa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ma)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_a)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ga)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ya)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ma)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ta)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Aa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ks||i===Pa||i===Ra)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ks)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===La||i===Da||i===Ua)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(i===La)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const fx={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ts;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:mx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gx extends Si{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new vx,m=e.getContextAttributes();let p=null,T=null;const E=[],y=[],I=new ot;let P=null;const C=new $e;C.viewport=new fe;const L=new $e;L.viewport=new fe;const M=[C,L],b=new Of;let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=E[X];return rt===void 0&&(rt=new ko,E[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=E[X];return rt===void 0&&(rt=new ko,E[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=E[X];return rt===void 0&&(rt=new ko,E[X]=rt),rt.getHandSpace()};function k(X){const rt=y.indexOf(X.inputSource);if(rt===-1)return;const wt=E[rt];wt!==void 0&&(wt.update(X.inputSource,X.frame,c||o),wt.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<E.length;X++){const rt=y[X];rt!==null&&(y[X]=null,E[X].disconnect(rt))}A=null,q=null,g.reset(),t.setRenderTarget(p),f=null,d=null,h=null,r=null,T=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let wt=null,st=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?lr:Qi,st=m.stencil?ar:vi);const Dt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Dt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new gi(d.textureWidth,d.textureHeight,{format:an,type:Dn,depthTexture:new Wu(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,wt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new gi(f.framebufferWidth,f.framebufferHeight,{format:an,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Zt.setContext(r),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(X){for(let rt=0;rt<X.removed.length;rt++){const wt=X.removed[rt],st=y.indexOf(wt);st>=0&&(y[st]=null,E[st].disconnect(wt))}for(let rt=0;rt<X.added.length;rt++){const wt=X.added[rt];let st=y.indexOf(wt);if(st===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=y.length){y.push(wt),st=Dt;break}else if(y[Dt]===null){y[Dt]=wt,st=Dt;break}if(st===-1)break}const Tt=E[st];Tt&&Tt.connect(wt)}}const H=new U,Z=new U;function V(X,rt,wt){H.setFromMatrixPosition(rt.matrixWorld),Z.setFromMatrixPosition(wt.matrixWorld);const st=H.distanceTo(Z),Tt=rt.projectionMatrix.elements,Dt=wt.projectionMatrix.elements,Lt=Tt[14]/(Tt[10]-1),Xt=Tt[14]/(Tt[10]+1),$=(Tt[9]+1)/Tt[5],nt=(Tt[9]-1)/Tt[5],S=(Tt[8]-1)/Tt[0],St=(Dt[8]+1)/Dt[0],Q=Lt*S,vt=Lt*St,it=st/(-S+St),Rt=it*-S;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Rt),X.translateZ(it),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const dt=Lt+it,w=Xt+it,v=Q-Rt,O=vt+(st-Rt),G=$*Xt/w*dt,J=nt*Xt/w*dt;X.projectionMatrix.makePerspective(v,O,G,J,dt,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let rt=X.near,wt=X.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),b.near=L.near=C.near=rt,b.far=L.far=C.far=wt,(A!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,q=b.far),C.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,b.layers.mask=C.layers.mask|L.layers.mask;const st=X.parent,Tt=b.cameras;at(b,st);for(let Dt=0;Dt<Tt.length;Dt++)at(Tt[Dt],st);Tt.length===2?V(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),mt(X,b,st)};function mt(X,rt,wt){wt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(wt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ir*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let Et=null;function Ot(X,rt){if(u=rt.getViewerPose(c||o),_=rt,u!==null){const wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let st=!1;wt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Dt=0;Dt<wt.length;Dt++){const Lt=wt[Dt];let Xt=null;if(f!==null)Xt=f.getViewport(Lt);else{const nt=h.getViewSubImage(d,Lt);Xt=nt.viewport,Dt===0&&(t.setRenderTargetTextures(T,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(T))}let $=M[Dt];$===void 0&&($=new $e,$.layers.enable(Dt),$.viewport=new fe,M[Dt]=$),$.matrix.fromArray(Lt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Lt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Dt===0&&(b.matrix.copy($.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push($)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Dt=h.getDepthInformation(wt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,r.renderState)}}for(let wt=0;wt<E.length;wt++){const st=y[wt],Tt=E[wt];st!==null&&Tt!==void 0&&Tt.update(st,rt,c||o)}Et&&Et(X,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),_=null}const Zt=new Qu;Zt.setAnimationLoop(Ot),this.setAnimationLoop=function(X){Et=X},this.dispose=function(){}}}const ci=new Un,xx=new me;function bx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const y=E.program;i.uniformBlockBinding(T,y)}function c(T,E){let y=r[T.id];y===void 0&&(_(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",m));const I=E.program;i.updateUBOMapping(T,I);const P=t.render.frame;s[T.id]!==P&&(d(T),s[T.id]=P)}function u(T){const E=h();T.__bindingPointIndex=E;const y=n.createBuffer(),I=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],y=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,C=y.length;P<C;P++){const L=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,b=L.length;M<b;M++){const A=L[M];if(f(A,P,M,I)===!0){const q=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let j=0;for(let Y=0;Y<k.length;Y++){const H=k[Y],Z=g(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+j,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,E,y,I){const P=T.value,C=E+"_"+y;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const L=I[C];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return I[C]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function _(T){const E=T.uniforms;let y=0;const I=16;for(let C=0,L=E.length;C<L;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,A=M.length;b<A;b++){const q=M[b],k=Array.isArray(q.value)?q.value:[q.value];for(let j=0,Y=k.length;j<Y;j++){const H=k[j],Z=g(H),V=y%I,at=V%Z.boundary,mt=V+at;y+=at,mt!==0&&I-mt<Z.storage&&(y+=I-mt),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=Z.storage}}}const P=y%I;return P>0&&(y+=I-P),T.__size=y,T.__cache={},this}function g(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Ex{constructor(t={}){const{canvas:e=xp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Zn,this.toneMappingExposure=1;const y=this;let I=!1,P=0,C=0,L=null,M=-1,b=null;const A=new fe,q=new fe;let k=null;const j=new te(0);let Y=0,H=e.width,Z=e.height,V=1,at=null,mt=null;const Et=new fe(0,0,H,Z),Ot=new fe(0,0,H,Z);let Zt=!1;const X=new Gu;let rt=!1,wt=!1;this.transmissionResolutionScale=1;const st=new me,Tt=new me,Dt=new U,Lt=new fe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function nt(){return L===null?V:1}let S=i;function St(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),S===null){const D="webgl2";if(S=St(D,x),S===null)throw St(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Q,vt,it,Rt,dt,w,v,O,G,J,W,Mt,ct,_t,Gt,et,xt,Pt,Ut,bt,Wt,kt,se,R;function ut(){Q=new Lv(S),Q.init(),kt=new px(S,Q),vt=new Sv(S,Q,t,kt),it=new hx(S,Q),vt.reverseDepthBuffer&&d&&it.buffers.depth.setReversed(!0),Rt=new Iv(S),dt=new Jg,w=new dx(S,Q,it,dt,vt,kt,Rt),v=new Cv(y),O=new Rv(y),G=new zf(S),se=new wv(S,G),J=new Dv(S,G,Rt,se),W=new Ov(S,J,G,Rt),Ut=new Nv(S,vt,w),et=new Tv(dt),Mt=new Zg(y,v,O,Q,vt,se,et),ct=new bx(y,dt),_t=new tx,Gt=new ox(Q),Pt=new Ev(y,v,O,it,W,f,l),xt=new cx(y,W,vt),R=new yx(S,Rt,vt,it),bt=new Mv(S,Q,Rt),Wt=new Uv(S,Q,Rt),Rt.programs=Mt.programs,y.capabilities=vt,y.extensions=Q,y.properties=dt,y.renderLists=_t,y.shadowMap=xt,y.state=it,y.info=Rt}ut();const z=new gx(y,S);this.xr=z,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const x=Q.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Q.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(H,Z,!1))},this.getSize=function(x){return x.set(H,Z)},this.setSize=function(x,D,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=x,Z=D,e.width=Math.floor(x*V),e.height=Math.floor(D*V),F===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(x,D,F){H=x,Z=D,V=F,e.width=Math.floor(x*F),e.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(Et)},this.setViewport=function(x,D,F,B){x.isVector4?Et.set(x.x,x.y,x.z,x.w):Et.set(x,D,F,B),it.viewport(A.copy(Et).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Ot)},this.setScissor=function(x,D,F,B){x.isVector4?Ot.set(x.x,x.y,x.z,x.w):Ot.set(x,D,F,B),it.scissor(q.copy(Ot).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(x){it.setScissorTest(Zt=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){mt=x},this.getClearColor=function(x){return x.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(x=!0,D=!0,F=!0){let B=0;if(x){let N=!1;if(L!==null){const tt=L.texture.format;N=tt===Ja||tt===Za||tt===$a}if(N){const tt=L.texture.type,ht=tt===Dn||tt===vi||tt===Ur||tt===ar||tt===Ya||tt===Ka,gt=Pt.getClearColor(),yt=Pt.getClearAlpha(),It=gt.r,Nt=gt.g,Ct=gt.b;ht?(_[0]=It,_[1]=Nt,_[2]=Ct,_[3]=yt,S.clearBufferuiv(S.COLOR,0,_)):(g[0]=It,g[1]=Nt,g[2]=Ct,g[3]=yt,S.clearBufferiv(S.COLOR,0,g))}else B|=S.COLOR_BUFFER_BIT}D&&(B|=S.DEPTH_BUFFER_BIT),F&&(B|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Pt.dispose(),_t.dispose(),Gt.dispose(),dt.dispose(),v.dispose(),O.dispose(),W.dispose(),se.dispose(),R.dispose(),Mt.dispose(),z.dispose(),z.removeEventListener("sessionstart",Il),z.removeEventListener("sessionend",Nl),ni.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=Rt.autoReset,D=xt.enabled,F=xt.autoUpdate,B=xt.needsUpdate,N=xt.type;ut(),Rt.autoReset=x,xt.enabled=D,xt.autoUpdate=F,xt.needsUpdate=B,xt.type=N}function pt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ft(x){const D=x.target;D.removeEventListener("dispose",Ft),he(D)}function he(x){Se(x),dt.remove(x)}function Se(x){const D=dt.get(x).programs;D!==void 0&&(D.forEach(function(F){Mt.releaseProgram(F)}),x.isShaderMaterial&&Mt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,B,N,tt){D===null&&(D=Xt);const ht=N.isMesh&&N.matrixWorld.determinant()<0,gt=cd(x,D,F,B,N);it.setMaterial(B,ht);let yt=F.index,It=1;if(B.wireframe===!0){if(yt=J.getWireframeAttribute(F),yt===void 0)return;It=2}const Nt=F.drawRange,Ct=F.attributes.position;let qt=Nt.start*It,Jt=(Nt.start+Nt.count)*It;tt!==null&&(qt=Math.max(qt,tt.start*It),Jt=Math.min(Jt,(tt.start+tt.count)*It)),yt!==null?(qt=Math.max(qt,0),Jt=Math.min(Jt,yt.count)):Ct!=null&&(qt=Math.max(qt,0),Jt=Math.min(Jt,Ct.count));const _e=Jt-qt;if(_e<0||_e===1/0)return;se.setup(N,B,gt,F,yt);let de,Yt=bt;if(yt!==null&&(de=G.get(yt),Yt=Wt,Yt.setIndex(de)),N.isMesh)B.wireframe===!0?(it.setLineWidth(B.wireframeLinewidth*nt()),Yt.setMode(S.LINES)):Yt.setMode(S.TRIANGLES);else if(N.isLine){let At=B.linewidth;At===void 0&&(At=1),it.setLineWidth(At*nt()),N.isLineSegments?Yt.setMode(S.LINES):N.isLineLoop?Yt.setMode(S.LINE_LOOP):Yt.setMode(S.LINE_STRIP)}else N.isPoints?Yt.setMode(S.POINTS):N.isSprite&&Yt.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,Me=N._multiDrawCounts,Qt=N._multiDrawCount,en=yt?G.get(yt).bytesPerElement:1,Pi=dt.get(B).currentProgram.getUniforms();for(let ke=0;ke<Qt;ke++)Pi.setValue(S,"_gl_DrawID",ke),Yt.render(At[ke]/en,Me[ke])}else if(N.isInstancedMesh)Yt.renderInstances(qt,_e,N.count);else if(F.isInstancedBufferGeometry){const At=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Me=Math.min(F.instanceCount,At);Yt.renderInstances(qt,_e,Me)}else Yt.render(qt,_e)};function ne(x,D,F){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=Fe,x.needsUpdate=!0,as(x,D,F),x.side=Qn,x.needsUpdate=!0,as(x,D,F),x.side=Tn):as(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),p=Gt.get(F),p.init(D),E.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){const gt=tt[ht];ne(gt,F,N),B.add(gt)}else ne(tt,F,N),B.add(tt)}),E.pop(),p=null,B},this.compileAsync=function(x,D,F=null){const B=this.compile(x,D,F);return new Promise(N=>{function tt(){if(B.forEach(function(ht){dt.get(ht).currentProgram.isReady()&&B.delete(ht)}),B.size===0){N(x);return}setTimeout(tt,10)}Q.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let tn=null;function vn(x){tn&&tn(x)}function Il(){ni.stop()}function Nl(){ni.start()}const ni=new Qu;ni.setAnimationLoop(vn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(x){tn=x,z.setAnimationLoop(x),x===null?ni.stop():ni.start()},z.addEventListener("sessionstart",Il),z.addEventListener("sessionend",Nl),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,L),p=Gt.get(x,E.length),p.init(D),E.push(p),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Tt),wt=this.localClippingEnabled,rt=et.init(this.clippingPlanes,wt),m=_t.get(x,T.length),m.init(),T.push(m),z.enabled===!0&&z.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&oo(tt,D,-1/0,y.sortObjects)}oo(x,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(at,mt),$=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,$&&Pt.addToRenderList(m,x),this.info.render.frame++,rt===!0&&et.beginShadows();const F=p.state.shadowsArray;xt.render(F,x,D),rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(N.length>0)for(let ht=0,gt=tt.length;ht<gt;ht++){const yt=tt[ht];Fl(B,N,x,yt)}$&&Pt.render(x);for(let ht=0,gt=tt.length;ht<gt;ht++){const yt=tt[ht];Ol(m,x,yt,yt.viewport)}}else N.length>0&&Fl(B,N,x,D),$&&Pt.render(x),Ol(m,x,D);L!==null&&C===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,D),se.resetDefaultState(),M=-1,b=null,E.pop(),E.length>0?(p=E[E.length-1],rt===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function oo(x,D,F,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){B&&Lt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const ht=W.update(x),gt=x.material;gt.visible&&m.push(x,ht,gt,F,Lt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const ht=W.update(x),gt=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Lt.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Lt.copy(ht.boundingSphere.center)),Lt.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){const yt=ht.groups;for(let It=0,Nt=yt.length;It<Nt;It++){const Ct=yt[It],qt=gt[Ct.materialIndex];qt&&qt.visible&&m.push(x,ht,qt,F,Lt.z,Ct)}}else gt.visible&&m.push(x,ht,gt,F,Lt.z,null)}}const tt=x.children;for(let ht=0,gt=tt.length;ht<gt;ht++)oo(tt[ht],D,F,B)}function Ol(x,D,F,B){const N=x.opaque,tt=x.transmissive,ht=x.transparent;p.setupLightsView(F),rt===!0&&et.setGlobalState(y.clippingPlanes,F),B&&it.viewport(A.copy(B)),N.length>0&&os(N,D,F),tt.length>0&&os(tt,D,F),ht.length>0&&os(ht,D,F),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Fl(x,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?qr:Dn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[B.id],ht=B.viewport||A;tt.setSize(ht.z*y.transmissionResolutionScale,ht.w*y.transmissionResolutionScale);const gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(j),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),$&&Pt.render(F);const yt=y.toneMapping;y.toneMapping=Zn;const It=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),rt===!0&&et.setGlobalState(y.clippingPlanes,B),os(x,F,B),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Ct=0,qt=D.length;Ct<qt;Ct++){const Jt=D[Ct],_e=Jt.object,de=Jt.geometry,Yt=Jt.material,At=Jt.group;if(Yt.side===Tn&&_e.layers.test(B.layers)){const Me=Yt.side;Yt.side=Fe,Yt.needsUpdate=!0,Bl(_e,F,B,de,Yt,At),Yt.side=Me,Yt.needsUpdate=!0,Nt=!0}}Nt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor(j,Y),It!==void 0&&(B.viewport=It),y.toneMapping=yt}function os(x,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,tt=x.length;N<tt;N++){const ht=x[N],gt=ht.object,yt=ht.geometry,It=B===null?ht.material:B,Nt=ht.group;gt.layers.test(F.layers)&&Bl(gt,D,F,yt,It,Nt)}}function Bl(x,D,F,B,N,tt){x.onBeforeRender(y,D,F,B,N,tt),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,D,F,B,x,tt),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,y.renderBufferDirect(F,D,B,N,x,tt),N.side=Qn,N.needsUpdate=!0,y.renderBufferDirect(F,D,B,N,x,tt),N.side=Tn):y.renderBufferDirect(F,D,B,N,x,tt),x.onAfterRender(y,D,F,B,N,tt)}function as(x,D,F){D.isScene!==!0&&(D=Xt);const B=dt.get(x),N=p.state.lights,tt=p.state.shadowsArray,ht=N.state.version,gt=Mt.getParameters(x,N.state,tt,D,F),yt=Mt.getProgramCacheKey(gt);let It=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,It===void 0&&(x.addEventListener("dispose",Ft),It=new Map,B.programs=It);let Nt=It.get(yt);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===ht)return Vl(x,gt),Nt}else gt.uniforms=Mt.getUniforms(x),x.onBeforeCompile(gt,y),Nt=Mt.acquireProgram(gt,yt),It.set(yt,Nt),B.uniforms=gt.uniforms;const Ct=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ct.clippingPlanes=et.uniform),Vl(x,gt),B.needsLights=hd(x),B.lightsStateVersion=ht,B.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function kl(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=zs.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Vl(x,D){const F=dt.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function cd(x,D,F,B,N){D.isScene!==!0&&(D=Xt),w.resetTextureUnits();const tt=D.fog,ht=B.isMeshStandardMaterial?D.environment:null,gt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:cr,yt=(B.isMeshStandardMaterial?O:v).get(B.envMap||ht),It=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Nt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ct=!!F.morphAttributes.position,qt=!!F.morphAttributes.normal,Jt=!!F.morphAttributes.color;let _e=Zn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_e=y.toneMapping);const de=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=de!==void 0?de.length:0,At=dt.get(B),Me=p.state.lights;if(rt===!0&&(wt===!0||x!==b)){const Ae=x===b&&B.id===M;et.setState(B,x,Ae)}let Qt=!1;B.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Me.state.version||At.outputColorSpace!==gt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==yt||B.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==It||At.vertexTangents!==Nt||At.morphTargets!==Ct||At.morphNormals!==qt||At.morphColors!==Jt||At.toneMapping!==_e||At.morphTargetsCount!==Yt)&&(Qt=!0):(Qt=!0,At.__version=B.version);let en=At.currentProgram;Qt===!0&&(en=as(B,D,N));let Pi=!1,ke=!1,xr=!1;const ae=en.getUniforms(),Xe=At.uniforms;if(it.useProgram(en.program)&&(Pi=!0,ke=!0,xr=!0),B.id!==M&&(M=B.id,ke=!0),Pi||b!==x){it.buffers.depth.getReversed()?(st.copy(x.projectionMatrix),yp(st),Ep(st),ae.setValue(S,"projectionMatrix",st)):ae.setValue(S,"projectionMatrix",x.projectionMatrix),ae.setValue(S,"viewMatrix",x.matrixWorldInverse);const Ie=ae.map.cameraPosition;Ie!==void 0&&Ie.setValue(S,Dt.setFromMatrixPosition(x.matrixWorld)),vt.logarithmicDepthBuffer&&ae.setValue(S,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(S,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,ke=!0,xr=!0)}if(N.isSkinnedMesh){ae.setOptional(S,N,"bindMatrix"),ae.setOptional(S,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ae.setValue(S,"boneTexture",Ae.boneTexture,w))}N.isBatchedMesh&&(ae.setOptional(S,N,"batchingTexture"),ae.setValue(S,"batchingTexture",N._matricesTexture,w),ae.setOptional(S,N,"batchingIdTexture"),ae.setValue(S,"batchingIdTexture",N._indirectTexture,w),ae.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(S,"batchingColorTexture",N._colorsTexture,w));const qe=F.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Ut.update(N,F,en),(ke||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,ae.setValue(S,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xe.envMap.value=yt,Xe.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),ke&&(ae.setValue(S,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&ud(Xe,xr),tt&&B.fog===!0&&ct.refreshFogUniforms(Xe,tt),ct.refreshMaterialUniforms(Xe,B,V,Z,p.state.transmissionRenderTarget[x.id]),zs.upload(S,kl(At),Xe,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zs.upload(S,kl(At),Xe,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(S,"center",N.center),ae.setValue(S,"modelViewMatrix",N.modelViewMatrix),ae.setValue(S,"normalMatrix",N.normalMatrix),ae.setValue(S,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ae=B.uniformsGroups;for(let Ie=0,ao=Ae.length;Ie<ao;Ie++){const ii=Ae[Ie];R.update(ii,en),R.bind(ii,en)}}return en}function ud(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function hd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,D,F){dt.get(x.texture).__webglTexture=D,dt.get(x.depthTexture).__webglTexture=F;const B=dt.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const F=dt.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const dd=S.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){L=x,P=D,C=F;let B=!0,N=null,tt=!1,ht=!1;if(x){const yt=dt.get(x);if(yt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(S.FRAMEBUFFER,null),B=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(x);else if(yt.__hasExternalTextures)w.rebindTextures(x,dt.get(x.texture).__webglTexture,dt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ct=x.depthTexture;if(yt.__boundDepthTexture!==Ct){if(Ct!==null&&dt.has(Ct)&&(x.width!==Ct.image.width||x.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(x)}}const It=x.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);const Nt=dt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?N=Nt[D][F]:N=Nt[D],tt=!0):x.samples>0&&w.useMultisampledRTT(x)===!1?N=dt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[F]:N=Nt,A.copy(x.viewport),q.copy(x.scissor),k=x.scissorTest}else A.copy(Et).multiplyScalar(V).floor(),q.copy(Ot).multiplyScalar(V).floor(),k=Zt;if(F!==0&&(N=dd),it.bindFramebuffer(S.FRAMEBUFFER,N)&&B&&it.drawBuffers(x,N),it.viewport(A),it.scissor(q),it.setScissorTest(k),tt){const yt=dt.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,F)}else if(ht){const yt=dt.get(x.texture),It=D;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,yt.__webglTexture,F,It)}else if(x!==null&&F!==0){const yt=dt.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,yt.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(x,D,F,B,N,tt,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=dt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){it.bindFramebuffer(S.FRAMEBUFFER,gt);try{const yt=x.texture,It=yt.format,Nt=yt.type;if(!vt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&F>=0&&F<=x.height-N&&S.readPixels(D,F,B,N,kt.convert(It),kt.convert(Nt),tt)}finally{const yt=L!==null?dt.get(L).__webglFramebuffer:null;it.bindFramebuffer(S.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,B,N,tt,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=dt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){const yt=x.texture,It=yt.format,Nt=yt.type;if(!vt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-B&&F>=0&&F<=x.height-N){it.bindFramebuffer(S.FRAMEBUFFER,gt);const Ct=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.bufferData(S.PIXEL_PACK_BUFFER,tt.byteLength,S.STREAM_READ),S.readPixels(D,F,B,N,kt.convert(It),kt.convert(Nt),0);const qt=L!==null?dt.get(L).__webglFramebuffer:null;it.bindFramebuffer(S.FRAMEBUFFER,qt);const Jt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await bp(S,Jt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ct),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,tt),S.deleteBuffer(Ct),S.deleteSync(Jt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,F=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-F),N=Math.floor(x.image.width*B),tt=Math.floor(x.image.height*B),ht=D!==null?D.x:0,gt=D!==null?D.y:0;w.setTexture2D(x,0),S.copyTexSubImage2D(S.TEXTURE_2D,F,0,0,ht,gt,N,tt),it.unbindTexture()};const pd=S.createFramebuffer(),fd=S.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,B=null,N=0,tt=null){x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],D=arguments[2],tt=arguments[3]||0,F=null),tt===null&&(N!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ht,gt,yt,It,Nt,Ct,qt,Jt,_e;const de=x.isCompressedTexture?x.mipmaps[tt]:x.image;if(F!==null)ht=F.max.x-F.min.x,gt=F.max.y-F.min.y,yt=F.isBox3?F.max.z-F.min.z:1,It=F.min.x,Nt=F.min.y,Ct=F.isBox3?F.min.z:0;else{const qe=Math.pow(2,-N);ht=Math.floor(de.width*qe),gt=Math.floor(de.height*qe),x.isDataArrayTexture?yt=de.depth:x.isData3DTexture?yt=Math.floor(de.depth*qe):yt=1,It=0,Nt=0,Ct=0}B!==null?(qt=B.x,Jt=B.y,_e=B.z):(qt=0,Jt=0,_e=0);const Yt=kt.convert(D.format),At=kt.convert(D.type);let Me;D.isData3DTexture?(w.setTexture3D(D,0),Me=S.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(w.setTexture2DArray(D,0),Me=S.TEXTURE_2D_ARRAY):(w.setTexture2D(D,0),Me=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,D.unpackAlignment);const Qt=S.getParameter(S.UNPACK_ROW_LENGTH),en=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Pi=S.getParameter(S.UNPACK_SKIP_PIXELS),ke=S.getParameter(S.UNPACK_SKIP_ROWS),xr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,de.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,de.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,It),S.pixelStorei(S.UNPACK_SKIP_ROWS,Nt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ct);const ae=x.isDataArrayTexture||x.isData3DTexture,Xe=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const qe=dt.get(x),Ae=dt.get(D),Ie=dt.get(qe.__renderTarget),ao=dt.get(Ae.__renderTarget);it.bindFramebuffer(S.READ_FRAMEBUFFER,Ie.__webglFramebuffer),it.bindFramebuffer(S.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let ii=0;ii<yt;ii++)ae&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,dt.get(x).__webglTexture,N,Ct+ii),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,dt.get(D).__webglTexture,tt,_e+ii)),S.blitFramebuffer(It,Nt,ht,gt,qt,Jt,ht,gt,S.DEPTH_BUFFER_BIT,S.NEAREST);it.bindFramebuffer(S.READ_FRAMEBUFFER,null),it.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||dt.has(x)){const qe=dt.get(x),Ae=dt.get(D);it.bindFramebuffer(S.READ_FRAMEBUFFER,pd),it.bindFramebuffer(S.DRAW_FRAMEBUFFER,fd);for(let Ie=0;Ie<yt;Ie++)ae?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,qe.__webglTexture,N,Ct+Ie):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,qe.__webglTexture,N),Xe?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ae.__webglTexture,tt,_e+Ie):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ae.__webglTexture,tt),N!==0?S.blitFramebuffer(It,Nt,ht,gt,qt,Jt,ht,gt,S.COLOR_BUFFER_BIT,S.NEAREST):Xe?S.copyTexSubImage3D(Me,tt,qt,Jt,_e+Ie,It,Nt,ht,gt):S.copyTexSubImage2D(Me,tt,qt,Jt,It,Nt,ht,gt);it.bindFramebuffer(S.READ_FRAMEBUFFER,null),it.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Xe?x.isDataTexture||x.isData3DTexture?S.texSubImage3D(Me,tt,qt,Jt,_e,ht,gt,yt,Yt,At,de.data):D.isCompressedArrayTexture?S.compressedTexSubImage3D(Me,tt,qt,Jt,_e,ht,gt,yt,Yt,de.data):S.texSubImage3D(Me,tt,qt,Jt,_e,ht,gt,yt,Yt,At,de):x.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,tt,qt,Jt,ht,gt,Yt,At,de.data):x.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,tt,qt,Jt,de.width,de.height,Yt,de.data):S.texSubImage2D(S.TEXTURE_2D,tt,qt,Jt,ht,gt,Yt,At,de);S.pixelStorei(S.UNPACK_ROW_LENGTH,Qt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,en),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pi),S.pixelStorei(S.UNPACK_SKIP_ROWS,ke),S.pixelStorei(S.UNPACK_SKIP_IMAGES,xr),tt===0&&D.generateMipmaps&&S.generateMipmap(Me),it.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,B=null,N=0){return x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,x=arguments[2],D=arguments[3],N=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,B,N)},this.initRenderTarget=function(x){dt.get(x).__webglFramebuffer===void 0&&w.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),it.unbindTexture()},this.resetState=function(){P=0,C=0,L=null,it.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const Gc={type:"change"},al={type:"start"},rh={type:"end"},Us=new Nu,Wc=new jn,wx=Math.cos(70*gp.DEG2RAD),xe=new U,Ne=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class Mx extends kf{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new xi,this._lastTargetPosition=new U,this._quat=new xi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vc,this._sphericalDelta=new vc,this._scale=1,this._panOffset=new U,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new U,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tx.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerUp=Cx.bind(this),this._onContextMenu=Ix.bind(this),this._onMouseWheel=Rx.bind(this),this._onKeyDown=Lx.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Ux.bind(this),this._onMouseDown=Ax.bind(this),this._onMouseMove=Px.bind(this),this._interceptControlDown=Nx.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gc),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),r<-Math.PI?r+=Ne:r>Math.PI&&(r-=Ne),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Us.origin.copy(this.object.position),Us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Us.direction))<wx?this.object.lookAt(this.target):(Wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Us.intersectPlane(Wc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(Gc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Sx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Tx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rh),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ax(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(al)}function Px(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Rx(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(al),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rh))}function Lx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(al)}function Ux(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function Ix(n){this.enabled!==!1&&n.preventDefault()}function Nx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ox(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Fx extends Kr{constructor(t){super(t)}load(t,e,i,r){const s=this,o=new Df(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},i,r)}parse(t){return new Bx(t)}}class Bx{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],r=kx(t,e,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function kx(n,t,e){const i=Array.from(n),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=Vx(u,r,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function Vx(n,t,e,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new Bf;let a,l,c,u,h,d,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*t+e,l=g[m++]*t+i,o.moveTo(a,l);break;case"l":a=g[m++]*t+e,l=g[m++]*t+i,o.lineTo(a,l);break;case"q":c=g[m++]*t+e,u=g[m++]*t+i,h=g[m++]*t+e,d=g[m++]*t+i,o.quadraticCurveTo(h,d,c,u);break;case"b":c=g[m++]*t+e,u=g[m++]*t+i,h=g[m++]*t+e,d=g[m++]*t+i,f=g[m++]*t+e,_=g[m++]*t+i,o.bezierCurveTo(h,d,f,_,c,u);break}}return{offsetX:s.ha*t,path:o}}class zx extends rl{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const r=i.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function oe(n){return n==null}function ll(n){return n!==null&&typeof n=="object"}function ka(n){return n!==null&&typeof n=="object"}function Hx(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function yi(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],o=t[r];return ka(s)&&ka(o)?Object.assign(Object.assign({},i),{[r]:yi(s,o)}):Object.assign(Object.assign({},i),{[r]:r in t?o:s})},{})}function cl(n){return ll(n)?"target"in n:!1}const Gx={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class pe{static alreadyDisposed(){return new pe({type:"alreadydisposed"})}static notBindable(){return new pe({type:"notbindable"})}static notCompatible(t,e){return new pe({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new pe({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new pe({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Gx[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class js{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!js.isBindable(i))throw pe.notBindable();if(!(t in i))throw pe.propertyNotFound(t);i[t]=e}}class ge{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class Wx{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new ge,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class Xx{constructor(t){this.emitter=new ge,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class qx{constructor(t){this.emitter=new ge,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function le(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new Xx(n):new Wx(n,t)}function jx(n){return[new qx(n),(t,e)=>{n.setRawValue(t,e)}]}class Ht{constructor(t){this.emitter=new ge,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:le(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Ht(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class $r{constructor(t){this.values=Ht.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class Yx{constructor(t){this.values=Ht.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return oe(i)||(r=Math.max(r,i)),oe(e)||(r=Math.min(r,e)),r}}class Kx{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class $x{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Zx={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Jx{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=Zx[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Qx={"+":n=>n,"-":n=>-n,"~":n=>~n};class t0{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Qx[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ul(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function kr(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function e0(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Vr(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function n0(n,t){const e=Vr(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=Vr(n,t);return r===""?"":i+r}function hl(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=n0(n,t);return i===""?"":e+i}function sh(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=e0(n,t);return t+=i.length,i===""?"":i+Vr(n,t)}function i0(n,t){const e=sh(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=Vr(n,t);return t+=r.length,e+i+r+hl(n,t)}function r0(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Vr(n,t);return t+=i.length,i===""?"":e+i+hl(n,t)}function s0(n,t){const e=sh(n,t);return t+=e.length,e===""?"":e+hl(n,t)}const o0=ul([i0,r0,s0]);function a0(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function l0(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=a0(n,t);return i===""?"":e+i}function c0(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function u0(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=c0(n,t);return i===""?"":e+i}function h0(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function d0(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=h0(n,t);return i===""?"":e+i}const p0=ul([l0,u0,d0]),f0=ul([p0,o0]);function m0(n,t){const e=f0(n,t);return t+=e.length,e===""?null:{evaluable:new $x(e),cursor:t}}function _0(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=ah(n,t);if(!i)return null;t=i.cursor,t+=kr(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function v0(n,t){var e;return(e=m0(n,t))!==null&&e!==void 0?e:_0(n,t)}function oh(n,t){const e=v0(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=oh(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new t0(i,r.evaluable)}):null}function g0(n,t,e){e+=kr(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=kr(t,e).length,{cursor:e,operator:i}):null}function x0(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const o=g0(t,e,i);if(!o)break;i=o.cursor;const a=n(e,i);if(!a)return null;i=a.cursor,s=new Jx(o.operator,s,a.evaluable)}return s?{cursor:i,evaluable:s}:null}}const b0=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>x0(n,t),oh);function ah(n,t){return t+=kr(n,t).length,b0(n,t)}function y0(n){const t=ah(n,0);return!t||t.cursor+kr(n,t.cursor).length!==n.length?null:t.evaluable}function In(n){var t;const e=y0(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function lh(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=In(n);if(!oe(t))return t}return 0}function E0(n){return String(n)}function Be(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function ee(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function Xc(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function be(n,t,e){return Math.min(Math.max(n,t),e)}function ch(n,t){return(n%t+t)%t}function w0(n,t){return oe(n.step)?Math.max(Xc(t),2):Xc(n.step)}function uh(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function hh(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function dh(n,t){return oe(n.step)?null:new Kx(n.step,t)}function ph(n){return!oe(n.max)&&!oe(n.min)?new $r({max:n.max,min:n.min}):!oe(n.max)||!oe(n.min)?new Yx({max:n.max,min:n.min}):null}function fh(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Be(w0(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:uh(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:hh(n,t)}}function mh(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function dl(n){return{constraint:n.constraint,textProps:Ht.fromObject(fh(n.params,n.initialValue))}}class Ci{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class no{constructor(t){this.target=t}}class Zr extends no{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class M0 extends no{constructor(t,e){super(t),this.expanded=e}}class S0 extends no{constructor(t,e){super(t),this.index=e}}class T0 extends no{constructor(t,e){super(t),this.native=e}}class zr extends Ci{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new ge,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new Zr(this,e.binding.target.read(),t.options.last))}}class C0{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new ge}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function A0(n){if(!("binding"in n))return!1;const t=n.binding;return cl(t)&&"read"in t&&"write"in t}function P0(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const o=t[s],a=o(n[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return i}function R0(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function L0(n){return n===null?!1:typeof n=="object"}function Mn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function qc(n){return{custom:t=>Mn(t)(n),boolean:Mn(t=>typeof t=="boolean"?t:void 0)(n),number:Mn(t=>typeof t=="number"?t:void 0)(n),string:Mn(t=>typeof t=="string"?t:void 0)(n),function:Mn(t=>typeof t=="function"?t:void 0)(n),constant:t=>Mn(e=>e===t?t:void 0)(n),raw:Mn(t=>t)(n),object:t=>Mn(e=>{if(L0(e))return P0(e,t)})(n),array:t=>Mn(e=>{if(Array.isArray(e))return R0(e,t)})(n)}}const Va={optional:qc(!0),required:qc(!1)};function ue(n,t){const e=t(Va),i=Va.required.object(e)(n);return i.succeeded?i.value:void 0}function Ge(n,t,e,i){if(t&&!t(n))return!1;const r=ue(n,e);return r?i(r):!1}function We(n,t){var e;return yi((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function _i(n){return"value"in n}function _h(n){if(!ll(n)||!("binding"in n))return!1;const t=n.binding;return cl(t)}const dn="http://www.w3.org/2000/svg";function Ys(n){n.offsetHeight}function D0(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function pl(n){return n.ontouchstart!==void 0}function U0(){return globalThis}function I0(){return U0().document}function N0(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const O0={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function io(n,t){const e=n.createElementNS(dn,"svg");return e.innerHTML=O0[t],e}function vh(n,t,e){n.insertBefore(t,n.children[e])}function fl(n){n.parentElement&&n.parentElement.removeChild(n)}function gh(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function F0(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function xh(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Ln(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function fn(n,t,e){Ln(n.value(t),e)}const B0="tp";function jt(n){return(e,i)=>[B0,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const Mr=jt("lbl");function k0(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class bh{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Mr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Mr("l")),fn(e.props,"label",s=>{oe(s)?this.element.classList.add(Mr(void 0,"nol")):(this.element.classList.remove(Mr(void 0,"nol")),F0(i),i.appendChild(k0(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Mr("v")),this.element.appendChild(r),this.valueElement=r}}class yh{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new bh(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return Ge(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return We(null,{label:this.props.get("label")})}}function V0(){return["veryfirst","first","last","verylast"]}const jc=jt(""),Yc={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ro{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{V0().forEach(i=>{e.classList.remove(jc(void 0,Yc[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(jc(void 0,Yc[i]))})}),this.viewProps.handleDispose(()=>{fl(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return Ge(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return We(null,Object.assign({},this.viewProps.exportState()))}}class Ei extends ro{constructor(t,e){if(e.value!==e.valueController.value)throw pe.shouldNeverHappen();const i=e.valueController.viewProps,r=new yh(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new bh(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return Ge(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return We(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function Kc(n){const t=Object.assign({},n);return delete t.value,t}class Eh extends Ei{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return Ge(t,e=>super.importState(Kc(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return We(()=>Kc(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function z0(n){return _i(n)&&_h(n.value)}class H0 extends Eh{importState(t){return Ge(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function G0(n){return _i(n)&&A0(n.value)}function wh(n,t){for(;n.length<t;)n.push(void 0)}function W0(n){const t=[];return wh(t,n),t}function X0(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function q0(n,t){const e=[...X0(n),t];return e.length>n.length?e.splice(0,e.length-n.length):wh(e,n.length),e}class j0{constructor(t){this.emitter=new ge,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=le(W0(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=q0(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Y0(n){if(!("binding"in n))return!1;const t=n.binding;return cl(t)&&"read"in t&&!("write"in t)}class K0 extends Eh{exportState(){return We(()=>super.exportState(),{binding:{readonly:!0}})}}function $0(n){return _i(n)&&Y0(n.value)}class Z0 extends Ci{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new T0(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function J0(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function mr(n,t){return e=>{J0(n,t,e)}}function ml(n,t){Ln(n,e=>{t.textContent=e??""})}const zo=jt("btn");class Q0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(zo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(zo("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(zo("t")),ml(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class tb{constructor(t,e){this.emitter=new ge,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Q0(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return Ge(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return We(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class $c extends ro{constructor(t,e){const i=new tb(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new yh(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return Ge(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return We(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class Mh{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const _r=new Mh("2.0.5");function Ue(n){return Object.assign({core:_r},n)}const eb=Ue({id:"button",type:"blade",accept(n){const t=ue(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new $c(n.document,{blade:n.blade,buttonProps:Ht.fromObject({title:n.params.title}),labelProps:Ht.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof $c?new Z0(n.controller):null}});function nb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function ib(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function rb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function sb(n){return ll(n)?"refresh"in n&&typeof n.refresh=="function":!1}function ob(n,t){if(!js.isBindable(n))throw pe.notBindable();return new js(n,t)}class ab{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new ge,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,ob(t,e),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(t){return ib(this,t)}addButton(t){return nb(this,t)}addTab(t){return rb(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{sb(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=_h(e.value)?e.value.binding:null;this.emitter_.emit("change",new Zr(i,r?r.target.read():e.value.rawValue,t.options.last))}}class _l extends Ci{constructor(t,e){super(t),this.rackApi_=new ab(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class vl extends ro{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return Ge(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return We(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function za(n){return"rackController"in n}class lb{constructor(t){this.emitter=new ge,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw pe.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function cb(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(_i(i)&&i.value===t)return i}return null}function ub(n){return za(n)?n.rackController.rack.bcSet_:null}class hb{constructor(t){var e,i;this.emitter=new ge,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new lb(ub),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),_i(i))i.value.emitter.on("change",this.onChildValueChange_);else if(za(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(_i(i))i.value.emitter.off("change",this.onChildValueChange_);else if(za(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=cb(this.find(_i),t.sender);if(!e)throw pe.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class gl{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new hb({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&vh(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&fl(t.bladeController.view.element)}}function vr(){return new Ht({positions:le([],{equals:Hx})})}class Jr extends Ht{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Ht.createCore(e);return new Jr(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!oe(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};fn(this,"expanded",i),fn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function db(n,t){let e=0;return D0(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Ys(t),e=t.clientHeight,n.set("temporaryExpanded",null),Ys(t)}),e}function Zc(n,t){t.style.height=n.styleHeight}function xl(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),oe(n.get("expandedHeight"))){const e=db(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Ys(t)}),n.emitter.on("change",()=>{Zc(n,t)}),Zc(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class Sh extends _l{constructor(t,e){super(t,e),this.emitter_=new ge,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new M0(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const Th=jt("cnt");class pb{constructor(t,e){var i;this.className_=jt((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),Th()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),fn(this.foldable_,"completed",mr(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),fn(e.props,"title",c=>{oe(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=t.createElement("div");o.classList.add(this.className_("t")),ml(e.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Ha extends vl{constructor(t,e){var i;const r=Jr.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new pb(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new gl({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,xl(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return Ge(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return We(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const fb=Ue({id:"folder",type:"blade",accept(n){const t=ue(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Ha(n.document,{blade:n.blade,expanded:n.params.expanded,props:Ht.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ha?new Sh(n.controller,n.pool):null}}),mb=jt("");function Jc(n,t){return mr(n,mb(void 0,t))}class Fn extends Ht{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=jx(le(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new Fn(Ht.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Ln(this.globalDisabled_,Jc(t,"disabled")),fn(this,"hidden",Jc(t,"hidden"))}bindDisabled(t){Ln(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Ln(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Qc=jt("tbp");class _b{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Qc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Qc("c")),this.element.appendChild(i),this.containerElement=i}}const Sr=jt("tbi");class vb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Sr()),e.viewProps.bindClassModifiers(this.element),fn(e.props,"selected",s=>{s?this.element.classList.add(Sr(void 0,"sel")):this.element.classList.remove(Sr(void 0,"sel"))});const i=t.createElement("button");i.classList.add(Sr("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Sr("t")),ml(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class gb{constructor(t,e){this.emitter=new ge,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new vb(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ga extends vl{constructor(t,e){const i=new _b(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new gl({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new gb(t,{props:e.itemProps,viewProps:Fn.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,fn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return Ge(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return We(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class xb extends _l{constructor(t,e){super(t,e),this.emitter_=new ge,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Ga(e,{blade:vr(),itemProps:Ht.fromObject({selected:!1,title:t.title}),props:Ht.fromObject({selected:!1}),viewProps:Fn.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new S0(this,t.rawValue))}}class bb extends _l{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const tu=-1;class yb{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=le(!0),this.selectedIndex=le(tu),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=tu,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Tr=jt("tab");class Eb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Tr(),Th()),e.viewProps.bindClassModifiers(this.element),Ln(e.empty,mr(this.element,Tr(void 0,"nop")));const i=t.createElement("div");i.classList.add(Tr("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(Tr("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(Tr("c")),this.element.appendChild(s),this.contentsElement=s}}class eu extends vl{constructor(t,e){const i=new yb,r=new Eb(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new gl({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;vh(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;fl(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const Ch=Ue({id:"tab",type:"blade",accept(n){const t=ue(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new eu(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Ga(n.document,{blade:vr(),itemProps:Ht.fromObject({selected:!1,title:e.title}),props:Ht.fromObject({selected:!1}),viewProps:Fn.create()});t.add(i)}),t},api(n){return n.controller instanceof eu?new xb(n.controller,n.pool):n.controller instanceof Ga?new bb(n.controller,n.pool):null}});function wb(n,t){const e=n.accept(t.params);if(!e)return null;const i=ue(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:vr(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Fn.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class bl extends zr{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class Mb{constructor(){this.disabled=!1,this.emitter=new ge}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Sb{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new ge,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Qr{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function Ks(n,t){if(n instanceof t)return n;if(n instanceof Qr){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class ts{constructor(t){this.values=Ht.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function es(n){var t;const e=Va;if(Array.isArray(n))return(t=ue({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function yl(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function El(n){return oe(n)?null:new ts(yl(n))}const Ho=jt("lst");class Tb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Ho()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Ho("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Ho("m")),r.appendChild(io(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,fn(this.props_,"options",s=>{gh(this.selectElement),s.forEach(o=>{const a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ei{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Tb(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return Ge(t,null,e=>({options:e.required.custom(es)}),e=>(this.props.set("options",yl(e.options)),!0))}exportProps(){return We(null,{options:this.props.get("options")})}}const nu=jt("pop");class Cb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(nu()),e.viewProps.bindClassModifiers(this.element),Ln(e.shows,mr(this.element,nu(void 0,"v")))}}class Ah{constructor(t,e){this.shows=le(!1),this.viewProps=e.viewProps,this.view=new Cb(t,{shows:this.shows,viewProps:this.viewProps})}}const iu=jt("txt");class Ab{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(iu()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(iu("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Hr{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Ab(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);oe(r)||(this.value.rawValue=r),this.view.refresh()}}function Pb(n){return String(n)}function Ph(n){return n==="false"?!1:!!n}function ru(n){return Pb(n)}function Rb(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const Lb=Be(0);function $s(n){return Lb(n)+"%"}function Rh(n){return String(n)}function Wa(n){return n}function gr({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}n.emitter.on("change",o=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),o.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Oe(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Gr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Nn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Db(n){return n==="ArrowUp"||n==="ArrowDown"}function Lh(n){return Db(n)||n==="ArrowLeft"||n==="ArrowRight"}function Go(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Ai{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new ge,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Go(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Go(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Go(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const Ye=jt("txt");class Ub{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Ye(),Ye(void 0,"num")),e.arrayPosition&&this.element.classList.add(Ye(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Ye("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ye()),this.inputElement.classList.add(Ye("i"));const r=t.createElement("div");r.classList.add(Ye("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(dn,"svg");s.classList.add(Ye("g")),this.knobElement.appendChild(s);const o=t.createElementNS(dn,"path");o.classList.add(Ye("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=t.createElementNS(dn,"path");a.classList.add(Ye("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=t.createElement("div");l.classList.add(jt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Ye(void 0,"drg"));return}this.element.classList.add(Ye(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=be(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class ns{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=le(null),this.view=new Ub(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Ai(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let o=t;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);oe(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Oe(this.props.get("keyScale"),Gr(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Oe(this.props.get("keyScale"),Gr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Wo=jt("sld");class Ib{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Wo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Wo("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Wo("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=be(ee(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class Nb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new Ib(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ai(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(ee(be(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Oe(this.props.get("keyScale"),Nn(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Oe(this.props.get("keyScale"),Nn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xo=jt("sldtxt");class Ob{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xo());const i=t.createElement("div");i.classList.add(Xo("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Xo("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Zs{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Nb(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new ns(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Ob(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return Ge(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return We(null,{max:t.get("max"),min:t.get("min")})}}function Dh(n){return{sliderProps:new Ht({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Ht({formatter:le(n.formatter),keyScale:n.keyScale,pointerScale:le(n.pointerScale)})}}const Fb={containerUnitSize:"cnt-usz"};function Uh(n){return`--${Fb[n]}`}function Wr(n){return mh(n)}function Kn(n){if(ka(n))return ue(n,Wr)}function Pn(n,t){if(!n)return;const e=[],i=dh(n,t);i&&e.push(i);const r=ph(n);return r&&e.push(r),new Qr(e)}function Bb(n){return n?n.major===_r.major:!1}function Ih(n){if(n==="inline"||n==="popup")return n}function is(n,t){n.write(t)}const Is=jt("ckb");class kb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Is()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(Is("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(Is("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(Is("w")),this.labelElement.appendChild(s);const o=io(t,"check");s.appendChild(o),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Vb{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new kb(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function zb(n){const t=[],e=El(n.options);return e&&t.push(e),new Qr(t)}const Hb=Ue({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ue(t,i=>({options:i.optional.custom(es),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Ph,constraint:n=>zb(n.params),writer:n=>is},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ks(i,ts);return r?new ei(t,{props:new Ht({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Vb(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof ei?new bl(n.controller):null}}),ui=jt("col");class Gb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ui()),e.foldable.bindExpandedClass(this.element,ui(void 0,"expanded")),fn(e.foldable,"completed",mr(this.element,ui(void 0,"cpl")));const i=t.createElement("div");i.classList.add(ui("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(ui("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(ui("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(ui("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function Wb(n,t,e){const i=be(n/255,0,1),r=be(t/255,0,1),s=be(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c=0,u=0;const h=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),i===o?c=(r-s)/l:r===o?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function Xb(n,t,e){const i=(n%360+360)%360,r=be(t/100,0,1),s=be(e/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o/2;let c,u,h;return i>=0&&i<60?[c,u,h]=[o,a,0]:i>=60&&i<120?[c,u,h]=[a,o,0]:i>=120&&i<180?[c,u,h]=[0,o,a]:i>=180&&i<240?[c,u,h]=[0,a,o]:i>=240&&i<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function qb(n,t,e){const i=be(n/255,0,1),r=be(t/255,0,1),s=be(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c;l===0?c=0:o===i?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=o===0?0:l/o,h=o;return[c,u*100,h*100]}function Nh(n,t,e){const i=ch(n,360),r=be(t/100,0,1),s=be(e/100,0,1),o=s*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o;let c,u,h;return i>=0&&i<60?[c,u,h]=[o,a,0]:i>=60&&i<120?[c,u,h]=[a,o,0]:i>=120&&i<180?[c,u,h]=[0,o,a]:i>=180&&i<240?[c,u,h]=[0,a,o]:i>=240&&i<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function jb(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function Yb(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function mn(n){return[n[0],n[1],n[2]]}function so(n,t){return[n[0],n[1],n[2],t]}const Kb={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:jb,rgb:Xb},hsv:{hsl:Yb,hsv:(n,t,e)=>[n,t,e],rgb:Nh},rgb:{hsl:Wb,hsv:qb,rgb:(n,t,e)=>[n,t,e]}};function hr(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function $b(n,t){return n===t?t:ch(n,t)}function Oh(n,t,e){var i;const r=hr(t,e);return[t==="rgb"?be(n[0],0,r[0]):$b(n[0],r[0]),be(n[1],0,r[1]),be(n[2],0,r[2]),be((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function su(n,t,e,i){const r=hr(t,e),s=hr(t,i);return n.map((o,a)=>o/r[a]*s[a])}function Fh(n,t,e){const i=su(n,t.mode,t.type,"int"),r=Kb[t.mode][e.mode](...i);return su(r,e.mode,"int",e.type)}class $t{static black(){return new $t([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Oh(t,e,this.type)}getComponents(t){return so(Fh(mn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Wn=jt("colp");class Zb{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Wn()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Wn("hsv"));const r=t.createElement("div");r.classList.add(Wn("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(Wn("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const o=t.createElement("div");if(o.classList.add(Wn("rgb")),this.textsView_=e.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const a=t.createElement("div");a.classList.add(Wn("a"));const l=t.createElement("div");l.classList.add(Wn("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=t.createElement("div");c.classList.add(Wn("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function Jb(n){return n==="int"?"int":n==="float"?"float":void 0}function wl(n){return ue(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(Jb)}),expanded:t.optional.boolean,picker:t.optional.custom(Ih),readonly:t.optional.constant(!1)}))}function wi(n){return n?.1:1}function Bh(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class Ml{constructor(t,e){this.type="float",this.mode=e,this.comps_=Oh(t,e,this.type)}getComponents(t){return so(Fh(mn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Qb={int:(n,t)=>new $t(n,t),float:(n,t)=>new Ml(n,t)};function Sl(n,t,e){return Qb[e](n,t)}function ty(n){return n.type==="float"}function ey(n){return n.type==="int"}function ny(n){const t=n.getComponents(),e=hr(n.mode,"int");return new $t([Math.round(ee(t[0],0,1,0,e[0])),Math.round(ee(t[1],0,1,0,e[1])),Math.round(ee(t[2],0,1,0,e[2])),t[3]],n.mode)}function iy(n){const t=n.getComponents(),e=hr(n.mode,"int");return new Ml([ee(t[0],0,e[0],0,1),ee(t[1],0,e[1],0,1),ee(t[2],0,e[2],0,1),t[3]],n.mode)}function De(n,t){if(n.type===t)return n;if(ey(n)&&t==="float")return iy(n);if(ty(n)&&t==="int")return ny(n);throw pe.shouldNeverHappen()}function ry(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Je(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const sy={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function kh(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return sy[i](e)}function Vh(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Je(t[1],255),Je(t[2],255),Je(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function oy(n){const t=Vh(n);return t?new $t(t,"rgb"):null}function zh(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Je(t[1],255),Je(t[2],255),Je(t[3],255),Je(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function ay(n){const t=zh(n);return t?new $t(t,"rgb"):null}function Hh(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[kh(t[1]),Je(t[2],100),Je(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function ly(n){const t=Hh(n);return t?new $t(t,"hsl"):null}function Gh(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[kh(t[1]),Je(t[2],100),Je(t[3],100),Je(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function cy(n){const t=Gh(n);return t?new $t(t,"hsl"):null}function Wh(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function uy(n){const t=Wh(n);return t?new $t(t,"rgb"):null}function Xh(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),ee(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),ee(parseInt(e[4],16),0,255,0,1)]:null}function hy(n){const t=Xh(n);return t?new $t(t,"rgb"):null}function qh(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function dy(n){return t=>{const e=qh(t);return e?Sl(e,"rgb",n):null}}function jh(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function py(n){return t=>{const e=jh(t);return e?Sl(e,"rgb",n):null}}const fy=[{parser:Wh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Xh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Vh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:zh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Hh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Gh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:qh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:jh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function my(n){return fy.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function _y(n,t="int"){const e=my(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function rs(n){const t=[uy,hy,oy,ay,ly,cy];t.push(dy("int"),py("int"));const e=Rb(t);return i=>{const r=e(i);return r?De(r,n):null}}function vy(n){const t=rs("int");if(typeof n!="string")return $t.black();const e=t(n);return e??$t.black()}function Yh(n){const t=be(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function Tl(n,t="#"){const e=mn(n.getComponents("rgb")).map(Yh).join("");return`${t}${e}`}function Cl(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Yh).join("");return`${t}${i}`}function Kh(n){const t=Be(0),e=De(n,"int");return`rgb(${mn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function Hs(n){const t=Be(2),e=Be(0);return`rgba(${De(n,"int").getComponents("rgb").map((s,o)=>(o===3?t:e)(s)).join(", ")})`}function gy(n){const t=[Be(0),$s,$s],e=De(n,"int");return`hsl(${mn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function xy(n){const t=[Be(0),$s,$s,Be(2)];return`hsla(${De(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function $h(n,t){const e=Be(t==="float"?2:0),i=["r","g","b"],r=De(n,t);return`{${mn(r.getComponents("rgb")).map((o,a)=>`${i[a]}: ${e(o)}`).join(", ")}}`}function by(n){return t=>$h(t,n)}function Zh(n,t){const e=Be(2),i=Be(t==="float"?2:0),r=["r","g","b","a"];return`{${De(n,t).getComponents("rgb").map((a,l)=>{const c=l===3?e:i;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function yy(n){return t=>Zh(t,n)}const Ey=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Tl},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Cl},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Kh},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Hs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:gy},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:xy},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:by(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:yy(t)}],[])];function Jh(n){return Ey.reduce((t,e)=>t||(ry(e.format,n)?e.stringifier:null),null)}const Cr=jt("apl");class wy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Cr()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Cr("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Cr("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(Cr("m")),this.element.appendChild(s),this.markerElem_=s;const o=t.createElement("div");o.classList.add(Cr("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new $t([e[0],e[1],e[2],0],"rgb"),r=new $t([e[0],e[1],e[2],255],"rgb"),s=["to right",Hs(i),Hs(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=Hs(t);const o=ee(e[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class My{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new wy(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ai(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new $t([s,o,a,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Oe(wi(!0),Nn(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new $t([r,s,o,a+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Oe(wi(!0),Nn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Wi=jt("coltxt");function Sy(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class Ty{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Wi()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Wi("m")),this.modeElem_=Sy(t),this.modeElem_.classList.add(Wi("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(Wi("mm")),r.appendChild(io(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Wi("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),Ln(e.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){gh(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(Wi("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Cy(n){return Be(n==="float"?2:0)}function Ay(n,t,e){const i=hr(n,t)[e];return new $r({min:0,max:i})}function Py(n,t,e){return new ns(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Ht.fromObject({formatter:Cy(t.colorType),keyScale:wi(!1),pointerScale:t.colorType==="float"?.01:1}),value:le(0,{constraint:Ay(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Ry(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:In,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=Py(n,e,i);return gr({primary:t.value,secondary:r.value,forward(s){return De(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,o){const a=t.colorMode,c=De(s,t.colorType).getComponents(a);c[i]=o;const u=Sl(so(mn(c),c[3]),a,t.colorType);return De(u,"int")}}),r})}function Ly(n,t){const e=new Hr(n,{parser:rs("int"),props:Ht.fromObject({formatter:Tl}),value:le($t.black()),viewProps:t.viewProps});return gr({primary:t.value,secondary:e.value,forward:i=>new $t(mn(i.getComponents()),i.mode),backward:(i,r)=>new $t(so(mn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Dy(n){return n!=="hex"}class Uy{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=le(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Ty(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Dy(e)?Ry(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):Ly(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const qo=jt("hpl");class Iy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(qo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(qo("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(qo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Kh(new $t([e,100,100],"hsv"));const i=ee(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Ny{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Iy(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ai(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=ee(be(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new $t([i,s,o,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Oe(wi(!1),Nn(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new $t([r+e,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Oe(wi(!1),Nn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const jo=jt("svp"),ou=64;class Oy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(jo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=ou,i.width=ou,i.classList.add(jo("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(jo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=N0(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=t.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=ee(h,0,r,0,100),f=ee(u,0,s,100,0),_=Nh(i[0],d,f),g=(u*r+h)*4;a[g]=_[0],a[g+1]=_[1],a[g+2]=_[2],a[g+3]=255}t.putImageData(o,0,0);const l=ee(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=ee(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class Fy{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Oy(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ai(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=ee(t.point.x,0,t.bounds.width,0,100),r=ee(t.point.y,0,t.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new $t([s,i,r,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Lh(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),o=wi(!1),a=Oe(o,Nn(t)),l=Oe(o,Gr(t));a===0&&l===0||this.value.setRawValue(new $t([e,i+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=wi(!1),i=Oe(e,Nn(t)),r=Oe(e,Gr(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class By{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Ny(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Fy(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new My(t,{value:this.value,viewProps:this.viewProps}),text:new ns(t,{parser:In,props:Ht.fromObject({pointerScale:.01,keyScale:.1,formatter:Be(2)}),value:le(0,{constraint:new $r({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&gr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new $t(s,i.mode)}}),this.textsC_=new Uy(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new Zb(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Yo=jt("colsw");class ky{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Yo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Yo("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Yo("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Cl(t)}onValueChange_(){this.update_()}}class Vy{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new ky(t,{value:this.value,viewProps:this.viewProps})}}class Al{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Jr.create(e.expanded),this.swatchC_=new Vy(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new Hr(t,{parser:e.parser,props:Ht.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Gb(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Ah(t,{viewProps:this.viewProps}):null;const r=new By(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),gr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=xh(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!pl(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function zy(n){return mn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function Hy(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function Gy(n){return new $t([n>>16&255,n>>8&255,n&255],"rgb")}function Wy(n){return new $t([n>>24&255,n>>16&255,n>>8&255,ee(n&255,0,255,0,1)],"rgb")}function Xy(n){return typeof n!="number"?$t.black():Gy(n)}function qy(n){return typeof n!="number"?$t.black():Wy(n)}function Gs(n,t){return typeof n!="object"||oe(n)?!1:t in n&&typeof n[t]=="number"}function Qh(n){return Gs(n,"r")&&Gs(n,"g")&&Gs(n,"b")}function td(n){return Qh(n)&&Gs(n,"a")}function ed(n){return Qh(n)}function Pl(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function au(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function jy(n){const t=Jh(n);return t?(e,i)=>{is(e,t(i))}:null}function Yy(n){const t=n?Hy:zy;return(e,i)=>{is(e,t(i))}}function Ky(n,t,e){const r=De(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function $y(n,t,e){const r=De(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function Zy(n,t){return(e,i)=>{n?Ky(e,i,t):$y(e,i,t)}}function Jy(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function Qy(n){return n?t=>Cl(t,"0x"):t=>Tl(t,"0x")}function tE(n){return"color"in n||n.view==="color"}const eE=Ue({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!tE(t))return null;const e=wl(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:Jy(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?qy:Xy,equals:Pl,writer:n=>Yy(n.params.supportsAlpha)},controller:n=>{var t,e;return new Al(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:Qy(n.params.supportsAlpha),parser:rs("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function nE(n,t){if(!ed(n))return De($t.black(),t);if(t==="int"){const e=au(n);return new $t(e,"rgb")}if(t==="float"){const e=au(n);return new Ml(e,"rgb")}return De($t.black(),"int")}function iE(n){return td(n)}function rE(n){return t=>{const e=nE(t,n);return De(e,"int")}}function sE(n,t){return e=>n?Zh(e,t):$h(e,t)}const oE=Ue({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!ed(n))return null;const i=wl(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Bh(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>rE(n.params.colorType),equals:Pl,writer:n=>Zy(iE(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=td(n.initialValue);return new Al(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:sE(i,n.params.colorType),parser:rs("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),aE=Ue({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=_y(n,Bh(t));if(!e)return null;const i=Jh(e);if(!i)return null;const r=wl(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>vy,equals:Pl,writer:n=>{const t=jy(n.params.format);if(!t)throw pe.notBindable();return t}},controller:n=>{var t,e;return new Al(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:rs("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class Rl{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&o!==void 0?o:i});return this.asm_.fromComponents(e)}}const lu=jt("pndtxt");class lE{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(lu()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(lu("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function cE(n,t,e){return new ns(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:le(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class Ll{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>cE(t,e,r)),this.acs_.forEach((i,r)=>{gr({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,o)=>{const a=e.assembly.toComponents(s);return a[r]=o,e.assembly.fromComponents(a)}})}),this.view=new lE(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class uE extends zr{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function hE(n,t){const e=[],i=dh(n,t);i&&e.push(i);const r=ph(n);r&&e.push(r);const s=El(n.options);return s&&e.push(s),new Qr(e)}const dE=Ue({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=ue(t,i=>Object.assign(Object.assign({},mh(i)),{options:i.optional.custom(es),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>lh,constraint:n=>hE(n.params,n.initialValue),writer:n=>is},controller:n=>{const t=n.value,e=n.constraint,i=e&&Ks(e,ts);if(i)return new ei(n.document,{props:new Ht({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=fh(n.params,t.rawValue),s=e&&Ks(e,$r);return s?new Zs(n.document,Object.assign(Object.assign({},Dh(Object.assign(Object.assign({},r),{keyScale:le(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:In,value:t,viewProps:n.viewProps})):new ns(n.document,{parser:In,props:Ht.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Zs?new uE(n.controller):n.controller.valueController instanceof ei?new bl(n.controller):null}});class Jn{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(oe(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const nd={toComponents:n=>n.getComponents(),fromComponents:n=>new Jn(...n)},Xi=jt("p2d");class pE{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xi()),e.viewProps.bindClassModifiers(this.element),Ln(e.expanded,mr(this.element,Xi(void 0,"expanded")));const i=t.createElement("div");i.classList.add(Xi("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(Xi("b")),r.appendChild(io(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Xi("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(Xi("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const Xn=jt("p2dp");class fE{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Xn()),e.layout==="popup"&&this.element.classList.add(Xn(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Xn("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(dn,"svg");r.classList.add(Xn("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(dn,"line");s.classList.add(Xn("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=t.createElementNS(dn,"line");o.classList.add(Xn("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=t.createElementNS(dn,"line");a.classList.add(Xn("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=t.createElement("div");l.classList.add(Xn("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=ee(t,-i,+i,0,100),s=ee(e,-i,+i,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function cu(n,t,e){return[Oe(t[0],Nn(n)),Oe(t[1],Gr(n))*(e?1:-1)]}class mE{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new fE(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ai(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=ee(t.point.x,0,t.bounds.width,-i,+i),s=ee(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Jn(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Lh(t.key)&&t.preventDefault();const[e,i]=cu(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Jn(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=cu(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class _E{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Jr.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Ah(t,{viewProps:this.viewProps}):null;const s=new mE(t,{layout:e.pickerLayout,props:new Ht({invertsY:le(e.invertsY),max:le(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new Ll(t,{assembly:nd,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new pE(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),gr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xl(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=xh(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!pl(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function vE(n){return Jn.isObject(n)?new Jn(n.x,n.y):new Jn}function gE(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function xE(n,t){return new Rl({assembly:nd,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y)]})}function uu(n,t){var e,i;if(!oe(n.min)||!oe(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=uh(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function bE(n,t){var e,i;const r=uu(yi(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=uu(yi(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function yE(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const EE=Ue({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Jn.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Wr(i)),{expanded:i.optional.boolean,picker:i.optional.custom(Ih),readonly:i.optional.constant(!1),x:i.optional.custom(Kn),y:i.optional.object(Object.assign(Object.assign({},Wr(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>vE,constraint:n=>xE(n.params,n.initialValue),equals:Jn.equals,writer:()=>gE},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,o=[n.params.x,n.params.y];return new _E(i,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return dl({constraint:s.components[l],initialValue:a,params:yi(n.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:yE(n.params),max:bE(n.params,r.rawValue),parser:In,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class nr{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(oe(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const id={toComponents:n=>n.getComponents(),fromComponents:n=>new nr(...n)};function wE(n){return nr.isObject(n)?new nr(n.x,n.y,n.z):new nr}function ME(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function SE(n,t){return new Rl({assembly:id,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y),Pn(Object.assign(Object.assign({},n),n.z),t.z)]})}const TE=Ue({id:"input-point3d",type:"input",accept:(n,t)=>{if(!nr.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Wr(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(Kn),y:i.optional.custom(Kn),z:i.optional.custom(Kn)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>wE,constraint:n=>SE(n.params,n.initialValue),equals:nr.equals,writer:n=>ME},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new Ll(n.document,{assembly:id,axes:t.rawValue.getComponents().map((r,s)=>{var o;return dl({constraint:e.components[s],initialValue:r,params:yi(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:In,value:t,viewProps:n.viewProps})}});class ir{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(oe(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const rd={toComponents:n=>n.getComponents(),fromComponents:n=>new ir(...n)};function CE(n){return ir.isObject(n)?new ir(n.x,n.y,n.z,n.w):new ir}function AE(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function PE(n,t){return new Rl({assembly:rd,components:[Pn(Object.assign(Object.assign({},n),n.x),t.x),Pn(Object.assign(Object.assign({},n),n.y),t.y),Pn(Object.assign(Object.assign({},n),n.z),t.z),Pn(Object.assign(Object.assign({},n),n.w),t.w)]})}const RE=Ue({id:"input-point4d",type:"input",accept:(n,t)=>{if(!ir.isObject(n))return null;const e=ue(t,i=>Object.assign(Object.assign({},Wr(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(Kn),x:i.optional.custom(Kn),y:i.optional.custom(Kn),z:i.optional.custom(Kn)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>CE,constraint:n=>PE(n.params,n.initialValue),equals:ir.equals,writer:n=>AE},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new Ll(n.document,{assembly:rd,axes:t.rawValue.getComponents().map((r,s)=>{var o;return dl({constraint:e.components[s],initialValue:r,params:yi(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:In,value:t,viewProps:n.viewProps})}});function LE(n){const t=[],e=El(n.options);return e&&t.push(e),new Qr(t)}const DE=Ue({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=ue(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(es)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Rh,constraint:n=>LE(n.params),writer:n=>is},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ks(i,ts);return r?new ei(t,{props:new Ht({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Hr(t,{parser:s=>s,props:Ht.fromObject({formatter:Wa}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof ei?new bl(n.controller):null}}),ss={monitor:{defaultInterval:200,defaultRows:3}},hu=jt("mll");class UE{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(hu()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(hu("i")),i.style.height=`calc(var(${Uh("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class Dl{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new UE(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const du=jt("sgl");class IE{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(du()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(du("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class Ul{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new IE(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const NE=Ue({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ue(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Ph},controller:n=>{var t;return n.value.rawValue.length===1?new Ul(n.document,{formatter:ru,value:n.value,viewProps:n.viewProps}):new Dl(n.document,{formatter:ru,rows:(t=n.params.rows)!==null&&t!==void 0?t:ss.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class OE extends zr{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const qn=jt("grl");class FE{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(qn()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(dn,"svg");i.classList.add(qn("g")),i.style.height=`calc(var(${Uh("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(dn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(qn("t"),jt("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const f=ee(d,0,i,0,t),_=ee(h,r,s,e,0);o.push([f,_].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(qn("t","a"));return}const c=ee(this.cursor_.rawValue,0,i,0,t),u=ee(l,r,s,e,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(qn("t","a"))||(a.classList.add(qn("t","a"),qn("t","in")),Ys(a),a.classList.remove(qn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class sd{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=le(-1),this.view=new FE(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!pl(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Ai(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return Ge(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return We(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(ee(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ee(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Xa(n){return oe(n.format)?Be(2):n.format}function BE(n){var t;return n.value.rawValue.length===1?new Ul(n.document,{formatter:Xa(n.params),value:n.value,viewProps:n.viewProps}):new Dl(n.document,{formatter:Xa(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:ss.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function kE(n){var t,e,i;return new sd(n.document,{formatter:Xa(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:ss.monitor.defaultRows,props:Ht.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function pu(n){return n.view==="graph"}const VE=Ue({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=ue(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>pu(n)?64:1,reader:n=>lh},controller:n=>pu(n.params)?kE(n):BE(n),api:n=>n.controller.valueController instanceof sd?new OE(n.controller):null}),zE=Ue({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=ue(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Rh},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new Dl(n.document,{formatter:Wa,rows:(t=n.params.rows)!==null&&t!==void 0?t:ss.monitor.defaultRows,value:e,viewProps:n.viewProps}):new Ul(n.document,{formatter:Wa,value:e,viewProps:n.viewProps})}});class HE{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class GE{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function WE(n,t){var e;const i=n.accept(t.target.read(),t.params);if(oe(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=ue(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),o=n.binding.reader(r),a=n.binding.constraint?n.binding.constraint(r):void 0,l=new GE({reader:o,target:t.target,writer:n.binding.writer(r)}),c=new C0(le(o(i.initialValue),{constraint:a,equals:n.binding.equals}),l),u=n.controller({constraint:a,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:Fn.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new H0(t.document,{blade:vr(),props:Ht.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class XE{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function qE(n,t){return t===0?new Mb:new Sb(n,t??ss.monitor.defaultInterval)}function jE(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(oe(s))return null;const o={target:t.target,initialValue:s.initialValue,params:s.params},a=ue(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=n.binding.reader(o),c=(i=(e=a==null?void 0:a.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new j0({binding:new XE({reader:l,target:t.target}),bufferSize:c,ticker:qE(t.document,a==null?void 0:a.interval)}),h=n.controller({document:t.document,params:s.params,value:u,viewProps:Fn.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new K0(t.document,{blade:vr(),props:Ht.fromObject({label:"label"in t.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class YE{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!Bb(e.core))throw pe.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??WE(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??jE(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(oe(r))throw new pe({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const o=this.createMonitor_(t,e,i);if(o)return o;throw new pe({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??wb(s,{document:t,params:e}),null);if(!i)throw new pe({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new zr(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new zr(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(G0(t))return this.createInputBindingApi_(t);if($0(t))return this.createMonitorBindingApi_(t);throw pe.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(z0(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw pe.shouldNeverHappen();return this.apiCache_.add(t,e)}}const KE=new HE;function $E(){const n=new YE(KE);return[EE,TE,RE,DE,dE,aE,oE,eE,Hb,NE,zE,VE,eb,fb,Ch].forEach(t=>{n.register("core",t)}),n}class ZE extends Ci{constructor(t){super(t),this.emitter_=new ge,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class JE extends Ci{}class QE extends Ci{constructor(t){super(t),this.emitter_=new ge,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class tw extends Ci{constructor(t){super(t),this.emitter_=new ge,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const ew=function(){return{id:"list",type:"blade",core:_r,accept(n){const t=ue(n,e=>({options:e.required.custom(es),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new ts(yl(n.params.options)),e=le(n.params.value,{constraint:t}),i=new ei(n.document,{props:new Ht({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ei(n.document,{blade:n.blade,props:Ht.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof ei)?null:new ZE(n.controller)}}}();class nw extends Sh{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class iw extends Ha{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const fu=jt("spr");class rw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(fu()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(fu("r")),this.element.appendChild(i)}}class mu extends ro{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new rw(t,{viewProps:e.viewProps})}))}}const sw={id:"separator",type:"blade",core:_r,accept(n){const t=ue(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new mu(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof mu?new JE(n.controller):null}},ow={id:"slider",type:"blade",core:_r,accept(n){const t=ue(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new $r({max:n.params.max,min:n.params.min}),s=le(i,{constraint:r}),o=new Zs(n.document,Object.assign(Object.assign({},Dh({formatter:(e=n.params.format)!==null&&e!==void 0?e:E0,keyScale:le(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:hh(n.params,i)})),{parser:In,value:s,viewProps:n.viewProps}));return new Ei(n.document,{blade:n.blade,props:Ht.fromObject({label:n.params.label}),value:s,valueController:o})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof Zs)?null:new QE(n.controller)}},aw=function(){return{id:"text",type:"blade",core:_r,accept(n){const t=ue(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=le(n.params.value),i=new Hr(n.document,{parser:n.params.parse,props:Ht.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new Ei(n.document,{blade:n.blade,props:Ht.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof Hr)?null:new tw(n.controller)}}}();function lw(n){const t=n.createElement("div");return t.classList.add(jt("dfw")()),n.body&&n.body.appendChild(t),t}function cw(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class uw extends nw{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:I0(),o=$E(),a=new iw(s,{expanded:r.expanded,blade:vr(),props:Ht.fromObject({title:r.title}),viewProps:Fn.create()});super(a,o),this.pool_=o,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:lw(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw pe.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw pe.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&cw(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[ew,sw,ow,Ch,aw]})}}new Mh("4.0.5");new uw({title:"Debug"});const hw=new Ju,dw=new If(hw),pw=dw.load("/textures/matcaps/8.png"),_u=new Pf({matcap:pw}),fw=new Fx;fw.load("/fonts/helvetiker_regular.typeface.json",n=>{console.log("font loaded");const t=new zx("Hello Donuts",{font:n,size:.5,height:.2,curveSegments:6,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:4});t.center(),t.computeBoundingBox(),console.log(t.boundingBox);const e=new Ze(t,_u);Xr.add(e);const i=new sl(.3,.2,20,45);console.time("donuts");for(let r=0;r<300;r++){const s=new Ze(i,_u);s.position.x=(Math.random()-.5)*10,s.position.y=(Math.random()-.5)*10,s.position.z=(Math.random()-.5)*10,s.rotation.x=Math.random()*Math.PI,s.rotation.z=Math.random()*Math.PI;const o=Math.random();s.scale.set(o,o,o),Xr.add(s)}console.timeEnd("donuts")});const Xr=new Xp;new Ze(new pr(1,1,1),new el);const un={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{un.width=window.innerWidth,un.height=window.innerHeight,Mi.aspect=un.width/un.height,Mi.updateProjectionMatrix(),dr.setSize(un.width,un.height),dr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Mi=new $e(75,un.width/un.height,.1,100);Mi.position.z=3;Xr.add(Mi);const od=document.getElementById("canvas"),ad=new Mx(Mi,od);ad.enableDamping=!0;const dr=new Ex({canvas:od});dr.setSize(un.width,un.height);dr.setPixelRatio(Math.min(window.devicePixelRatio,2));dr.render(Xr,Mi);const mw=new Ff,ld=()=>{mw.getElapsedTime(),ad.update(),dr.render(Xr,Mi),window.requestAnimationFrame(ld)};ld();
