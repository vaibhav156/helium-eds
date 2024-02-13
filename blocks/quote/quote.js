export default function decorate(block) {
    //decorate the quote as block quote element
    const quoteDiv = block.querySelector(':scope > div > div');
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `"${quoteDiv.innerHTML}"`;
    quoteDiv.parentElement.replaceWith(blockquote);
    
    //decorate the author
    const authorDiv = block.querySelector(':scope > div > div');
    if(authorDiv){
        const p = document.createElement('p');
        p.innerHTML = `&emsp; &emsp; &emsp; &emsp; <em> - ${authorDiv.innerText}</em>`;
        authorDiv.parentElement.replaceWith(p);
    }
}
