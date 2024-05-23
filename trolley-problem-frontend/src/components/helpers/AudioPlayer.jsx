// AudioPlayer.jsx
import React, { useEffect, useRef } from 'react'

const AudioPlayer = ({ src, volume, control }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    switch (control) {
      case 'play':
        audioRef.current.src = src
        audioRef.current.volume = volume
        audioRef.current.play()
        break
      case 'stop':
        audioRef.current.src = ''
        break
      default:
        break
    }
  }, [control])

  return <audio ref={audioRef} src={src} />
}

export default AudioPlayer