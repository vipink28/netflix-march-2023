export const truncate=(str="", limit)=>{
    if(str.length <= limit){
        return str;
    }
    return str.slice(0, limit) + "..."
}

export const trimYear=(date)=>{
    return new Date(date).getFullYear();
}

export const navScroll = ()=>{
    window.addEventListener('scroll', function(){
        var top = this.scrollY;
        if(top > 100){
            this.document.querySelector('nav').classList.add('scrolled');
        }else{
            this.document.querySelector('nav').classList.remove('scrolled');
        } 
    })
}