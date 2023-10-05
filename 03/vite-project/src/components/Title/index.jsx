import styles from './styles.module.css'

export default function Title(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <h2 className={styles.wrapper}>{props.children}</h2>
    )
}