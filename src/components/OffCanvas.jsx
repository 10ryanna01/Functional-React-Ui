import React, {useState, useEffect, useRef} from 'react'

export default function OffCanvas() {

    let [isOpenToggleNavMenu, setIsopenToggleNavMenu] = useState(false)

    let [menuAnimate, setMenuAnimate] = useState(
        " animate__animated animate__fadeIn animate__faster"
      )
      const [menuAnimateCC, setMenuAnimateCC] = useState(
        " animate__animated animate__fadeIn animate__faster"
      )
      const [menuAnimateCCexit, setmenuAnimateCCexit] = useState(
        " animate__animated animate__bounceIn"
      )
    
      let [menuAnimateClose, setmenuAnimateClose] = useState()
    


    const handleToggleNavMenu = e => {
        setIsopenToggleNavMenu(true)
        e.stopPropagation()
      }



    return (

    <>
    <div className="UI__offcanvas"><h2>OffCanvas Nav</h2>



    </div>
    </>
  )
}
