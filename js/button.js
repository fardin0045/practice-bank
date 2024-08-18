document.getElementById('font-bold').addEventListener('click',function(){
   const getText = document.getElementById('text-field');
    if (getText.style.fontWeight === 'bold') {
        getText.style.fontWeight = 'normal';  // Revert to normal
    } else {
        getText.style.fontWeight = 'bold';  // Set to italic
    }
   
})
document.getElementById('font-italic').addEventListener('click',function(){
    const getText = document.getElementById('text-field');
    if (getText.style.fontStyle === 'italic') {
        getText.style.fontStyle = 'normal';  // Revert to normal
    } else {
        getText.style.fontStyle = 'italic';  // Set to italic
    }
    
 })
document.getElementById('font-underline').addEventListener('click',function(){
    const getText = document.getElementById('text-field');
    if (getText.style.textDecoration=== 'underline') {
        getText.style.textDecoration = 'none';  // Revert to normal
    } else {
        getText.style.textDecoration = 'underline';  // Set to italic
    }
    
 })

//  justifications parts
// 1.text justify
document.getElementById('text-justify').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
  
    if (getText.style.textAlign === 'justify'){
        getText.style.textAlign ='left';
    }
    else{
        getText.style.textAlign = 'justify';
    }
})
// 2. text center
document.getElementById('text-center').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
  
    if (getText.style.textAlign === 'center'){
        getText.style.textAlign ='left';
    }
    else{
        getText.style.textAlign = 'center';
    }
})
// 3.text left
document.getElementById('text-left').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
  
    if (getText.style.textAlign === 'left'){
        getText.style.textAlign ='left';
    }
    else{
        getText.style.textAlign = 'left';
    }
})
// 4.text right
document.getElementById('text-right').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
  
    if (getText.style.textAlign === 'right'){
        getText.style.textAlign ='left';
    }
    else{
        getText.style.textAlign = 'right';
    }
})
// small-font size parts
document.getElementById('small-font').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
    let currentSize = parseInt(window.getComputedStyle(getText).fontSize);  // Get current font size
    getText.style.fontSize = (currentSize - 2) + 'px'; 
})
// large-font size parts
document.getElementById('big-font').addEventListener('click', function(){
    const getText = document.getElementById('text-field');
    let currentSize = parseInt(window.getComputedStyle(getText).fontSize);  // Get current font size
    getText.style.fontSize = (currentSize + 2) + 'px'; 
})
// color parts
document.getElementById('text-color').addEventListener('click', function(){
    
    const SelectedColor = this.value;
    const getText = document.getElementById('text-field');
    getText.style.color = SelectedColor;

})


