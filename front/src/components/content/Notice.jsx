import styles from './css/Notice.module.css';

const Notice = ({noticeHeader, noticeText, position, showSeconds}) => {
        return (
            <div className={styles.noticeContainer} style={`position:absolute; left:${position?.left}; top: ${position?.top}`}>
                <h1 className={styles.noticeHeader}>{noticeHeader}</h1>
                <p className={styles.noticeParagraph}>{noticeText}</p>
            </div>
        )
}

export default Notice;