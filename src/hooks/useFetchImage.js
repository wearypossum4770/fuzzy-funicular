export default function useFetchImage(){
    const [image,setImage] = useState()
    const [errors,setErrors] = useState()
    async function fetchImage(){
        try{
            const resp = await fetch(url, options)
            if (resp.ok){
                const response = await resp.blob()
   /** fetch response methods [text,json,formData,blob,arrayBuffer,] */
//    let img = document.createElement('img');img.style = 'position:fixed;top:10px;left:10px;width:100px';document.body.append(img);img.src = URL.createObjectURL(blob);setTimeout(() => {img.remove();URL.revokeObjectURL(img.src)}, 3000);
            }
        }catch(err){setErrors(err)}
    }
    useEffect(()=>{
     
    })
}