
import styles from './css/GroupResult.module.css';

const GroupResult = ({ name, description, memberCount }) => {
    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <p>{memberCount} jäsentä</p>
            <p>{description}</p>
        </div>
    )
}

export default GroupResult;