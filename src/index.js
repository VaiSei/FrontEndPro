import {notes} from "./data";
console.log(notes);
const pageBody=document.querySelector("table");
const createRow=({id,name, age,email,country,conpany,birthday})=>{
    const html=` 
        <th>${id}</th>
        <th>${name}</th> 
        <th>${age}</th>
        <th>${email}</th>
        <th>${country}</th> 
        <th>${conpany}</th>
        <th>${birthday}</th>`;
        return html;
};
const render= ()=>{
    const list= notes.map((note)=>{
        const row= document.createElement("tr");
        row.className="list-row";
        const rowHtml=createRow(note);
        row.innerHTML=rowHtml;
        return row;
    });
    pageBody.append(...list);
}
render();