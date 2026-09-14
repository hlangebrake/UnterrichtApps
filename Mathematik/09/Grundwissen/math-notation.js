// Presentation only: answer parsing and mathematical values remain unchanged.
const notationAtom=String.raw`(?:\([^()<>]*\)|\\square|□|(?:\d+(?:[,.]\d+)?[a-zA-Z]?|[a-zA-Z]{1,2})(?:\^\{[^{}]+\}|[²³⁴⁵⁶⁷⁸⁹])?)`;
function notationLatex(value){
  const textGroups=[];
  const exponentLatex=exponent=>'^{'+Array.from(exponent,c=>({'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-','⁺':'+','ⁿ':'n'}[c])).join('')+'}';
  let s=String(value??'').replace(/\\text\{([^{}]*)\}/g,(_,body)=>{textGroups.push(body);return '⟬'+(textGroups.length-1)+'⟭';}).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿ]+/g,exponentLatex);
  s=s.replace(/\^\(([^()]*)\)/g,'^{$1}').replace(/\^(?!\{)([-−+]?\d+|[a-zA-Z])/g,'^{$1}');
  const fraction=new RegExp('('+notationAtom+')\\s*/\\s*('+notationAtom+')','g');
  s=s.replace(fraction,(_,a,b)=>`\\frac{${a.startsWith('(')?a.slice(1,-1):a}}{${b.startsWith('(')?b.slice(1,-1):b}}`);
  return s.replace(/□/g,'\\square ').replace(/(\d),(?=\d)/g,'$1{,}').replace(/\b(und|oder)\b/g,'\\text{$1}').replace(/⟬(\d+)⟭/g,(_,i)=>'\\text{'+textGroups[i].replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿ]+/g,e=>'}'+exponentLatex(e)+'\\text{')+'}');
}
function notationProse(text){
  const atom=String.raw`(?:\([0-9a-zA-Z+−\-·* :,.²³^{} ]+\)|□|\d+(?:[,.]\d+)?[a-zA-Z]?|[a-zA-Z]{1,2})(?:\^(?:\{[^{}]+\}|\([^()]+\)|[−+\-]?\d+|[a-zA-Z])|[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿ]+)?`;
  const pattern=new RegExp(String.raw`(?<![\p{L}\d/])(?:\d+\s+\d+/\d+|${atom}\s*/\s*${atom}|(?:\([^()]+\)|\d+(?:[,.]\d+)?|[a-zA-Z])\^(?:\{[^{}]+\}|\([^()]+\)|[−+\-]?\d+|[a-zA-Z]))(?![\p{L}\d/])`,'gu');
  let out='',at=0;
  for(const match of String(text).matchAll(pattern)){out+=esc(text.slice(at,match.index))+renderMath(match[0]);at=match.index+match[0].length;}
  return out+esc(text.slice(at));
}
function notationMaterial(value){
  return String(value??'').split(/(\$[^$]+\$|<\/?(?:b|strong|em|i)>)/g).map(part=>part.startsWith('$')&&part.endsWith('$')?renderMath(part.slice(1,-1)):/^<\/?(?:b|strong|em|i)>$/.test(part)?part:notationProse(part)).join('');
}
function notationHTML(value){
  // Used solely for locally authored discovery fragments, never learner input.
  return String(value).split(/(<\/?[a-zA-Z][^>]*>)/g).map(part=>/^<\/?[a-zA-Z]/.test(part)?part:notationMaterial(part)).join('');
}
function notationSVG(x,y,text,size,color,anchor){
  const width=Math.min(560,Math.max(75,String(text).length*size*.8)),height=size*3;
  const left=anchor==='start'?x:anchor==='end'?x-width:x-width/2;
  return `<foreignObject x="${left}" y="${y-height/2}" width="${width}" height="${height}" overflow="visible"><div xmlns="http://www.w3.org/1999/xhtml" style="height:100%;display:flex;align-items:center;justify-content:${anchor==='start'?'flex-start':anchor==='end'?'flex-end':'center'};font-size:${size}px;color:${color};white-space:nowrap">${notationMaterial(text)}</div></foreignObject>`;
}
