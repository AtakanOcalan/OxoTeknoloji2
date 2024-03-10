import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App'
import { Button, TextField } from '@mui/material'



function ApkInsta() {
    const [apks, setapks] = useState([])
    const [id ,setid] = useState('')
    const [variantid, setVariantid] = useState('')
    const [architecture, setArchitecture] = useState('')
    const [minimumVersion, setMinimumVersion] = useState('')
    const [screenDPI, setScreenDPI] = useState('')
    const [relasedate, setRelasedate] = useState('')
    const [deleteid, setDeleteid] = useState('')

    useEffect(()=>{ 
        fetchapks()
   },[])

    const fetchapks = async() => {
        const response = await axios.get('http://localhost:3001/apk/getAllapkInsta')
        setapks(response.data.apkinsta)
        console.log(response.data.apkinsta)
        console.log(response)
    }
    
    const handleSumbit = async(e) =>{
      e.preventDefault();
      try {
        const response = await axios.put(`http://localhost:3001/apk/updateApkInsta/${id}`,{
          variantid,
          architecture,
          minimumVersion,
          screenDPI,
          relasedate
        })
        console.log(response.data)
      } catch (error) {
        console.error('Hata',error)
      }
    }

    const deleteSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.delete(`http://localhost:3001/apk/deleteApkInsta/${deleteid}`);
        console.log(response.data);
        console.log('APK Silindi')
 
      } catch (error) {
        console.error('Hata:', error);
      }
    };

  return (
   <>    
           <div className='apkcss'>
           <ul>
            {apks.map((apkinsta)=>(
                          <>
                           <br/>
                            <li><b>Variant ID:</b>{apkinsta.variantid}</li>
                            <b>Architecture:</b>{apkinsta.architecture}
                            <b>Minimum Version:</b>{apkinsta.minimumVersion}
                            <b>Screen DPI:</b>{apkinsta.screenDPI}
                            <b>Relase Date:</b>{apkinsta.relasedate}<br/>
                            </>
                            ))
                            }
                           </ul>
                            </div>
                            <div>
                              <form onSubmit={handleSumbit}>
                              <TextField id="standard-basic" label="id" variant="standard" value={id} onChange={(e) => setid(e.target.value)} />
                             <TextField id="standard-basic" label="Variant ID" variant="standard" value={variantid} onChange={(e) => setVariantid(e.target.value)} />
                             <TextField id="standard-basic" label="Architecture" variant="standard" value={architecture} onChange={(e) => setArchitecture(e.target.value)} />
                             <TextField id="standard-basic" label="Minimum Version" variant="standard"value={minimumVersion} onChange={(e) => setMinimumVersion(e.target.value)} />
                             <TextField id="standard-basic" label="Screen DPI" variant="standard" value={screenDPI} onChange={(e) => setScreenDPI(e.target.value)}/>
                             <TextField id="standard-basic" label="Relase Date" variant="standard" value={relasedate} onChange={(e) => setRelasedate(e.target.value)}/>
                             <Button variant="contained" type='submit'>UPDATE</Button>
                             </form>
                             <form onSubmit={deleteSubmit}>
                             <TextField id="standard-basic" label="id" variant="standard" value={deleteid} onChange={(e) => setDeleteid(e.target.value)} />
                             <Button variant="contained" type='submit'>DELETE</Button>
                             </form>
                            </div>
        </>
  )
}

export default ApkInsta