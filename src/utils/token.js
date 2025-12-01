export function SaveToken(token){
    if(typeof window != "undefined") {
        localStorage.setItem("Token",token)
    }
}