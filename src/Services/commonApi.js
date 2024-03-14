import axios from "axios"

const commonApi=async(reqMethod,apiUrl,body)=>{
    const reqconfig={
        method:reqMethod,
        url:apiUrl,
        data:body,
        headers:{'content-Type':'application/json'}
    }
    return await axios(reqconfig).then(res=>{
        return res

    }).catch(err=>{
        return err
    })
     
}

export default commonApi