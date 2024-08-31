window.addEventListener('load',function()
{
     const quort=this.document.querySelector('.landing-quort')
     const info=this.document.querySelector('.landing-info')
     const buttons=this.document.querySelector('.buttons-landing')
     
     this.setTimeout(function(){
           quort.classList.add('slideup');
     },400)
     this.setTimeout(function(){
           info.classList.add('slideup');
     },500)
     this.setTimeout(function(){
           buttons.classList.add('slideup');
     },600)

})