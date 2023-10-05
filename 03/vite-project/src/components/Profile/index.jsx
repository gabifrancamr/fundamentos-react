/* eslint-disable react/prop-types */
import Button from '../Button'
import Title from '../Title'
import ProfileSection from './ProfileSection'
import styles from './Profile.module.css'
import { useState } from 'react'

export default function Profile (props) {
    const [followText, setFollowText] = useState("Follow")

    function handleClick() {
        if(followText === "Follow") {
            setFollowText("Following") 
        } else {
            setFollowText("Follow")
        }
        
    }

    return (
        <div className={styles.component}> 
            <img src={props.img}/>
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followBotton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>
                {props.description}
            </ProfileSection>
            <ProfileSection>
                {props.tel}
            </ProfileSection>
            
            <ProfileSection>
                {props.email}
            </ProfileSection>

            <ProfileSection 
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <Button src={props.github}>Github</Button>
                <Button src={props.linkedin}>Linkedin</Button>
                <Button src={props.twitter}>Twitter</Button>
            </ProfileSection>

        </div>
    )
}