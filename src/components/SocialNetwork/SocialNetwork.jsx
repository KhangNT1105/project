import React from 'react'
import './SocialNetwork.scss'
import { AiOutlineSkype, AiOutlineGooglePlus } from 'react-icons/ai';

import { FiTwitter, FiYoutube } from 'react-icons/fi';

export default function SocialNetwork() {
    return (
        <>
            <p className="socialNetwork"><AiOutlineSkype /><AiOutlineGooglePlus /><FiTwitter /><FiYoutube /></p>
        </>
    )
}
