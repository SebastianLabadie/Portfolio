import {Link} from 'react-router-dom'

import React from 'react'

function MenuItem({onClick,title,url,cName}) {
    return (
        <li>
          <Link onClick={onClick} to={url} className={cName}>
            {title}
          </Link>
        </li>
    )
}

export default MenuItem
