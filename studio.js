(()=>{
let lastSelected=selected;
function panel(which){const object=which==='object';$('spacePanel').hidden=object;$('objectPanel').hidden=!object;$('spaceTab').setAttribute('aria-selected',String(!object));$('objectTab').setAttribute('aria-selected',String(object))}
$('spaceTab').onclick=()=>panel('space');$('objectTab').onclick=()=>panel('object');
for(const id of ['spaceTab','objectTab'])$(id).onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();panel(id==='spaceTab'?'object':'space');$(id==='spaceTab'?'objectTab':'spaceTab').focus()}};
$('librarySpaceType').onchange=()=>{$('spaceType').value=$('librarySpaceType').value;$('spaceType').onchange()};
const base=render;render=function(){base();$('librarySpaceType').value=state.spaceType||'office';if(selected!==lastSelected){lastSelected=selected;if(selected!==null)panel('object')}const current=state.items.find(o=>o.id===selected),opening=current&&['door','window'].includes(current.type);document.querySelector('.opening-panel').hidden=!opening;const nothing=!current;$('empty').classList?.toggle('inspector-empty',nothing);$('objectTab').textContent=current?(current.locked?'🔒 선택 물품':'선택 물품'):'선택 물품'};
// Keep double-click naming, but select the inspector immediately on a single click.
render();
})();
