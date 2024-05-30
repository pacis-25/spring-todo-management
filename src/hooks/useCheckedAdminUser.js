export const isAdminUser = () => {

    let role = sessionStorage.getItem("role");

    if(role != null && role === 'ROLE_ADMIN'){
        return true;
    }else{
        return false;
    }

}