export const truncate=(str="", limit)=>{
    if(str.length <= limit){
        return str;
    }
    return str.slice(0, limit) + "..."
}

export const trimYear=(date)=>{
    return new Date(date).getFullYear();
}