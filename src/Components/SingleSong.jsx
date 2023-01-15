import React,{useEffect,useState} from 'react'

function SingleSong({url}) {
    const [audio,setAudio]=useState();

    useEffect(() => {
      setAudio(new Audio(url));
    
    }, [])
    

    function getNome(){
        let appoggio=url.split('https://firebasestorage.googleapis.com/v0/b/mymusic1112.appspot.com/o/')[1];
        return appoggio.split('?')[0]
    }

  return (
    <div>
        <div>{getNome()}</div>
        <button onClick={()=>audio.play()}>Play</button>
    </div>
  )
}

export default SingleSong