import styles from './index.module.css'
import { LoadingPanelProps } from './types'
import { loadingMessage } from './constants'

const LoadingPanel = ({ type }: LoadingPanelProps) => <div className={styles.loader}>{loadingMessage[type]}</div>

export default LoadingPanel