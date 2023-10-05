import styles from './Button.module.css'

/* eslint-disable react/prop-types */
export default function Button(props) {
    return (
        <div>
            <a href={props.src} target='_blank' rel="noreferrer">
                <button className={styles.button}>{props.children}</button>
            </a>
        </div>
    )
}