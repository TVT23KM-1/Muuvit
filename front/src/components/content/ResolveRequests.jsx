import React from 'react'
import { useLoginData } from '@context/useLoginData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './css/ResolveRequests.module.css';

export default function ResolveRequests({group_id, pendingRequests, setResolved}) {
  return (
    <div className={styles.openRequests}>
        <div className={styles.request}>
            <div className={styles.left}>
                <h3 key={pendingRequests.userId}>{pendingRequests.username}</h3>
                <span className={styles.memberStatus}>{pendingRequests.status}</span>
            </div>
            <div className={styles.buttons}>
                <button>Hyväksy</button>
                <button>Hylkää</button>
            </div>
        </div>
    </div>
  )
}
