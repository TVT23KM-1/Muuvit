import { useState } from 'react';
import styles from './css/Notice.module.css';
import { set } from 'date-fns';

const Notice = ({noticeHeader, noticeText, position, showSeconds, setNotice}) => {
        const [hide, setHide] = useState({hide: false, display: 'block'});
        if (showSeconds) {
            setTimeout(() => {
                /*setHide({hide: true, display: 'none'})*/;
                setNotice({message: '', show: false});
            }, showSeconds * 1000);
        }
        return (
            <div
                className={styles.noticeContainer}
                style={{
                    position: 'fixed',
                    transform: position.transform,
                    zIndex: 9999,
                    left: position.left,
                    top: position.top
                }}
            >
                <h1 className={styles.noticeHeader}>{noticeHeader}</h1>
                <p className={styles.noticeParagraph}>{noticeText}</p>
            </div>
        );
}

export default Notice;