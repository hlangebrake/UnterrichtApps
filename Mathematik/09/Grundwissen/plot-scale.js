// Readable 1/2/5 steps, anchored at zero rather than at arbitrary plot edges.
const PlotScale=(()=>{
  function step(min,max,target=10){const raw=(max-min)/target;if(!(raw>0))throw Error('Invalid axis range');const power=10**Math.floor(Math.log10(raw));return [1,2,5,10].map(n=>n*power).find(n=>n>=raw-raw*1e-10);}
  function ticks(min,max,spacing){if(!(spacing>0)||!(max>min))throw Error('Invalid axis spacing');const first=Math.ceil(min/spacing-1e-9),last=Math.floor(max/spacing+1e-9);if(last-first>1000)throw Error('Too many axis ticks');return Array.from({length:Math.max(0,last-first+1)},(_,i)=>Number(((first+i)*spacing).toFixed(10)));}
  function minor(major,minimum=1){const power=10**Math.floor(Math.log10(major)),lead=major/power;return Math.max(minimum,lead>=5?major/5:major/2);}
  function isMajor(value,spacing){return Math.abs(value/spacing-Math.round(value/spacing))<1e-8;}
  return {step,ticks,minor,isMajor};
})();
